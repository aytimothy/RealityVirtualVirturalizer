#define USE_USBCON

#include <ros.h>
#include <sensor_msgs/Imu.h>

ros::NodeHandle nh;
sensor_msgs::imu_msg;
ros::Publisher chatter("chatter", &imu_msg);

void setup() {
  nh.initNode();
  nh.advertise(chatter); 
}

void loop() {
  imu_msg.orientation.x = 0;
  imu_msg.orientation.y = 0;
  imu_msg.orientation.z = 0;
  imu_msg.angular_velocity.x = 0;
  imu_msg.angular_velocity.y = 0;
  imu_msg.angular_velocity.z = 0;
  imu_msg.linear_acceleration.x = 0;
  imu_msg.linear_acceleration.y = 0;
  imu_msg.linear_acceleration.z = 0;
  chatter.publish(&imu_msg);
  nh.spinOnce();
  delay(1000);
}
