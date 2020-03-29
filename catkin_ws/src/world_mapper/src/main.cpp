
#include <string>
#include <iostream>
#include <cstdio>
#include <ros/ros.h>
#include <sensor_msgs/Imu.h>'

// OS Specific sleep
#ifdef _WIN32
#include <windows.h>
#else
#include <unistd.h>
#endif

#include "serial/serial.h"

using std::string;
using std::exception;
using std::cout;
using std::cerr;
using std::endl;
using std::vector;

void my_sleep(unsigned long milliseconds) {
#ifdef _WIN32
      Sleep(milliseconds); // 100 ms
#else
      usleep(milliseconds*1000); // 100 ms
#endif
}

void enumerate_ports()
{
	vector<serial::PortInfo> devices_found = serial::list_ports();

	vector<serial::PortInfo>::iterator iter = devices_found.begin();

	while( iter != devices_found.end() )
	{
		serial::PortInfo device = *iter++;

		printf( "(%s, %s, %s)\n", device.port.c_str(), device.description.c_str(),
     device.hardware_id.c_str() );
	}
}





  // port, baudrate, timeout in milliseconds




int main(int argc, char **argv) {
  enumerate_ports();
  unsigned long baud = 9600;
  serial::Serial my_serial(port, baud, serial::Timeout::simpleTimeout(1000));
  ros::init(argc, argv, "mpu6050");
  ros::NodeHandle node;
  ros::Publisher pub = node.advertise<sensor_msgs::Imu>("imu", 10);
  ros::Rate rate(10);
  while(ros::ok()) {
    string result = my_serial.read();
    // split message
    sensor_msgs::Imu msg;
    msg.header.stamp = ros::Time::now();
    msg.header.frame_id = '0';
    msg.angular_velocity.x = ;
    msg.angular_velocity.y = ;
    msg.angular_velocity.z = ;
    msg.linear_acceleration.x = ;
    msg.linear_acceleration.y = ;
    msg.linear_acceleration.z = ;
    pub.publish(msg);
    ros::spinOnce();
    rate.sleep();
  try {
    return run(argc, argv);
  } catch (exception &e) {
    cerr << "Unhandled Exception: " << e.what() << endl;
  }
}
