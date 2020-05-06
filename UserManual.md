# Angular Application

## 1. Rosbridge Connection Status
If rosbridge is not running on the same remote server as the web server the following display message will be shown until the user configures a custom connection for rosbridge which has been successfully established.

  **1.** Rosbridge connection status <br>
  **2.** Rosbridge connection alert message <br>


<p align="center">
  <img src="https://user-images.githubusercontent.com/53068780/81146176-1ad45200-8fbb-11ea-9a7d-f58762086cf5.png">
</p>


## 2. Rosbridge Configuration Settings
By default, the application will assume that rosbridge is running on the same machine as the web server. Therefore the address of the web server will be the same address used to connect to rosbridge. In case rosbridge is not running on the same machine as the Express.js server an option exists to configure the client to connect to a different address and port. The option is available in the main side navigation panel.

  **1.** Click the *Configure Rosbridge* option <br>
  **2.** Enter the *host* and *port* of the remote server running rosbridge <br>
  **3.** Click the *Set* button to close the dialog <br>

<p align="center">
  <img src="https://user-images.githubusercontent.com/53068780/81145825-6cc8a800-8fba-11ea-9546-ebf9610431a1.png">
</p>

## 3. Scanning
Once Rosbridge is successfully connected the application will check to see if the scanner is enabled. The scanner must be enabled in order to receive frame messages.

  **1.** Click the *Start Scanning* option <br>
  **2.** Observe the Scanner Status in the statusbar <br>
  **3.** Once Enabled, Click the *Listen for Messages* button <br>

<p align="center">
  <img src="https://user-images.githubusercontent.com/53068780/81147247-3e989780-8fbd-11ea-87f1-7b19a9d66c2f.png">
</p>

## 3. File Browser
The right side navigation panel is the File Browser which is used for the purpose of navigating frame files stored in `.json` format. The user can view new frames that have been received during scanning but might require that the File Browser is refreshed before navigating in order for the browser to re-populate frame files. The data directory in `server/data` stores the frame files. In order for the FileBrowser to function a connection to the web server must first be established.

  **1.** Navigate back to root directory <br>
  **2.** Refresh current directory <br>
  **3.** Open File for viewing or Folder for navigating <br>
  **4.** Delete File or Folder <br>

<p align="center">
  <img src="https://user-images.githubusercontent.com/53068780/81144046-98e22a00-8fb6-11ea-8bb2-3ce2d316b100.png">
</p>

## 4. File Viewer
The File Viewer is triggered when the user opens a file from the File Browser. If the file format is `.json` then the viewer will show two different view modes for viewing the frame files.

  **1.** Display the raw format view mode <br>
  **2.** Display the expandable/inspector view mode <br>
  **3.** Expand the frame attribute in the expandable view mode <br>
  **4.** Close the File Viewer dialog <br>

<p align="center">
  <img src="https://user-images.githubusercontent.com/53068780/81144039-97b0fd00-8fb6-11ea-92cb-4dac42fdd81b.png">
</p>

## 5. 3D Point Cloud

Once the scanning is enabled and the client is listening for frame messages. Each frame is first processed using a custom algorithm and rendered by the HTML5 canvas for visualisation in the browser. The JavaScript 3D library [Three.js](https://threejs.org/) is used to create and display the 3D animations with built-in support for Orbit Controls. These controls allow the user to easily interact and navigate the 3D canvas. 

### 5.1 Display Options

For an interactve experience the user has the following display options available

  **1.** Open *Display Options* Menu <br>
  **2.** Toggle fullscreen mode <br>
  **3.** Change the colour of the point cloud <br>
  **4.** Toggle slow X Axis rotation of points <br>
  **5.** Toggle slow Y Axis rotation of points <br>
  **6.** Clears the current scene <br>

<p align="center">
  <img src="https://user-images.githubusercontent.com/53068780/81146376-7c94bc00-8fbb-11ea-9e3d-9e5990956c47.png">
</p>

## 6. Images

There are two modes of operation. The user can switch between the 3D Point Cloud canvas and Images received from the camera. These can be toggled on or off using the menu in the dashboard as seen below:

  **1.** Open *Mode* Menu <br>
  **2.** Display rendering of images <br>
  **3.** Display rendering of 3D Canvas <br>
  **4.** Stop listening for frames <br>

<p align="center">
  <img src="https://user-images.githubusercontent.com/53068780/81146778-499ef800-8fbc-11ea-9786-601af2c96812.png">
</p>

# Express Server
The server is written in JavaScript using [Express.js](https://expressjs.com/) as a server-side framework. The HTTP server is lightweight and functions as both a web server and file server. Therefore multiple clients can connect over port `8080` which will serve the Angular application and responds to filesystem requests from a specified directory, the default being located in `server/data`. 

The following image is a screenshot of the server logger which outputs the Method, Route and Timestamp of each HTTP request to the console.

<p align="center">
  <img src="https://user-images.githubusercontent.com/53068780/77756336-b13b5c80-707a-11ea-8225-44b921227f36.png">
</p>
