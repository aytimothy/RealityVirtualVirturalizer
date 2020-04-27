This document will tell you how to capture your environment. It should be quite simple to use.

# Table of Contents
1. [Build/Setup Device](#build)
2. [Desktop UI](#desktop)
    1. [Creating Projects](#projects)
    2. [Scanning Data](#scan)
    3. [Loading Existing Frames](#loading)
    4. [Browsing Files](#browsing)
    5. [Reconstructing Data](#reconstruct)
    6. [Settings](#settings)
     
3. [Web UI](#web)
    
    

# 1. Build/Setup Device <a name="build"></a>


First, follow the instructions in [`/docs/Installation.md`](https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/Installation.md) to build and run the machine.

Next, ensure it is connected to your Wi-Fi Network. 
Once the device has been configured correctly, use either of the following applications:
  1. Desktop application: Open the desktop application
  2. Web application: Open a web browser at `localhost:8080`.


# 2. Desktop UI <a name="desktop"></a>

## Creating Projects <a name="projects"></a>


## Scanning Data <a name="scan"></a>

A connection is established between the scanning device and the application using Rosbridge.

  1. Click **Window**
  2. Click **Live Connect**
  
<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/window-live-connect.png" alt="Connecting to ROS" width="500"/>

This will open the side window where the connection is configured.

  1. Enter the **Server URL**
  2. Select the communication **protocol**
  3. Enter the ROS **topic** which the data is sent over
  4. Click **connect**
  
<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/connect.png" alt="Configuring Connection" width="500"/>

Now that the connection has been established, when a new Frame is published over the specified ROS topic, it will be automatically imported into the application. 

The point cloud is updated with the new points after each new frame. The point cloud that is displayed will also be updated.

The frames can also be viewed in the `File Browser`.

## Loading Existing Frames <a name="loading"></a>


## Browsing Files <a name="browsing"></a>

## Reconstructing Data <a name="reconstruct"></a>


## Settings <a name="settings"></a>



# 3. Web UI <a name="web"></a>
The web version has been designed to be a lightweight interface which performs most of the actions that the desktop version can.

Instructions about how to use the web application can be found [here](https://github.com/Jimson91/-RealityVirtualVirturalizer-Interface/wiki).

<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/web.png" alt="Web UI" width="500"/>



