#include "ros/ros.h"
#include "geometry_msgs/Twist.h"
#include "turtlesim/Pose.h"
#include <sstream>
#include <cstdlib>
#include <unistd.h>

void move(double speed, double distance, bool isForward);
void turn (double speed, double angle, bool clockwise);

ros::Publisher velocity_publisher;
ros::Subscriber pose_subscriber;
turtlesim::Pose turtlesim_pose;

int main(int argv, char** argc) {
    ros::init(argv, argc, "turtlesim_ex1");

    ros::NodeHandle n;
    ros::Rate loop_rate(10);

    velocity_publisher = n.advertise<geometry_msgs::Twist>("/turtle1/cmd_vel", 10);
    while (ros::ok()) {
        int rawrandomdistance = rand() % 1000;
        double randomdistance = (rawrandomdistance / 1000.0) * 5.0;
        int rawrandomspeed = rand() % 1000;
        double randomspeed = (rawrandomspeed / 1000.0) * 10.0;
        move(randomspeed, randomdistance, true);
        ROS_INFO("Moving forward %d", randomdistance);
        ros::spinOnce();
        loop_rate.sleep();
        int rawrandomangle = rand() % 1000;
        double randomangle = 45.0 + ((rawrandomangle / 1000.0) * 135.0);
        int rawrandomvelocity = rand() % 1000;
        double randomvelocity = 20.0 + ((rawrandomvelocity / 1000.0) * 70.0);
	bool clockwise = rand() % 2;
	turn(randomvelocity, randomangle, clockwise);
        if (clockwise)
            ROS_INFO("Moving clockwise %d", randomangle);
        if (!clockwise)
            ROS_INFO("Moving anti-clockwise %d", randomangle);
        ros::spinOnce();
        loop_rate.sleep();
    }

    ros::spin();
    return 0;
}

void move(double speed, double distance, bool isForward) {
    ros::Rate loop_rate(10);
    geometry_msgs::Twist vel_msg;
    
    if (isForward)
        vel_msg.linear.x = abs(speed);
    else
        vel_msg.linear.x = -abs(speed);

    vel_msg.linear.y = 0;
    vel_msg.linear.z = 0;

    vel_msg.angular.x = 0;
    vel_msg.angular.y = 0;
    vel_msg.angular.z = 0;
    
    double duration = distance / speed;
    double t_now = ros::Time::now().toSec();
    double t_start = t_now;
    double t_end = t_start + duration;

    while (t_now < t_end) {
        velocity_publisher.publish(vel_msg);
        ros::spinOnce();
        loop_rate.sleep();
        t_now = ros::Time::now().toSec();
    }

    vel_msg.linear.x = 0;
    velocity_publisher.publish(vel_msg);
}

void turn(double speed, double distance, bool clockwise) {
    ros::Rate loop_rate(10);
    geometry_msgs::Twist vel_msg;

    vel_msg.linear.x = 0;
    vel_msg.linear.y = 0;
    vel_msg.linear.z = 0;
    vel_msg.angular.x = 0;
    vel_msg.angular.y = 0;
    
    if (clockwise)
        vel_msg.angular.z = -abs(speed);
    else
        vel_msg.angular.z = abs(speed);

    double duration = distance / speed;
    double t_now = ros::Time::now().toSec();
    double t_start = t_now;
    double t_end = t_start + duration;

    while (t_now < t_end) {
        velocity_publisher.publish(vel_msg);
        ros::spinOnce();
        loop_rate.sleep();
        t_now = ros::Time::now().toSec();
    }

    vel_msg.angular.z = 0;
    velocity_publisher.publish(vel_msg);
}
