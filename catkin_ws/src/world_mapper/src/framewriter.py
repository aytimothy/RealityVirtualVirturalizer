#! /usr/bin/env python2

# import basic python modules
import rospy
import math
import json
import sys
import base64
from math import pi
from math import cos
from math import sin

# import cv_bridge for converting images to opencv format
from cv_bridge import CvBridge, CvBridgeError

# import ros messages
from world_mapper.msg import Frame
from sensor_msgs.msg import CompressedImage
from sensor_msgs.msg import LaserScan
from sensor_msgs.msg import Imu

output = None
frame = Frame()
imu_msg = Imu()
image_msg = CompressedImage()
laser_msg = LaserScan()
imu_hasmsg = False
image_hasmsg = False
laser_hasmsg = False
lastImuMessageTime = None
lastFrameMessageTime = None

rotAdj = 16.4
velAdj = 2048
rotX = 0
rotY = 0
rotZ = 0
posX = 0
posY = 0
posZ = 0
seq = 0

fileDir = "// todo: Set as whatever sys.argv[1] is..."
fileName = "frame"
fileExt = ".json"

bridge = CvBridge()

def checkFrame():
    global fileDir, fileName, fileExt, image_msg, image_hasmsg, imu_msg, imu_hasmsg, laser_msg, laser_hasmsg, frame, seq
    # if there are no messages for any of the topics
    if (image_hasmsg == False or imu_hasmsg == False or laser_hasmsg == False):
        return

    image_hasmsg = False
    imu_hasmsg = False
    laser_hasmsg = False
    
    lastFrameMessageTime = rospy.get_rostime()
    seq += 1
    frame.seq = seq
    frame.timestamp = lastFrameMessageTime
    frame.frameid = ""
    frame.posX = posX
    frame.posY = posY
    frame.posZ = posZ
    frame.rotX = rotX
    frame.rotY = rotY
    frame.rotZ = rotZ
    frame.accX = imu_msg.linear_acceleration.x
    frame.accY = imu_msg.linear_acceleration.y
    frame.accZ = imu_msg.linear_acceleration.z
    frame.gyrX = imu_msg.angular_velocity.x
    frame.gyrY = imu_msg.angular_velocity.y
    frame.gyrZ = imu_msg.angular_velocity.z
    frame.angle_min = laser_msg.angle_min
    frame.angle_max = laser_msg.angle_max
    frame.angle_increment = laser_msg.angle_increment
    frame.range_min = laser_msg.range_min
    frame.range_max = laser_msg.range_max
    frame.ranges = laser_msg.ranges
    frame.intensities = laser_msg.intensities
    frame.img = image_msg.data
    frame.imgfmt = image_msg.format


    j = json.loads("{}")
    j["accX"] = frame.accX
    j["accY"] = frame.accY
    j["accZ"] = frame.accZ
    j["gyrX"] = frame.gyrX
    j["gyrY"] = frame.gyrY
    j["gyrZ"] = frame.gyrZ
    j["posX"] = frame.posX
    j["posY"] = frame.posY
    j["posZ"] = frame.posZ
    j["rotX"] = frame.rotX
    j["rotY"] = frame.rotY
    j["rotZ"] = frame.rotZ
    j["angle_max"] = frame.angle_max
    j["angle_min"] = frame.angle_min
    j["ranges"] = frame.ranges
    j["intensities"] = frame.intensities
    j["img"] = base64.b64encode(frame.img)
    j["imgfmt"] = frame.imgfmt
    j["frameid"] = frame.frameid
    j["seq"] = frame.seq
    j["timestamp"] = frame.timestamp.to_sec()
    json_str = json.dumps(j)
    filepath = fileDir + fileName + '{0:03d}'.format(seq) + fileExt
    file = open(filepath, "w+")
    file.write(json_str)
    file.close()
    print("Wrote frame " + str(seq) + " (len:" + str(len(json_str)) + ", path:" + filepath + ")")
    output.publish(frame)


