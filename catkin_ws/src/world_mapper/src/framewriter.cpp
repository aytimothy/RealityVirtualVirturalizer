#include "ros/ros.h"
#include "sensor_msgs/Image.h"
#include "sensor_msgs/Imu.h"
#include "sensor_msgs/LaserScan.h"
#include "frame.h"

ros::NodeHandle* nh;
ros::Publisher* output;
ros::Subscriber* cam_input;
ros::Subscriber* imu_input;
ros::Subscriber* laser_input;
ros::Rate* loop_rate;

void imageCallback (const sensor_msgs::Image::ConstPtr& msg);
void imuCallback (const sensor_msgs::Imu::ConstPtr& msg);
void laserCallback (const sensor_msgs::LaserScan::ConstPtr& msg);

int main (int argc, char** argv) {
	ros::init(argc, argv, "framewriter");
	nh = new ros::NodeHandle();
	output = nh->advertise<Frame>("output", 1000);
	loop_rate = new ros::Rate(10);

	cam_input = n.subscribe("webcam/image_raw", 1000, imageCallback);
	imu_input = n.subscribe("imu", 1000, imuCallback);
	laser_input = n.subscribe("scan", 1000, laserCallback);

	ros::spin();
	return 0;
}

ros::Time timestamp;
void checkData();
void createFrame();

sensor_msgs::Image* lastImageMessage;
sensor_msgs::Imu* lastImuMessage;
sensor_msgs::LaserScan* lastLaserMessage;
ros::time lastImageTimestamp;
ros::time lastImuTimestamp;
ros::time lastLaserTimestamp;
ros::time lastFrameTimestmap;

double rotX = 0.0;
double rotY = 0.0;
double rotZ = 0.0;
double posX = 0.0;
double posY = 0.0;
double posZ = 0.0;

void imageCallback (const sensor_msgs::Image::ConstPtr& msg) {
	ros::time now = ros::time.Now();
	lastImageMessage = msg;
	lastImageTimestamp = now;

	checkData();
}

void imuCallback (const sensor_msgs::Imu::ConstPtr& msg) {
	ros::time now = ros::time.Now();
	double deltaTime = lastImuTimestamp.toSecs() - now.toSecs();
	lastImuMessage = msg;
	lastImuTimestamp = now;
	double deltaRotX = deltaTime * msg->angularVelocity.x;
	double deltaRotY = deltaTime * msg->angularVelocity.y;
	double deltaRotZ = deltaTime * msg->angularVelocity.z;

	// It doesn't work like this, we still neet to transform that along rotation XYZ.
	double deltaPosX = deltaTime * msg->linearVelocity.x;
	double deltaPosY = deltaTime * msg->linearVelocity.y;
	double deltaPosZ = deltaTime * msg->linearvelocity.z;

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
	
	posX += deltaPosX;
	posY += deltaPosY;
	posZ += deltaPosZ;

	checkData();
}

void laserCallback (const sensor_msgs::LaserScan::ConstPtr& msg) {
	ros::Time now = ros::Time.Now();
	lastLaserMessage = msg;
	lastLaserTimestamp = now;

	checkData();
}

void checkData() {
	if (lastImageMessage != NULL && lastImuMessage != NULL && lastLaserMessage != NULL)
		createFrame();
}

void createFrame() {
	// Do whatever to create a frame.

	lastImageMessage = NULL;
	lastImuMessage = NULL;
	lastLaserMessage = NULL;

	ros::Time now = ros::Time.now();
	lastFrameTimestamp = now;
}
