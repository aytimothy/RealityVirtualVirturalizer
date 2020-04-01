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
# import ros messages
from world_mapper.msg import Frame
from sensor_msgs.msg import LaserScan
from sensor_msgs.msg import Image
from sensor_msgs.msg import Imu

output = None
frame = Frame()
imu_msg = Imu()
image_msg = Image()
laser_msg = LaserScan()
imu_hasmsg = False
image_hasmsg = False
laser_hasmsg = False
lastImuMessageTime = None
lastFrameMessageTime = None

rotAdj = 1
velAdj = 1
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

def checkFrame():
    global fileDir, fileName, fileExt, image_msg, image_hasmsg, imu_msg, imu_hasmsg, laser_msg, laser_hasmsg, frame, seq
    # if there are no messages for any of the topics
    if (not image_hasmsg or not imu_hasmsg or not laser_hasmsg):
        pass

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
    frame.width = image_msg.width
    frame.height = image_msg.height
    frame.depth = 3
    frame.rowSize = image_msg.step
    frame.image = image_msg.data

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
    j["width"] = frame.width
    j["height"] = frame.height
    j["depth"] = frame.depth
    j["image"] = base64.b64encode(frame.image)
    j["frameid"] = frame.frameid
    j["seq"] = frame.seq
    j["timestamp"] = frame.timestamp.to_sec()
    json_str = json.dumps(j)
    file = open(fileDir + fileName + '{0:03d}'.format(5) + fileExt, "w+")
    file.write(json_str)
    file.close()
    output.publish(frame)
    
    # define callback functions
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
    deltaRotX = deltaTime * data.orientation.x * rotAdj
    deltaRotY = deltaTime * data.orientation.y * rotAdj
    deltaRotZ = deltaTime * data.orientation.z * rotAdj
    deltaPosX = deltaTime * data.linear_acceleration.x * velAdj
    deltaPosY = deltaTime * data.linear_acceleration.y * velAdj
    deltaPosZ = deltaTime * data.linear_acceleration.z * velAdj

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
    rx_x = 1
    rx_y = cos(radX) - sin(radX)
    rx_z = sin(radX) + cos(radX)
    ry_x = cos(radY) + sin(radY)
    ry_y = 1
    ry_z = -sin(radY) + cos(radY)
    rz_x = cos(radZ) - sin(radZ)
    rz_y = sin(radZ) + cos(radZ)
    rz_z = 1
    rx_n = rx_x + rx_y + rx_z
    ry_n = ry_x + ry_y + ry_z
    rz_n = rz_x + rz_y + rz_z
    rx_x /= rx_n
    rx_y /= rx_n
    rx_z /= rx_n
    ry_x /= ry_n
    ry_y /= ry_n
    ry_z /= ry_n
    rz_x /= rz_n
    rz_y /= rz_n
    rz_z /= rz_n
    dx_x = rx_x * deltaPosX
    dx_y = rx_y * deltaPosX
    dx_z = rx_z * deltaPosX
    dy_x = ry_x * deltaPosY
    dy_y = ry_y * deltaPosY
    dy_z = ry_z * deltaPosY
    dz_x = rz_x * deltaPosZ
    dz_y = rz_y * deltaPosZ
    dz_z = rz_z * deltaPosZ
    finalDeltaX = dx_x + dy_x + dz_x
    finalDeltaY = dx_y + dy_y + dz_y
    finalDeltaZ = dx_z + dy_z + dz_z

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
    rospy.Subscriber("webcam/image_raw", Image, imageCallback)
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
