//Include
#ifdef _WIN32
#include "../../../../../../../../../opt/ros/melodic/x64/include/ros/ros.h"
#include "../../../../../../../../../opt/ros/melodic/x64/include/ros/time.h"
#include "../../../../../../../../../opt/ros/melodic/x64/include/ros/node_handle.h"
#include "../../../../../../../../../opt/ros/melodic/x64/include/ros/init.h"
#include "../../../../../../../../../opt/ros/melodic/x64/include/ros/rate.h"
#include "../../../../../../../../../opt/ros/melodic/x64/include/ros/subscriber.h"
#include "../../../../../../../../../opt/ros/melodic/x64/include/ros/publisher.h"
#include "../../../../../../../../../opt/ros/melodic/x64/include/sensor_msgs/Image.h"
#include "../../../../../../../../../opt/ros/melodic/x64/include/sensor_msgs/LaserScan.h"
#include "../../../../../../../../../opt/ros/melodic/x64/include/sensor_msgs/Imu.h"
#define _USE_MATH_DEFINES
#else
#include "ros/ros.h"
#include "sensor_msgs/Image.h"
#include "sensor_msgs/Imu.h"
#include "sensor_msgs/LaserScan.h"
#endif
#include "world_mapper/Frame.h"
#include <fstream>
#include <functional>
#include <math.h>
#include <string.h> 
#include <stdio.h>
#include <iostream>
#include <stdlib.h> 
#include "../lib/json/include/nlohmann/json.hpp"

//Using
//using json = nlohman::json;

//ROS
ros::NodeHandle* nh;
ros::Publisher output;
ros::Subscriber cam_input;
ros::Subscriber imu_input;
ros::Subscriber laser_input;
ros::Rate* loop_rate;
ros::Time* lastFrameTimestamp;
world_mapper::Frame* frame;
//Functions
void imageCallback (const sensor_msgs::Image::ConstPtr& msg);
void imuCallback (const sensor_msgs::Imu::ConstPtr& msg);
void laserCallback (const sensor_msgs::LaserScan::ConstPtr& msg);

void setupSocket();
void setupWriter();
void writeFrame(world_mapper::Frame* frame);
void broadcastFrame(world_mapper::Frame* frame);
//ROS Time 
ros::Time timestamp;
void checkData();
void createFrame();

sensor_msgs::Image *lastImageMessage;
sensor_msgs::Imu *lastImuMessage;
sensor_msgs::LaserScan *lastLaserMessage;
ros::Time lastImageTimestamp;
ros::Time lastImuTimestamp;
ros::Time lastLaserTimestamp;
ros::Time lastFrameTimestmap;

double rotX = 0.0;
double rotY = 0.0;
double rotZ = 0.0;
double posX = 0.0;
double posY = 0.0;
double posZ = 0.0;

