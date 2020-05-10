#!/bin/bash

screen -S videostream -d -m roslaunch video_stream_opencv webcam.launch
screen -S urgnode -d -m rosrun urg_node urg_node
screen -S imureader -d -m rosrun world_mapper imureader
screen -S framewriter -d -m rosrun world_mapper framewriter.py ~/GitHub/RealityVirtualVirturalizer/web/-RealityVirtualVirturalizer-Interface/server/data/frames/
