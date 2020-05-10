#! /usr/bin/env python2
import os
import rospy
from world_mapper.srv import string, stringResponse
import subprocess

status = "off"
running = False
rc = None

def turn_on():
    global status, running
    # os.path.abspath is stupid "~/" is not "/home/aytimothy/"; it's "/home/aytimothy/~/"
    scriptpath = "/home/aytimothy/catkin_ws/switch_start.sh"
    rc = subprocess.call(scriptpath)
    status = "on"
    
def turn_off():
    global status, running
    scriptpath = "/home/aytimothy/catkin_ws/switch_stop.sh"
    rc = subprocess.call(scriptpath)
    status = "off"

def handle_request(req):
    if req.request == "status":
        return stringResponse(status)
    if running == True:
        return stringResponse("error")
    if req.request == "start" and status == "off":
        turn_on()
        return stringResponse("success")
    elif req.request == "stop" and status == "on":
        turn_off()
        return stringResponse("success")
    else:
        return stringResponse("failure")
    return stringResponse("error")

def main():
    rospy.init_node("world_mapper_switch")
    s = rospy.Service("switch", string, handle_request)
    print("Switchboard Ready!")
    rospy.spin()
    
if __name__ == "__main__":
    main()
