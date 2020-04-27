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

## Managing Projects <a name="projects"></a>

A project can be created to store all of the point and mesh data together.

A project must first be created.

  1. Click **CREATE**
  2. Enter a **Name** for the project
  3. Choose the **Path** of where the project will be located
  4. Click **Create**

<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/create.png" alt="Creating a Project" width="500"/>

An existing project can be opened by clicking **OPEN** and selecting the project file.

Frame files can be added to an existing project by clicking **ADD** and choosing the files.

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
Existing frame files may also be loaded into the application. 

  1. Click **Window**
  2. Click **File Manager**
  
<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/window-file-manager.png" alt="File Manager" width="500"/>

  1. To import an individual frame, click **Import File**
  2. To import an entire folder of frames, click **Import Folder**
  3. Select the file to be imported

<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/file-manager.png" alt="File Manager" width="500"/>

The frame file/s will now be imported into the application. The point cloud display will be updated to reflect all of the frame files in the project. 

## Browsing Files <a name="browsing"></a>

The `File Browser` is used to browse existing frames in the project. Clicking on a frame will display the points captured in that specific frame. The contents of the frame file are also displayed.

<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/file-browser.png" alt="File Browser" width="500"/>

## Reconstructing Data <a name="reconstruct"></a>

Reconstructuring the data involves turning the point cloud which has been generated into a mesh.

  1. Click **Window**
  2. Click **Reconstruct**
  
<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/window-reconstruct.png" alt="Frame Reconstruction" width="500"/>                                                                                                           

The following will explain the functionality of each button in the reconstruct menu:
  1. __Classify Points__: Using an algorithm, it will determine for each point whether it is an edge, plane or corner.
  2. __Stamp Point Colour__: Using the captured images, it will assign a colour to each point.
  3. __Generate Mesh__: Using the point cloud, a mesh will be generated.
  4. __Stamp Mesh__: Using the mesh that was generated above, a texture will be applied to the mesh using the image.
  5. __Export Mesh__: The mesh can be exported.
  6. __Export Vertices__: A file containing all of the vertices can be exported.
  
<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/reconstruct.png" alt="Frame Reconstruction" width="500"/>   


## Settings <a name="settings"></a>

This section will cover the settings/options in the application 

__Changing Display/Camera Settings:__
  1. Click **Window**
  2. Click **Options**

<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/window-options.png" alt="Settings" width="500"/>   
  1. BG Colour: This will allow you to adjust the background colour of the display
  2. Camera Speed: This changes the speed at which the camera moves around the display
  3. Look Sensitivity: This changes the sensitivity of looking around the display
  
<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/settings.png" alt="Settings" width="500"/>   

__Point Cloud/Reconstruction Settings:__

  1. Click **View** - Opens menu
  2. Toggles to displaying the point cloud
  3. Toggles displaying the colour of the points
  4. Toggles displaying the classification of the points
  5. Toggles to displaying the reconstruction data
  6. Toggles displaying colour data for the mesh
  7. Toggles displaying light in the display
  8. Resets the camera back to its original position

<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/view-menu.png" alt="Point Cloud and Reconstruction Settings" width="500"/>   


# 3. Web UI <a name="web"></a>
The web version has been designed to be a lightweight interface which performs most of the actions that the desktop version can.

Instructions about how to use the web application can be found [here](https://github.com/Jimson91/-RealityVirtualVirturalizer-Interface/wiki).

<img src="https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/docs/img/web.png" alt="Web UI" width="500"/>