def imageCallback(data):
    global image_msg, image_hasmsg
    image_msg = data
    image_hasmsg = True
    checkFrame()

def imuCallback(data):
    global imu_msg, imu_hasmsg, posX, posY, posZ, rotX, rotY, rotZ, lastImuMessageTime
    imu_msg = data
    imu_hasmsg = True
    
    now = rospy.get_rostime()
    deltaTime = now.to_sec() - lastImuMessageTime.to_sec()
    lastImuMessageTime = now
    deltaRotX = deltaTime * (data.angular_velocity.x / rotAdj)
    deltaRotY = deltaTime * (data.angular_velocity.y / rotAdj)
    deltaRotZ = deltaTime * (data.angular_velocity.z / rotAdj)
    deltaPosX = deltaTime * (data.linear_acceleration.x / velAdj)
    deltaPosY = deltaTime * (data.linear_acceleration.y / velAdj)
    deltaPosZ = deltaTime * (data.linear_acceleration.z / velAdj)

    rotX += deltaRotX
    rotY += deltaRotY
    rotZ += deltaRotZ

    if rotX >= 360.0:
        rotX -= 360.0
    if rotX < 0.0:
        rotX += 360.0
    if rotY >= 360.0:
        rotY -= 360.0
    if rotY < 0.0:
        rotY += 360.0
    if rotZ >= 360.0:
        rotZ -= 360.0
    if rotZ < 0.0:
        rotZ += 360.0

    radX = rotX * (pi / 180)
    radY = rotY * (pi / 180)
    radZ = rotZ * (pi / 180)
    rx_x = cos(radX) * cos(radY)
    rx_y = (cos(radX) * sin(radY) * sin(radZ)) - (sin(radX) * cos(radZ))
    rx_z = (cos(radX) * sin(radY) * cos(radZ)) + (sin(radX) * cos(radZ))
    ry_x = sin(radX) * cos(radY)
    ry_y = (sin(radX) * sin(radY) * sin(radZ)) + (cos(radX) * cos(radZ))
    ry_z = (sin(radX) * sin(radY) * cos(radZ)) - (cos(radX) * sin(radZ))
    rz_x = -sin(radY)
    rz_y = cos(radY) * sin(radZ)
    rz_z = cos(radY) * cos(radZ)
    vx = (rx_x * deltaRotX) + (rx_y * deltaRotY) + (rx_z * deltaRotZ)
    vy = (ry_x * deltaRotX) + (ry_y * deltaRotY) + (ry_z * deltaRotZ)
    vz = (rz_x * deltaRotX) + (rz_y * deltaRotY) + (rz_z * deltaRotZ)
    finalDeltaX = vx * deltaTime
    finalDeltaY = vy * deltaTime
    finalDeltaZ = vz * deltaTime
    posX += finalDeltaX
    posY += finalDeltaY
    posZ += finalDeltaZ

    checkFrame()

def laserCallback(data):
    global laser_msg, laser_hasmsg
    laser_msg = data
    laser_hasmsg = True
    checkFrame()


def main():
    global fileDir, output, lastImuMessageTime
    if len(sys.argv) <= 1:
        print("Error: Frame save directory required as a argument.\n")
        exit()
    fileDir = sys.argv[1]
    
    rospy.init_node("framewriter")
    lastImuMessageTime = rospy.get_rostime()
    output = rospy.Publisher("output", Frame, queue_size=100)
    rospy.Subscriber("webcam/image_raw/compressed", CompressedImage, imageCallback)
    rospy.Subscriber("imu", Imu, imuCallback)
    rospy.Subscriber("scan", LaserScan, laserCallback)

    r = rospy.Rate(100)
    while not rospy.is_shutdown():
        r.sleep()


if __name__ == '__main__':
    try:
        main()
    except rospy.ROSInterruptException:
        pass
