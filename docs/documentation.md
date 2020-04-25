
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

Build instructions for the device can be found [here](https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/build-instructions/nothing.txt).


### Lidar <a name="lidar"></a>

The LIDAR is a device which uses laser to survey ranges along a plane of its surroundings. For this project, we are using a Hokuyo UTM-30LX. It has a range of up to 30m and a scanning angle of 270&deg;.

A lidar works by using laser to detect distances (like an ultrasonic sensor), but it rotates around very quickly and thus is able to capture a wider range, as opposed to a single slower and inaccurate sound ray an ultrasonic sensor does. The data that a lidar gives us are a range of with recordings at different angles.

`Intensities=[ 1,1.1,1.13,1.19,1.24,…]`

The following image was capured in the Unity simulation and visualises how the Lidar is capturing data.

<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/lidarexample.png" alt="Lidar Example" width="400"/>

This works for giving us a sense of our surroundings, to see what is near the device. But this relies on the device being stationary. It needs to be able to move aroud, therefore other data is required.


### IMU <a name="imu"></a>

### Camera <a name="camera"></a>
The quality of the camera is not a concern. All that is required from the camera is the ability to capture colour data from the world using its photoreceptors. 
 

<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/imagepixelarray.png" alt="Images Stored as Pixels" width="400"/>


## Software <a name="software"></a>
The aim of this project was to use commonly used software, to ensure that people trying to replicate the project have as many resources as possible. 

### ROS <a name="ros"></a>
ROS or *Robot Operating System* is a robitics middleware which provides us with a communication protocol for sending and recieving data between the sensors, Raspberry Pi and the Desktop/Web UI. Data is sent in the form of messages and services. 
 
### Unity <a name="unity"></a>
Unity is priimarily a (3D) game engine, however given its functionality it allows us to simulate our device in a 3D environment. A simulation environment was created to allow us to replicate the generation of IMU, Lidar and camera data. As there was only one physical device, this gave all members of the team the ability to work with *real* data.
The data is then sent and processed in the exact same was as if it was coming from the real scanning device.


Unity was also used to create the desktop user interface. 

### Angular/NodeJS <a name="angular"></a>
Angular is a front end web framework which we used to create a web interface. This interface performs similar 

### Other Useful Libraries <a name="other"></a>
Three.JS

## Technical Approach <a name="technical"></a>
The main problem which needed to be solved was how we can take all of this data and process it into something useful. This requires a considerable amount of math to take the Lidar, IMU and camera data, and generate a point cloud. From here, more math and algorithms are required to take the point cloud and generate a mesh which could be used to create and export a 3D model.


### IMU Sensor Intensity <a name="intensity"></a>

### Acceleration Velocity Displacement<a name="acceleration"></a>
### Ranges and Position/Rotations to a Point Cloud <a name="pointcloud"></a>
### Frame Encoding <a name="frame"></a>
We use 3 ROS topics to encode a frame:
* `/webcam/image_raw/compressed`: Receives image data
* `/imu`: Receives IMU sensor data from the Arduino
* `/scan`: Receives Lidar sensor data

`framewriter.py` subscribes to these 3 topics. When it receives a message from all 3 topics, it will publish a `Frame`.


The following is the `Frame` message which is constructed and sent over the `/output` topic.
```Python
# Timestamp
uint32 seq					# The sequential frame number. Always in order.
time timestamp				# Timestamp in actual unix time. It's 64-bit so we should be fine for another trillion or so years.
string frameid				# A string tag for this frame.
# Arduino Data
float32 posX				# Position of sensor (x-axis), worked locally from accelorometer deltas.
float32 posY				# Position of sensor (y-axis), worked locally from accelorometer deltas.
float32 posZ				# Position of sensor (z-axis), worked locally from accelorometer deltas.
float32 rotX				# Current gyroscope rotation (x-axis) at the current frame.
float32 rotY				# Current gyroscope rotation (y-axis) at the current frame.
float32 rotZ				# Current gyroscope rotation (z-axis) at the current frame.
float32 accX				# Accelorometer Delta (x-axis) at the current frame.
float32 accY				# Accelorometer Delta (y-axis) at the current frame.
float32 accZ				# Accelorometer Delta (z-axis) at the current frame.
float32 gyrX				# Gyroscope Delta (x-axis) at the current frame.
float32 gyrY				# Gyroscope Delta (y-axis) at the current frame.
float32 gyrZ				# Gyroscope Delta (Z-axis) at the current frame.
# Laser Data (sensor_msgs/LaserScan)
float32 angle_min			# Minimum angle from lidar's local origin (0 degrees).
float32 angle_max			# Maximum angle from lidar's local origin (0 degrees).
float32 angle_increment		# The angle step for each laser scan.
float32 range_min			# The minimum range the lidar can detect.
float32 range_max			# The maximum range the lidar can detect.
float32[] ranges			# An array of all the distance data collected in the current frame.
float32[] intensities		# An array of all the response intensity data collected in the current frame.
# Image Data (sensor_msgs/Image)
uint8[] img                		# Image data. This is a PNG/JPEG file as a byte stream.
string imgfmt				# Image format. This is either "PNG" or "JPEG".
```
Both the desktop and web user interfaces subscribe to the `/output` topic to receive the data.