uint32_t seq = 0;
//Main
int main (int argc, char** argv) {
	ros::init(argc, argv, "framewriter");
	nh = new ros::NodeHandle();
	output = nh->advertise<world_mapper::Frame>("output", 1000);
	loop_rate = new ros::Rate(10);
	setupSocket();
	setupWriter();

	cam_input = nh->subscribe("webcam/image_raw", 1000, imageCallback);
	imu_input = nh->subscribe("imu", 1000, imuCallback);
	laser_input = nh->subscribe("scan", 1000, laserCallback);

	ros::spin();
	return 0;
}
//Image Callback
void imageCallback (const sensor_msgs::Image::ConstPtr& msg) {
	ros::Time now = ros::Time::now();
	if (lastImageMessage != NULL)
	    ~lastImageMessage;
	lastImageMessage->height = msg->height;
	lastImageMessage->width = msg->width;
	lastImageMessage->step = msg->step;
	lastImageMessage->data = msg->data;
	lastImageMessage->is_bigendian = msg->is_bigendian;
	lastImageMessage->encoding = msg->encoding;
	lastImageMessage->header = msg->header;
	lastImageTimestamp = now;
    //Call Function
	checkData();
}
// todo: Work out calibration (should not be necessary since this is done in the Arduino Program)
double rotAdj = 1;
double velAdj = 1;
//IMU Callback
void imuCallback (const sensor_msgs::Imu::ConstPtr& msg) {
	ros::Time now = ros::Time::now();
	double deltaTime = lastImuTimestamp.toSec() - now.toSec();
	if (lastImuMessage != NULL)
	    ~lastImuMessage;
	lastImuMessage = new sensor_msgs::Imu();
	lastImuMessage->linear_acceleration.x = msg->linear_acceleration.x;
	lastImuMessage->linear_acceleration.y = msg->linear_acceleration.y;
	lastImuMessage->linear_acceleration.z = msg->linear_acceleration.z;
	lastImuMessage->orientation.x = msg->orientation.x;
	lastImuMessage->orientation.y = msg->orientation.y;
	lastImuMessage->orientation.z = msg->orientation.z;
	lastImuTimestamp = now;
	double deltaRotX = deltaTime * msg->orientation.x * rotAdj;
	double deltaRotY = deltaTime * msg->orientation.y * rotAdj;
	double deltaRotZ = deltaTime * msg->orientation.z * rotAdj;
	
	double deltaPosX = deltaTime * msg->linear_acceleration.x * velAdj;
	double deltaPosY = deltaTime * msg->linear_acceleration.y * velAdj;
	double deltaPosZ = deltaTime * msg->linear_acceleration.z * velAdj;

	rotX += deltaRotX;
	rotY += deltaRotY;
	rotZ += deltaRotZ;
	
	if (rotX >= 360.0){
		rotX -= 360.0;
    }
    
	if (rotX < 0.0){
		rotX += 360.0;
    }
    
	if (rotY >= 360.0){	
		rotY -= 360.0;
    }
    
	if (rotY < 0.0){
		rotY += 360.0;
    }
    
	if (rotZ >= 360.0){
		rotZ -= 360.0;
    }
    
	if (rotZ < 0.0){
		rotZ += 360.0;
    }

	double radX = rotX * (M_PI / 180.0);
	double radY = rotY * (M_PI / 180.0);
	double radZ = rotZ * (M_PI / 180.0);
	double rx_x = 1;
	double rx_y = cos(radX) - sin(radX);
	double rx_z = sin(radX) + cos(radX);
	double ry_x = cos(radY) + sin(radY);
	double ry_y = 1;
	double ry_z = -sin(radY) + cos(radY);
	double rz_x = cos(radZ) - sin(radZ);
	double rz_y = sin(radZ) + cos(radZ);
	double rz_z = 1;
	double rx_n = rx_x + rx_y + rx_z;
	double ry_n = ry_x + ry_y + ry_z;
	double rz_n = rz_x + rz_y + rz_z;
	rx_x = rx_x / rx_n;
	rx_y = rx_y / rx_n;
	rx_z = rx_z / rx_n;
	ry_x = ry_x / ry_n;
	ry_y = ry_y / ry_n;
	ry_z = ry_z / ry_n;
	rz_x = rz_x / rz_n;
	rz_y = rz_y / rz_n;
	rz_z = rz_z / rz_n;
	double dx_x = rx_x * deltaPosX;
	double dx_y = rx_y * deltaPosX;
	double dx_z = rx_z * deltaPosX;
	double dy_x = ry_x * deltaPosY;
	double dy_y = ry_y * deltaPosY;
	double dy_z = ry_z * deltaPosY;
	double dz_x = rz_x * deltaPosZ;
	double dz_y = rz_y * deltaPosZ;
	double dz_z = rz_z * deltaPosZ;
	double finalDeltaX = dx_x + dy_x + dz_x;
	double finalDeltaY = dx_y + dy_y + dz_y;
	double finalDeltaZ = dx_z + dy_z + dz_z;
	
	posX += finalDeltaX;
	posY += finalDeltaY;
	posZ += finalDeltaZ;

	checkData();
}
//Laser Callback
void laserCallback (const sensor_msgs::LaserScan::ConstPtr& msg) {
	ros::Time now = ros::Time::now();
	if (lastLaserMessage != NULL)
	    ~lastLaserMessage;
	lastLaserMessage = new sensor_msgs::LaserScan();
	lastLaserMessage->header = msg->header;
	lastLaserMessage->angle_increment = msg->angle_increment;
	lastLaserMessage->angle_min = msg->angle_min;
	lastLaserMessage->angle_max = msg->angle_max;
	lastLaserMessage->intensities = msg->intensities;
	lastLaserMessage->range_max = msg->range_max;
	lastLaserMessage->range_min = msg->range_min;
	lastLaserMessage->ranges = msg->ranges;
	lastLaserMessage->scan_time = msg->scan_time;
	lastLaserMessage->time_increment = msg->time_increment;
	lastLaserTimestamp = now;
    //Call Function
	checkData();
}
//Check Data
void checkData() { 
    //Check Messages
	if (lastImageMessage != NULL && lastImuMessage != NULL && lastLaserMessage != NULL){
		//Create Frame
	    createFrame();
    } else{
    	//do nothing? 
	}
}
//Create Frame 
void createFrame() {
	//Init Frame
	frame = new world_mapper::Frame();
	frame->accX = lastImuMessage->linear_acceleration.x;
	frame->accY = lastImuMessage->linear_acceleration.y;
	frame->accZ = lastImuMessage->linear_acceleration.z;
	frame->gyrX = lastImuMessage->orientation.x;
	frame->gyrY = lastImuMessage->orientation.y;
	frame->gyrZ = lastImuMessage->orientation.z;
	frame->posX = posX;
	frame->posY = posY;
	frame->posZ = posZ;
	frame->rotX = rotX;
	frame->rotY = rotY;
	frame->rotZ = rotZ;
	frame->angle_max = lastLaserMessage->angle_max;
	frame->angle_min = lastLaserMessage->angle_min;
	frame->ranges = lastLaserMessage->ranges;
	frame->intensities = lastLaserMessage->intensities;
	frame->width = lastImageMessage->width;
	frame->height = lastImageMessage->height;
	frame->depth = 4;	// should read lastImageMessage->encoding
	frame->image = lastImageMessage->data;
	frame->frameid = "";
	frame->seq = seq;
	frame->timestamp = ros::Time::now();

	seq++;
	
	writeFrame(frame);
	broadcastFrame(frame);
	//Set Messages to NULL
	lastImageMessage = NULL;
	lastImuMessage = NULL;
	lastLaserMessage = NULL;
    //Get Time 
	ros::Time now = ros::Time::now();
	lastFrameTimestamp = &now;

	~frame();
}
//Setup Writer 
void setupWriter() {
	// Nothing needed to be done. Just open close files.
}
//SetupSocket
void setupSocket() {
	//
}
//Write Frame
void writeFrame(world_mapper::Frame* frame) {
	//Init JSON
	std::vector<std::uint8_t> v_bson = json::to_bson(frame);
	//json j;
	//Init File
	std::fstream fs;
	char filenamebuff[2048];
	//Open File
	fs.open(sprintf("frame%5d.bson", filenamebuff, seq));
	//Write to File
	fs.write(v_bson.data);
	//Close to File
	fs.close();
}
//Boardcast Frame
void broadcastFrame(world_mapper::Frame* frame) {
	// todo: Use the socket server you initialized in setupSocket().
		
}
