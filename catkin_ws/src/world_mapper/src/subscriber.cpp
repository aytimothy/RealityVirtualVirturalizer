//Include
#include <ros/ros.h>
#include <sensor_msgs/PointCloud.h>
#include <pcl_ros/point_cloud.h>
#include <pcl/point_types.h>
#include <boost/foreach.hpp>

typedef pcl::PointCloud<pcl::PointXYZ> PointCloud;

void callback(const PointCloud::ConstPtr& msg){
     //printf ("Cloud: width = %d, height = %d\n", msg->width, msg->height);
     BOOST_FOREACH (const pcl::PointXYZ& pt, msg->points)
     printf ("\t(%f, %f, %f)\n", pt.x, pt.y, pt.z);
}


//Main
int main(int argc, char** argv){
    ros::init(argc, argv, "point_cloud_publisher");    
    ros::NodeHandle n;
	//Subscriber to Cloud 
    Subscriber sub = nh.subscribe<PointCloud>("points2", 1, callback);
}
