#include "ros/ros.h"
#include "sensor_msgs/Image.h"
#include "sensor_msgs/Imu.h"
#include "sensor_msgs/LaserScan.h"
#include "world_mapper/Frame.h"
#define _USE_MATH_DEFINES
#include <fstream>
#include <functional>
#include <math.h>
#include <string.h>
#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <iterator>
#include <vector>
#include <cstdlib>
#include "../lib/json/include/nlohmann/json.hpp"

// ROS
ros::NodeHandle* nh;
ros::Publisher output;
ros::Subscriber cam_input;
ros::Subscriber imu_input;
ros::Subscriber laser_input;
sensor_msgs::Imu imu_msg;
sensor_msgs::Image image_msg;
sensor_msgs::LaserScan laser_msg;
world_mapper::Frame frame_msg;
bool imu_hasmsg = false;
bool image_hasmsg = false;
bool laser_hasmsg = false;

ros::Rate* loop_rate;
ros::Time lastFrameTimestamp;

void imageCallback (const sensor_msgs::Image::ConstPtr& msg);
void imuCallback (const sensor_msgs::Imu::ConstPtr& msg);
void laserCallback (const sensor_msgs::LaserScan::ConstPtr& msg);
void checkFrame();

char fileDir[2049];
char fileName[129] = "frame";
char fullFileName[2204];

int main (int argc, char** argv) {
    if (argc <= 1) {
        printf("Error: Frame save directory required as a argument.\n");
        return -1;
    }
    if (strlen(argv[1])  >= 2048) {
        printf("Error: Frame save directory is too long. (maxlen=2048)\n");
        return -1;
    }

    strcpy(argv[1], fileDir);
    ros::init(argc, argv, "framewriter");
    nh = new ros::NodeHandle();
    output = nh->advertise<world_mapper::Frame>("output", 1000);
    loop_rate = new ros::Rate(10);
    cam_input = nh->subscribe("webcam/image_raw", 1000, imageCallback);
    imu_input = nh->subscribe("imu", 1000, imuCallback);
    laser_input = nh->subscribe("scan", 1000, laserCallback);
    ros::spin();
    return 0;
}

void imageCallback (const sensor_msgs::Image::ConstPtr& msg) {
    image_msg.width = msg->width;
    image_msg.height = msg->height;
    image_msg.is_bigendian = msg->is_bigendian;
    image_msg.step = msg->step;
    image_msg.data.clear();
    for (int i = 0; i < msg->data.size(); i++)
        image_msg.data.push_back(msg->data[i]);

    image_hasmsg = true;
    checkFrame();
}

ros::Time lastImuCallback;
double rotAdj = 2048;      // It's already done in imureader.
double velAdj = 2048;      // It's already done in imureader.
double rotX = 0;
double rotY = 0;
double rotZ = 0;
double posX = 0;
double posY = 0;
double posZ = 0;

void imuCallback (const sensor_msgs::Imu::ConstPtr& msg) {
    ros::Time now = ros::Time::now();
    double deltaTime = now.toSec() - lastImuCallback.toSec();
    lastImuCallback = now;

    imu_msg.linear_acceleration.x = msg->linear_acceleration.x;
    imu_msg.linear_acceleration.y = msg->linear_acceleration.y;
    imu_msg.linear_acceleration.z = msg->linear_acceleration.z;
    imu_msg.linear_acceleration_covariance = msg->linear_acceleration_covariance;
    imu_msg.angular_velocity.x = msg->angular_velocity.x;
    imu_msg.angular_velocity.y = msg->angular_velocity.y;
    imu_msg.angular_velocity.z = msg->angular_velocity.z;
    imu_msg.angular_velocity_covariance = msg->angular_velocity_covariance;
    imu_msg.orientation.x = msg->orientation.x;
    imu_msg.orientation.y = msg->orientation.y;
    imu_msg.orientation.z = msg->orientation.z;
    imu_msg.orientation.w = msg->orientation.w;
    imu_msg.orientation_covariance = msg->orientation_covariance;

    double deltaRotX = deltaTime * msg->orientation.x / rotAdj;
    double deltaRotY = deltaTime * msg->orientation.y / rotAdj;
    double deltaRotZ = deltaTime * msg->orientation.z / rotAdj;

    double deltaPosX = deltaTime * msg->linear_acceleration.x / velAdj;
    double deltaPosY = deltaTime * msg->linear_acceleration.y / velAdj;
    double deltaPosZ = deltaTime * msg->linear_acceleration.z / velAdj;

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

    imu_hasmsg = true;
    checkFrame();
}

