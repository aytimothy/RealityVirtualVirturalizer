# Description
This project is a web interface designed to communicate between a specialised LIDAR-based device that scans a surrounding environment. The goal of the interface is to process and store live data received from a rosbridge websocket connection for visualisation in real time.

LIDAR-Based Device:
https://github.com/aytimothy/RealityVirtualVirturalizer


## Prerequisites
#### Ros Kinetic Kame
ROS Kinetic is a distribution that must be installed in order for a rosbridge-server to run. Ros Kinetic supports Ubuntu 16.04 (Xenial Xerus)

#### Rosbridge Server
The Rosbridge server establishes a WebSocket connection and passes any JSON encoded messages from the WebSocket to rosbridge_library

#### Node JS
The node package manager (npm) is required to install project dependencies.

## Run Project

1. Install Angular CLI globally
```
npm install -g @angular/cli
```
2. Navigate to project root directory and install dependencies
```
npm install
```
3. Run roslaunch.sh script
```
bash ./roslaunch.sh
```
4. Start development server
```
ng serve --open
```
