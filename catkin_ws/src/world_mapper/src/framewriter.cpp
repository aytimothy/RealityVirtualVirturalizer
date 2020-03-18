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
#include "frame.h"
#include <fstream>
#include <functional>
#include <math.h>
#include <string.h> 
#include <stdio.h>
#include <iostream.h>
#include <stdlib.h> 
#include <nlohmann/json.hpp>
 
#define PORT 8080

ros::NodeHandle* nh;
ros::Publisher* output;
ros::Subscriber* cam_input;
ros::Subscriber* imu_input;
ros::Subscriber* laser_input;
ros::Rate* loop_rate;
ros::Time* lastFrameTimestamp;
Frame* frame;

void imageCallback (const sensor_msgs::Image::ConstPtr& msg);
void imuCallback (const sensor_msgs::Imu::ConstPtr& msg);
void laserCallback (const sensor_msgs::LaserScan::ConstPtr& msg);

void setupSocket();
void setupWriter();
void writeFrame(Frame* frame);
void broadcastFrame(Frame* frame);

uint32_t seq = 0;

int main (int argc, char** argv) {
	ros::init(argc, argv, "framewriter");
	nh = new ros::NodeHandle();
	output = nh->advertise<Frame>("output", 1000);
	loop_rate = new ros::Rate(10);
	setupSocket();
	setupWriter();

	cam_input = nh.subscribe("webcam/image_raw", 1000, imageCallback);
	imu_input = nh.subscribe("imu", 1000, imuCallback);
	laser_input = nh.subscribe("scan", 1000, laserCallback);

	ros::spin();
	return 0;
}

ros::Time timestamp;
void checkData();
void createFrame();

sensor_msgs::Image* lastImageMessage;
sensor_msgs::Imu* lastImuMessage;
sensor_msgs::LaserScan* lastLaserMessage;
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

void imageCallback (const sensor_msgs::Image::ConstPtr& msg) {
	ros::Time now = ros::Time::now();
	lastImageMessage = msg;
	lastImageTimestamp = now;

	checkData();
}

// todo: Work out calibration (should not be necessary since this is done in the Arduino Program)
double rotAdj = 1;
double velAdj = 1;

void imuCallback (const sensor_msgs::Imu::ConstPtr& msg) {
	ros::Time now = ros::Time::now();
	double deltaTime = lastImuTimestamp.toSec() - now.toSec();
	lastImuMessage = msg;
	lastImuTimestamp = now;
	double deltaRotX = deltaTime * msg->angularVelocity.x * rotAdj;
	double deltaRotY = deltaTime * msg->angularVelocity.y * rotAdj;
	double deltaRotZ = deltaTime * msg->angularVelocity.z * rotAdj;
	
	double deltaPosX = deltaTime * msg->linearVelocity.x * velAdj;
	double deltaPosY = deltaTime * msg->linearVelocity.y * velAdj;
	double deltaPosZ = deltaTime * msg->linearvelocity.z * velAdj;

	rotX += deltaRotX;
	rotY += deltaRotY;
	rotZ += deltaRotZ;
	if (rotX >= 360.0)
		rotX -= 360.0;
	if (rotX < 0.0)
		rotX += 360.0;
	if (rotY >= 360.0)
		rotY -= 360.0;
	if (rotY < 0.0)
		rotY += 360.0;
	if (rotZ >= 360.0)
		rotZ -= 360.0;
	if (rotZ < 0.0)
		rotZ += 360.0;
	
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

void laserCallback (const sensor_msgs::LaserScan::ConstPtr& msg) {
	ros::Time now = ros::Time::now();
	lastLaserMessage = msg;
	lastLaserTimestamp = now;

	checkData();
}

void checkData() {
	if (lastImageMessage != NULL && lastImuMessage != NULL && lastLaserMessage != NULL)
		createFrame();
}

void createFrame() {
	frame = new Frame();
	frame->accX = lastImuMessage->linear_acceleration->x;
	frame->accY = lastImuMessage->linear_acceleration->y;
	frame->accZ = lastImuMessage->linear_acceleration->z;
	frame->gyrX = lastImuMessage->angular_velocity->x;
	frame->gyrY = lastImuMessage->angular_velocity->y;
	frame->gyrZ = lastImuMessage->angular_velocity->z;
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
	
	lastImageMessage = NULL;
	lastImuMessage = NULL;
	lastLaserMessage = NULL;

	ros::Time now = ros::Time::now();
	lastFrameTimestamp = &now;

	~frame();
}

void setupWriter() {
	// Nothing needed to be done. Just open close files.
}

void setupSocket() {
	
}

void writeFrame(Frame* frame) {
	std::vector<std::uint8_t> v_bson = json::to_bson(frame);
	std::fstream fs;
	char filenamebuff[2048];
	fs.open(sprintf("frame%5d.bson", filenamebuff, seq));
	fs.write(v_bson.data);
	fs.close();
}

void broadcastFrame(Frame* frame) {
	// todo: Use the socket server you initialized in setupSocket().
	
}