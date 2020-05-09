#!/bin/bash

# Setup Environment and Build Stuffs.
cd ~/catkin_ws
# catkin_make
source ./devel/setup.bash

# Run the stuffs we just built.
screen -S rosswitch -d -m rosrun world_mapper starter.py
screen -S videostream -d -m roslaunch video_stream_opencv webcam.launch
screen -S urgnode -d -m rosrun urg_node urg_node
screen -S imureader -d -m rosrun world_mapper imureader
screen -S framewriter -d -m rosrun world_mapper framewriter.py ~/GitHub/RealityVirtualVirturalizer/web/-RealityVirtualVirturalizer-Interface/server/data/frames/
screen -S rosbridge -d -m rosrun rosbridge_server rosbridge_websocket

# Start the webserver
cd ~/GitHub/RealityVirtualVirturalizer/web/-RealityVirtualVirturalizer-Interface
# npm install
screen -S webserver -d -m node ./server/server.js

# Return to ROS environment
cd ~/catkin_ws
echo Launch Complete!
