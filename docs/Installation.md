# 0. Get the files

Before we begin, grab the files do somewhere like your `Downloads` folder.

    cd ~/Downloads
    git --recurse-submodules -j8 clone https://github.com/aytimothy/RealityVirtualVirturalizer.git
    
(`--recurse-submodules` downloads submodules without you having to manually clone them, and `-j8` basically is an optimization that speeds up cloning by cloning up to 8 repositories in parallel, available in Git 2.8 and above).

If you have already cloned without `--recurse-submoudles`, just run:

    git submodule update --init --recursive

# 1. ROS Installation

First, start by installing ROS. If you do not know how to install, just follow the instructions on the [ROS Wiki](http://wiki.ros.org/melodic/Installation/Ubuntu).

These instructions are basically a repeat of what's on these pages. If you've already installed ROS and Ubuntu, skip over to the next section.

## 1.1 Configure your repositories

First, setup your computer to accept software from `packages.ros.org`.

    sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'

Next, add ROS' public keys.

    sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654
	
If you are having trouble connecting to `hkp://pgp.mit.edu.au:80` or `hkp://keyserver.ubuntu.com:80`, you can attempt to get the keys using this proxy service:

    curl -sSL 'http://keyserver.ubuntu.com/pks/lookup?op=get&search=0xC1CF6E31E6BADE8868B172B4F42ED6FBAB17C654' | sudo apt-key add -
	
## 1.2 Actually Install ROS

First, make sure your packages are up to date.

    sudo apt-get update
	
Next, pick how much of ROS you'd like to install. We recommend installing the full package.

    sudo apt-get install ros-melodic-desktop-full
	
Otherwise, the barebones will also do.

    sudo apt-get install ros-melodic-ros-base
    
If you choose barebones, ensure that you have:

    sudo apt-get install ros-melodic-serial ros-melodic-rosbridge-suite ros-melodic-serial-arduino
	
## 1.3 Initialize the Environment

Before you can use ROS, you will need to initialize `rosdep`. `rosdep` allows you to install dependencies for sources you want to compile, and is required for some of ROS' core components.

    sudo rosdep init
    rosdep update

Next, you'll need to have ROS initialize variables (run `setup.bash`) into any command prompt you run.

    echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc
    source ~/.bashrc

## 1.4 ~~Optional~~ Install Tools

If you are going to get additional packages, which we will, you will want some additional tools, such as `rosinstall`.

    sudo apt-get install python-rosinstall python-rosinstall-generator python-wstool build-essential

Congratulations! You've got barebones ROS installed on your machine!

# 2. Building the Source Code

## 2.1 Setup Environment

Before anything runs, you'll need to get the source code to run on your Ubuntu micro-controller.

Copy the entirety of `/catkin_ws` into your machine's home folder.

    mv ~/Downloads/RealityVirtualVirturalizer/catkin_ws ~/catkin_ws

Next, install all the ROS packages that we need:

    sudo apt-get install ros-kinetic-serial ros-kinetic-serial-arduino urg_node

## 2.2 Build Arduino Sketches

You'll find that in `/catkin_ws/src/world_mapper/sketches`, there are Arduino Sketches that need to be built.
	
Before we begin, ensure you have the Arduino IDE installed. You'll need to have a screen for this.

    sudo apt-get install arduino

Next, you'll want to copy the `libraries` (located `/catkin_ws/src/world_mapper/sketches/libraries`) to your own library folder. If not, the Arduino IDE will complain all the files do not exist.

    cp -d ~/catkin_ws/src/world_mapper/sketch/libraries ~/sketchbook/libraries

Next, we'll need to initialize the libraries for our Arduino build. First, ensure `rosserial-arduino` is setup. If not, you can find the steps on the [ROS Wiki](http://wiki.ros.org/rosserial_arduino/Tutorials/Arduino%20IDE%20Setup)

    sudo apt-get install ros-melodic-rosserial ros-melodic-rosserial-arduino
	
Finally, let ROS create the header files for your currently installed packages. Create a directory anywhere...

    cd <some empty directory somewhere>
    rosrun rosserial_arduino make_libraries.py

Now, copy these files into the Arduino IDE's `libraries` folder. On Ubuntu, these should be in `~/sketchbook/libraries`. On Windows (irrelevant here), this should be in your `%userprofile%/sketchbook/libraries` (that's `C:\Users\[Your Username]\sketchbook\libraries`).

Finally, open the Arduino IDE...

    arduino
	
If you have problems building or connecting to the Arduino via the Raspberry Pi, you may want to try instead to move everything to root or add yourself to `dialout` and run it all as root (not recommended, and dangerous, passively).

    sudo usermod -a -G dialout $USER

Using the GUI, open up `/catkin_ws/src/world_mapper/sketches/arduino_imu/arduino_imu.ino`.

Now, just build and publish to the Arduino.

## 2.3 Building the ROS Code

First, update all the packages in the `catkin_ws` folder, and build them.

    rosdep update
    catkin_make build
    
Now, let's get a whole bunch of other packages that we used.

    sudo apt-get install ros-kinetic-video-stream-opencv

## 2.4 Building the Desktop Code

1. Open the project (`/src/DesktopUI`) in Unity.
2. In the File Menu, click "Build and Run".
3. Select where to place the final executable.
4. Done.

It's that easy. (No seriously)

## 2.5 Building the Web Interface

First, run the Node.js 13.x setup if you haven't already.

    sudo apt-get install curl
    curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
    
**Note:** If you attempt to `apt-get install nodejs` without doing the above, you'll get 10.x, which has dependencies that will pretty much force you to delete everything you've installed (basically is incompatible). Even if you did install it, the Angular bit won't run anyway.
    
Next, install `node` with the newly defined repositories in `apt`.

    sudo apt-get install nodejs
    
Now, navigate to the Angular Project Folder and install all the Node dependencies.

    cd ~/Downloads/RealityVirtualVirturaliser/web/-RealityVirtualVirturalizer-Interface
    npm install
    
Now, `make` but for Angular.

    ng build
    
Done!

# 3. Assembly

Full build instructions can be found [here](https://github.com/aytimothy/RealityVirtualVirturalizer/blob/master/build-instructions/README.md). They should be followed before moving on to the next step.

# 4. Usage

## 4.1 Manual Startup

First, boot it up...

Run `roscore`, ie.

    screen -S roscore -d -m roscore
    
And finally use the start script.

    source ~/catkin_ws/start.sh
    
You can now access the web interface and start the sensors from there.

## 4.2 Automatic Startup

First, copy `/catkin_ws/rvv_startup.sh` to `/etc/init.d/`.

Then, add it to the list of scripts to run on startup.

    sudo update-rc.d /etc/init.d/rvv_startup.sh defaults
    chmod +x /etc/init.d/rvv_startup.sh
