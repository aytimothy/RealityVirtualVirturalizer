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

void imageCallback (const sensor_msgs::Image::ConstPtr& msg) {
	
}

void imuCallback (const sensor_msgs::Imu::ConstPtr& msg) {
	
}

void laserCallback (const sensor_msgs::LaserScan::ConstPtr& msg) {
	
}
