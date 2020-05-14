# Description

## Web Interface
The project is primarily an Angular-based web interface designed to process live data received from a rosbridge websocket connection for real time visualisation of custom data frames. The rosbridge websocket connection is used to communicate between a combination of different hardware that scans the surrounding environment.

The code for the angular application is found in the `/app` project directory

## Express Server
The project also contains an express.js server which is run concurrently with the angular application when `npm start` is executed. The express server has two functions:

1. Serve the angular-based web application files to clients
2. Send filesystem data to the clients for navigating and viewing BSON files using HTTP requests 

The code for the express server is found in the `/server` project directory. 


## Prerequisites
#### Ros Kinetic Kame
ROS Kinetic is a distribution that must be installed in order for a rosbridge-server to run. Ros Kinetic supports Ubuntu 16.04 (Xenial Xerus)

#### Rosbridge Server
The Rosbridge server establishes a WebSocket connection and passes any JSON encoded messages from the WebSocket to rosbridge_library

#### Node JS
The node package manager (npm) is required to install project dependencies.

## Run Project

1. Install Angular CLI and nodemon globally
```
npm install -g @angular/cli
npm install -g nodemon
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
npm start
```
5. Wait for the project to build
