import rospy
from world_mapper.srv import string
import subprocess

status = "off"
running = False
rc = None

def turn_on():
    rc = subprocess.call("~/catkin_ws/switch_start.sh")

    running = False
    
def turn_off():
    rc = subprocess.call("~/catkin_ws/switch_stop.sh")

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
