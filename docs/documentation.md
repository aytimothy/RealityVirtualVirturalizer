
# Reality Virtual Virtualiser
### "Scanning the real world into a virtual space"

# Table of Contents
1. [Introduction](#introduction)
2. [Scanner Device](#scanner)
    1. [Lidar](#lidar)
    2. [IMU](#imu)
    3. [Camera](#camera)
3. [Software](#software)
    1. [ROS](#lidar)
    2. [Unity](#imu)
    3. [Angular/NodeJS](#angular)
    4. [Other Useful Libraries](#other)
4. [Technical Approach](#technical)
    1. [IMU Sensor Intensity](#intensity)
    2. [Acceleration Velocity Displacement](#acceleration)
    3. [Ranges and Position/Rotations to a Point Cloud](#pointcloud)
    4. [Frame Encoding](#frame)

## Introduction <a name="introduction"></a>
The goal of this project was to create a handheld scanning device, made with parts that are accessible to everyone to recreate. The device is capable of scanning the real world and reconstructing the data into a 3D virtual environment. 

## Scanner Device <a name="scanner"></a>


### Lidar <a name="lidar"></a>

<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/lidarexample.png" alt="Lidar Example" width="400"/>

### IMU <a name="imu"></a>

### Camera <a name="camera"></a>
The quality of the camera is not a concern. All that is required from the camera is the ability to capture colour data from the world using its photoreceptors. 
 

<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/imagepixelarray.png" alt="Images Stored as Pixels" width="400"/>


## Software <a name="software"></a>
The aim of this project was to use commonly used software, to ensure that people trying to replicate the project have as many resources as possible. 

### ROS <a name="ros"></a>
ROS or *Robot Operating System* is a robitics middleware which provides us with a communication protocol for sending and recieving data between the sensors, Raspberry Pi and the Desktop/Web UI. Data is sent in the form of messages and services. 
 
### Unity <a name="unity"></a>
Unity is priimarily a (3D) game engine, however given its functionality it allows us to simulate our device in a 3D environment. 

### Angular/NodeJS <a name="angular"></a>


### Other Useful Libraries <a name="other"></a>
Three.JS

## Technical Approach <a name="technical"></a>
The main problem which needed to be solved was how we can take all of this data and process it into something useful. This requires a considerable amount of math to take the Lidar, IMU and camera data, and generate a point cloud. From here, more math and algorithms are required to take the point cloud and generate a mesh which could be used to create and export a 3D model.


### IMU Sensor Intensity <a name="intensity"></a>
### Acceleration Velocity Displacement<a name="acceleration"></a>
### Ranges and Position/Rotations to a Point Cloud <a name="pointcloud"></a>
### Frame Encoding <a name="frame"></a>