void laserCallback (const sensor_msgs::LaserScan::ConstPtr& msg) {
    laser_msg.angle_min = msg->angle_min;
    laser_msg.angle_max = msg->angle_max;
    laser_msg.angle_increment = msg->angle_increment;
    laser_msg.time_increment = msg->time_increment;
    laser_msg.scan_time = msg->scan_time;
    laser_msg.range_min = msg->range_min;
    laser_msg.range_max = msg->range_max;
    laser_msg.ranges.clear();
    laser_msg.intensities.clear();
    for (int i = 0; i < msg->ranges.size(); i++)
        laser_msg.ranges.push_back(msg->ranges[i]);
    for (int i = 0; i < msg->intensities.size(); i++)
        laser_msg.intensities.push_back(msg->intensities[i]);

    laser_hasmsg = true;
    checkFrame();
}

uint32_t seq = 0;

void checkFrame() {
    if (!laser_hasmsg || !imu_hasmsg || !image_hasmsg)
        return;

    seq++;
    lastFrameTimestamp = ros::Time::now();
    frame_msg.seq = seq;
    frame_msg.timestamp = lastFrameTimestamp;
    frame_msg.frameid = "";
    frame_msg.posX = posX;
    frame_msg.posY = posY;
    frame_msg.posZ = posZ;
    frame_msg.rotX = rotX;
    frame_msg.rotY = rotY;
    frame_msg.rotZ = rotZ;
    frame_msg.accX = imu_msg.linear_acceleration.x;
    frame_msg.accY = imu_msg.linear_acceleration.y;
    frame_msg.accZ = imu_msg.linear_acceleration.z;
    frame_msg.gyrX = imu_msg.angular_velocity.x;
    frame_msg.gyrY = imu_msg.angular_velocity.y;
    frame_msg.gyrZ = imu_msg.angular_velocity.z;
    frame_msg.angle_min = laser_msg.angle_min;
    frame_msg.angle_max = laser_msg.angle_max;
    frame_msg.angle_increment = laser_msg.angle_increment;
    frame_msg.range_min = laser_msg.range_min;
    frame_msg.range_max = laser_msg.range_max;
    frame_msg.ranges.clear();
    for (int i = 0; i < laser_msg.ranges.size(); i++)
        frame_msg.ranges.push_back(frame_msg.ranges[i]);
    frame_msg.intensities.clear();
    for (int i = 0; i < laser_msg.intensities.size(); i++)
        frame_msg.intensities.push_back(laser_msg.intensities[i]);
    frame_msg.width = image_msg.width;
    frame_msg.height = image_msg.height;
    frame_msg.depth = 3;
    frame_msg.rowSize = image_msg.step;
    frame_msg.image.clear();
    for (int i = 0; i < image_msg.data.size(); i++)
        frame_msg.image.push_back(image_msg.data[i]);

    sprintf("%s%s%05u.bson", fullFileName, fileDir, fileName, seq);

    nlohmann::json j;
    printf("Line 314\n");
    j["accX"] = frame_msg.accX;
    j["accY"] = frame_msg.accY;
    j["accZ"] = frame_msg.accZ;
    j["gyrX"] = frame_msg.gyrX;
    j["gyrY"] = frame_msg.gyrY;
    j["gyrZ"] = frame_msg.gyrZ;
    j["posX"] = frame_msg.posX;
    j["posY"] = frame_msg.posY;
    j["posZ"] = frame_msg.posZ;
    j["rotX"] = frame_msg.rotX;
    j["rotY"] = frame_msg.rotY;
    j["rotZ"] = frame_msg.rotZ;
    j["angle_max"] = frame_msg.angle_max;
    j["angle_min"] = frame_msg.angle_min;
    j["ranges"] = frame_msg.ranges;
    j["intensities"] = frame_msg.intensities;
    j["width"] = frame_msg.width;
    j["height"] = frame_msg.height;
    j["depth"] = frame_msg.depth;
    j["image"] = frame_msg.image;
    j["frameid"] = frame_msg.frameid;
    j["seq"] = frame_msg.seq;
    j["timestamp"] = frame_msg.timestamp.toSec();

    std::vector<std::uint8_t> v_bson = nlohmann::json::to_bson(j);

    std::fstream fs;
    fs.open(fullFileName);
    std::ostream_iterator<std::uint8_t> out_itr(fs);
    std::copy(v_bson.begin(), v_bson.end(), out_itr);
    fs.close();
    output.publish(frame_msg);

    imu_hasmsg = false;
    image_hasmsg = false;
    laser_hasmsg = false;
}