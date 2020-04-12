import rospy
from world_mapper.srv import string

status = "off"
running = False

def turn_on():
    running = True
    status = "on"
    os.system("rosrun urg_node urg_node")
    os.system("rosrun world_mapper imureader")
    os.system("roslaunch video_stream_opencv webcam.launch")
    os.system("rosrun world_mapper framewriter.py")
    running = False
    
def turn_off():
    running = True
    status = "off"
    os.system("rosnode kill urg_node")
    os.system("rosnode kill mpu6050")       # imureader
    os.system("rosnode kill webcam/webcam_stream")
    os.system("rosnode kill framewriter")
    running = False

def handle_request(req):
    if req.input == "status":
        return string(status)
    if running == True:
        return string("error")
    if req.input == "start" and status == "off":
        turn_on()
        return string("success")
    elif req.input == "stop" and status == "on":
        turn_off()
        return string("success")
    else:
        return string("failure")
    return string("error")

def main():
    rospy.init_node("world_mapper_switch")
    s = rospy.Service("switch", string, handle_request)
    print("Switchboard Ready!")
    rospy.spin()
    
if __name__ == "__main__":
    main()