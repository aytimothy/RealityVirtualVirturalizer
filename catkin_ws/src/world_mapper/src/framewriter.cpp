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
#include <world_mapper/Frame.h>
#include <fstream>
#include <functional>
#include <math.h>
#include <string.h> 
#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <iterator>
#include <vector>
#include "../lib/json/include/nlohmann/json.hpp"

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
	printf("Line 73\n");
	ros::init(argc, argv, "framewriter");
	nh = new ros::NodeHandle();
	output = nh->advertise<world_mapper::Frame>("output", 1000);
	loop_rate = new ros::Rate(10);
	printf("Line 78\n");
	setupSocket();
	setupWriter();

	printf("Line 82\n");
	cam_input = nh->subscribe("webcam/image_raw", 1000, imageCallback);
	imu_input = nh->subscribe("imu", 1000, imuCallback);
	laser_input = nh->subscribe("scan", 1000, laserCallback);

	printf("Line 87\n");
	ros::spin();
	return 0;
}
//Image Callback
void imageCallback (const sensor_msgs::Image::ConstPtr& msg) {
	printf("Line 93 : imageCallback(const sensor_msgs::Image::ConstPtr&)\n");
	ros::Time now = ros::Time::now();
	if (lastImageMessage != NULL) {
		printf("Line 96\n");
		delete(lastImageMessage);
	}
	printf("Line 99\n");
	lastImageMessage = new sensor_msgs::Image();
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
	printf("Line 117: imuCallback(const sensor_msgs::Imu::ConstPtr&)\n");
	ros::Time now = ros::Time::now();
	double deltaTime = lastImuTimestamp.toSec() - now.toSec();
	if (lastImuMessage != NULL) {
		printf("Line 121");
		delete(lastImuMessage);
	}
	printf("Line 124\n");
	lastImuMessage = new sensor_msgs::Imu();
	lastImuMessage->linear_acceleration.x = msg->linear_acceleration.x;
	lastImuMessage->linear_acceleration.y = msg->linear_acceleration.y;
	lastImuMessage->linear_acceleration.z = msg->linear_acceleration.z;
	lastImuMessage->orientation.x = msg->orientation.x;
	lastImuMessage->orientation.y = msg->orientation.y;
	lastImuMessage->orientation.z = msg->orientation.z;
	lastImuTimestamp = now;
	printf("Line 133\n");
	double deltaRotX = deltaTime * msg->orientation.x * rotAdj;
	double deltaRotY = deltaTime * msg->orientation.y * rotAdj;
	double deltaRotZ = deltaTime * msg->orientation.z * rotAdj;
	
	double deltaPosX = deltaTime * msg->linear_acceleration.x * velAdj;
	double deltaPosY = deltaTime * msg->linear_acceleration.y * velAdj;
	double deltaPosZ = deltaTime * msg->linear_acceleration.z * velAdj;

	rotX += deltaRotX;
	rotY += deltaRotY;
	rotZ += deltaRotZ;
	printf("Line 145\n");
	
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
	printf("Line 170\n");

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
	printf("Line 212\n");

	checkData();
}
//Laser Callback
void laserCallback (const sensor_msgs::LaserScan::ConstPtr& msg) {
	printf("Line 218: laserCallback(const sensor_msgs::LaserScan::ConstPtr&)\n");
	ros::Time now = ros::Time::now();
	if (lastLaserMessage != NULL) {
		printf("Line 221");
		delete(lastLaserMessage);
	}
	printf("Line 224\n");
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
	printf("Line 238\n");
	checkData();
}
//Check Data
void checkData() { 
	printf("Line 243 : checkData()\n");
    //Check Messages
	if (lastImageMessage != NULL && lastImuMessage != NULL && lastLaserMessage != NULL){
		//Create Frame
	    createFrame();
    }
}
//Create Frame 
void createFrame() {
	printf("Line 252 : createFrame()\n");
	//Init Frame
	frame = new world_mapper::Frame();
	printf("Line 255\n");
	frame->accX = lastImuMessage->linear_acceleration.x;
	frame->accY = lastImuMessage->linear_acceleration.y;
	frame->accZ = lastImuMessage->linear_acceleration.z;
	frame->gyrX = lastImuMessage->orientation.x;
	frame->gyrY = lastImuMessage->orientation.y;
	frame->gyrZ = lastImuMessage->orientation.z;
	printf("Line 262\n");
	frame->posX = posX;
	frame->posY = posY;
	frame->posZ = posZ;
	frame->rotX = rotX;
	frame->rotY = rotY;
	frame->rotZ = rotZ;
	printf("Line 269\n");
	frame->angle_max = lastLaserMessage->angle_max;
	frame->angle_min = lastLaserMessage->angle_min;
	frame->ranges = lastLaserMessage->ranges;
	frame->intensities = lastLaserMessage->intensities;
	printf("Line 274\n");
	frame->width = lastImageMessage->width;
	frame->height = lastImageMessage->height;
	frame->depth = 3;	// should read lastImageMessage->encoding
	frame->image = std::vector<uint8_t>(lastImageMessage->data.size());
	std::copy(lastImageMessage->data.begin(), lastImageMessage->data.end(), frame->image.begin());
	printf("Line 280\n");
	frame->frameid = "";
	frame->seq = seq;
	frame->timestamp = ros::Time::now();

	seq++;

	printf("Line 287\n");
	writeFrame(frame);
	broadcastFrame(frame);
	//Set Messages to NULL
	lastImageMessage = NULL;
	lastImuMessage = NULL;
	lastLaserMessage = NULL;
    //Get Time 
	ros::Time now = ros::Time::now();
	lastFrameTimestamp = &now;
	printf("Line 297\n");
	delete(frame);
}
//Setup Writer 
void setupWriter() {
	printf("Line 302 : setupWriter()\n");
	// Nothing needed to be done. Just open close files.
}
//SetupSocket
void setupSocket() {
	printf("Line 307 : setupWriter()\n");
}
//Write Frame
void writeFrame(world_mapper::Frame* frame) {
	//Init JSON
	printf("Line 312 : writeFrame(world_mapper::Frame*)\n");
	nlohmann::json j;
	printf("Line 314\n");
	j["accX"] = frame->accX;
	j["accY"] = frame->accY;
	j["accZ"] = frame->accZ;
	j["gyrX"] = frame->gyrX;
	j["gyrY"] = frame->gyrY;
	j["gyrZ"] = frame->gyrZ;
	j["posX"] = frame->posX;
	j["posY"] = frame->posY;
	j["posZ"] = frame->posZ;
	j["rotX"] = frame->rotX;
	j["rotY"] = frame->rotY;
	j["rotZ"] = frame->rotZ;
	j["angle_max"] = frame->angle_max;
	j["angle_min"] = frame->angle_min;
	j["ranges"] = frame->ranges;
	j["intensities"] = frame->intensities;
	j["width"] = frame->width;
	j["height"] = frame->height;
	j["depth"] = frame->depth;
	j["image"] = frame->image;
	j["frameid"] = frame->frameid;
	j["seq"] = frame->seq;
	printf("Line 337\n");
	j["timestamp"] = frame->timestamp.toSec();

	std::vector<std::uint8_t> v_bson = nlohmann::json::to_bson(j);
	printf("Line 341\n");
	//json j;
	//Init File
	printf("Line 344\n");
	std::fstream fs;
	char filenamebuff[2048];
	printf("Line 347\n");
	//Open File
	// segfault here!!!
    	sprintf("frame%5d.bson", filenamebuff, seq);
	printf("Line 350");
	fs.open(filenamebuff);
	//Write to File
	printf("Line 353\n");
	std::ostream_iterator<std::uint8_t> out_itr(fs);
	printf("Line 355\n");
	std::copy(v_bson.begin(), v_bson.end(), out_itr);
	printf("Line 357\n");
	//Close to File
	fs.close();
	printf("Line 360\n");
}
//Boardcast Frame
void broadcastFrame(world_mapper::Frame* frame) {
	printf("Line 362 : broadcastFrame(world_mapper::Frame*)\n");
	// todo: Use the socket server you initialized in setupSocket().
}
