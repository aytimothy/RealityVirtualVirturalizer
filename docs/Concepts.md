
# Reality Virtual Virtualiser
### "Scanning the real world into a virtural space"

(The typo is intentional)

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
    5. [Mesh Generation](#mesh)
    6. [Texture Stamping](#stamp)
5. [Reflection](#reflection)

## Introduction <a name="introduction"></a>
The goal of this project was to create a handheld scanning device, made with parts that are accessible to everyone to recreate. The device is capable of scanning the real world and reconstructing the data into a 3D virtual environment. 

## Scanner Device <a name="scanner"></a>

Build instructions for the device can be found [here](https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/build-instructions/README.md).

The scanner device is used for data collection. We make use of a number of sensors to capture all the necessary data to reconstruct a 3D environment. 
The device consists of 3 sensors:
* Lidar
* IMU
* Camera

The data which is collected is then proessed by an Arduino and a Raspberry Pi. This sticks with the goal of using off the shelf components to build this project.

We used a 3D printed housing to hold all of the sensors. The `STL` files for these can designs can be found [here](https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/case-design).

The image below is the assembled scanner device.
[Add Image]


### Lidar <a name="lidar"></a>

The LIDAR is a device which uses laser to survey ranges along a plane of its surroundings. For this project, we are using a Hokuyo UTM-30LX. It has a range of up to 30m and a scanning angle of 270&deg;. This 90 &deg: 'blindspot' must be accounted for in the generation of the point cloud.

A lidar works by using laser to detect distances (like an ultrasonic sensor), but it rotates around very quickly and thus is able to capture a wider range, as opposed to a single slower and inaccurate sound ray an ultrasonic sensor does. The data that a lidar gives us are a range of with recordings at different angles.

`Intensities=[ 1,1.1,1.13,1.19,1.24,…]`

The following image was capured in the Unity simulation and visualises how the Lidar is capturing data.

<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/lidarexample.png" alt="Lidar Example" width="400"/>

This works for giving us a sense of our surroundings, to see what is near the device. But this relies on the device being stationary. It needs to be able to move aroud, therefore other data is required.


### IMU <a name="imu"></a>

An IMU, or Inertial Measurement Unit, is a device that allows us to determine the angular and linear (rotational and displacement) movement of any object the sensor is attached to. This allows us to translate and rotate the Lidar readings so that they are in the correct positions in the world when we do raycast calculations.

A manometer allows us to get our orientation by using the magnetic poles on the planet; like a digital compass. 

This image shows the `pitch`, `roll` and `yaw` axis.
<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/imu.png" alt="3 Axis IMU" width="400"/>


### Camera <a name="camera"></a>
The quality of the camera is not a concern. All that is required from the camera is the ability to capture colour data from the world using its photoreceptors. 

The image below shows how coloured images are simply stored as arrays of pixels. Each pixel has 3 channels; red, green and blue. The range of these intensity values is 0-255. For example, orange is stored as (255,165,0). 
 
<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/imagepixelarray.png" alt="Images Stored as Pixels" width="400"/>

We need this camera data to be able to perform image stamping once the mesh has been constructed. 

Raw pixel data is sent from the webcam to `framewriter.py` and encoded into a `Frame`.

## Software <a name="software"></a>
The aim of this project was to use commonly used software, to ensure that people trying to replicate the project have as many resources as possible. 


### ROS <a name="ros"></a>
ROS or *Robot Operating System* is a robitics middleware which provides us with a communication protocol for sending and recieving data between the sensors, Raspberry Pi and the Desktop/Web UI. Data is sent in the form of messages and services.

ROS is used to gather the sensor data and combine it together into a [Frame](#frame). Which is then sent to both the desktop and web user interfaces.

ROS allows us to program in both `C++` and/or `Python`. 
 
### Unity <a name="unity"></a>
Unity is priimarily a (3D) game engine, however given its functionality it allows us to simulate our device in a 3D environment. A simulation environment was created to allow us to replicate the generation of IMU, Lidar and camera data. As there was only one physical device, this gave all members of the team the ability to work with *real* data.
The data is then sent and processed in the exact same was as if it was coming from the real scanning device.

Scripts in Unity are programmed in `C#`.

Unity was also used to create the desktop user interface. It was chosen as it provided a lot of functionality right out of the box. 

<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/desktop-example.PNG" alt="Desktop UI" width="600"/>


### Angular/NodeJS <a name="angular"></a>
Angular is a front end web framework which we used to create a web interface. This interface performs similar to the desktop version, however it was designed to be a lightweight version. Via `Rosbridge`, the web application is able to listen to the `/output` topic. By doing this, we are able to display a point cloud in realtime as `Frames` are received.

The difference between the web and desktop versions is that the desktop application is able to handle the reconstruction of points into a mesh. Whereas, the web version is used to visualise point clouds as the frames are received.

The source code for the web interface can be found [here](https://github.com/Jimson91/-RealityVirtualVirturalizer-Interface).

<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/web.png" alt="Web UI" width="500"/>

### Other Useful Libraries <a name="other"></a>
* Three.JS: This is a Javascript library used to create 3D graphics in the browser. This is used to display the point cloud which is generated by the `Frame` data.

## Technical Approach <a name="technical"></a>
The main problem which needed to be solved was how we can take all of this data and process it into something useful. This requires a considerable amount of math to take the Lidar, IMU and camera data, and generate a point cloud. From here, more math and algorithms are required to take the point cloud and generate a mesh which could be used to create and export a 3D model.


### IMU Sensor Intensity <a name="intensity"></a>

Before any sense can be made of the IMU, it is required that you divide the reading by a constant. This is because the IMU returns a normalized intensity between -32768 and 32768.

Depending on the sensitivity setting, you will have to divide that value by the following values:
    
**Accelerometer**

_Limit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coefficient_

2.0g/s/s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16,384

4.0g/s/s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8,192

6.0g/s/s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4,096

8.0g/s/s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2,048


**Gyroscope**

_Limit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coefficient_

250°/s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;131

500°/s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;65.5

1000°/s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32.8

2000°/s&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16.4



### Acceleration Velocity Displacement<a name="acceleration"></a>

<img src="https://render.githubusercontent.com/render/math?math=a%20%3D%20-g">

<img src="https://render.githubusercontent.com/render/math?math=v%3Dat%2Bv_0">

<img src="https://render.githubusercontent.com/render/math?math=d%3Dvt%2Bd_o">


Non-moving acceleration is always downwards. Velocity is the acceleration over time, plus the initial velocity. Displacement is velocity over time, plus the initial displacement.

Note: Most of the simple formulas do not incorporate the initial displacement or velocity (remove <img src="https://render.githubusercontent.com/render/math?math=v_o"> and <img src="https://render.githubusercontent.com/render/math?math=d_o"> from the equations)

Using derivatives, we can work out a relative position from “rest”.


### Ranges and Position/Rotations to a Point Cloud <a name="pointcloud"></a>
Now that we have our position/rotation in the world, we are able to work out where the “plane” that the LIDAR resides. A quick way to rotate things is using a rotation matrix.

<img src="https://render.githubusercontent.com/render/math?math=%5Cbegin%7Bbmatrix%7D%20X%7B%7D'%0A%5C%5C%20Y%7B%7D'%0A%5C%5C%20Z%7B%7D'%0A%5Cend%7Bbmatrix%7D%0A%3D%20%0A%5Cbegin%7Bbmatrix%7D%0Acos(%5Calpha)%26-sin(%5Calpha)%26%200%5C%5C%0A%200%261%20%260%20%5C%5C%20%0A%200%260%261%20%0A%5Cend%7Bbmatrix%7D%0A%5Cbegin%7Bbmatrix%7D%0A%20cos(%5Cbeta)%260%20%20%26-sin(%5Cbeta)%20%5C%5C%20%0A%200%261%20%20%260%20%5C%5C%20%0A%20-sin(%5Cbeta)%26%200%26cos(%5Cbeta)%20%0A%5Cend%7Bbmatrix%7D%0A%5Cbegin%7Bbmatrix%7D%0A%201%260%20%20%260%20%5C%5C%20%0A%200%26cos(%5Cgamma%20)%20%20%26-sin(%5Cgamma%20)%20%5C%5C%20%0A%200%26%20sin(%5Cgamma%20)%26cos(%5Cgamma)%20%0A%5Cend%7Bbmatrix%7D%0A%0A%5Cbegin%7Bbmatrix%7D%20X%0A%5C%5C%20Y%0A%5C%5C%20Z%0A%5Cend%7Bbmatrix%7D">

For any rotation along α radians along the x-axis, β along the y-axis and γ along the z-axis, we can rotate any coordinate system along the origin. Since our laser readings are relative to the position of the LIDAR, this will work for us perfectly.
We just generate all the rays relative to the lidar, which is just a long array of:


<img src="https://render.githubusercontent.com/render/math?math=(X%2CY%2CZ)%20%3D%20%5Cleft(%20%5Ccos(%5Ctheta)%2C0%2Csin(%5Ctheta)%20%5Cright)">

Where θ is the LIDAR angle measurement for each reading (this is from angle_min to angle_max, in increments of angle_increment). Simply apply the rotation matrix to every single and multiply each ray by its corresponding intensity and apply (add) the displacement offset, and this is how we get from lidar readings to points.

<img src="https://render.githubusercontent.com/render/math?math=P%3DrLR%2BD">

P is our final point, 𝑟 range; the reading from the sensor, 𝐿 is the local direction of the laser ray, rotated by 𝑅, the rotation matrix worked out from the reported rotation, and finally offset by 𝐷; the position of the LIDAR.

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

### Mesh Generation <a name="mesh"></a>

// todo.

### Texture Stamping <a name="stamp"></a>

// todo.

## Reflection <a name="reflection"></a>

// todo.
