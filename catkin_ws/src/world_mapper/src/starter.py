import rospy
from world_mapper.srv import string
import subprocess

status = "off"
running = False

win1 = None
win2 = None
win3 = None
win4 = None

def turn_on():
    global win1, win2, win3, win4
    running = True
    status = "on"
    # os.system("rosrun urg_node urg_node")
    # os.system("rosrun world_mapper imureader")
    # os.system("roslaunch video_stream_opencv webcam.launch")
    # os.system("rosrun world_mapper framewriter.py")
    win1 = subprocess.Popen("rosrun urg_node urg_node", shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE)
    win2 = subprocess.Popen("rosrun world_mapper imureader", shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE)
    win3 = subprocess.Popen("roslaunch video_stream_opencv webcam.launch", shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE)
    win4 = subprocess.Popen("rosrun world_mapper framewriter.py", shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE)
    
    running = False
    
def turn_off():
    global win1, win2, win3, win4
    running = True
    status = "off"
    # os.system("rosnode kill urg_node")
    # os.system("rosnode kill mpu6050")       # imureader
    # os.system("rosnode kill webcam/webcam_stream")
    # os.system("rosnode kill framewriter")
    subprocess.Popen("rosnode kill urg_node", shell=True)
    subprocess.Popen("rosnode kill mpu6050", shell=True)
    subprocess.Popen("rosnode kill webcam/webcam_stream", shell=True)
    subprocess.Popen("rosnode kill framewriter", shell=True)
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