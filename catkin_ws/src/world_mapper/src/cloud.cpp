//Include
#include <ros/ros.h>
#include <sensor_msgs/PointCloud.h>
#include <pcl_ros/point_cloud.h>
#include <pcl/point_types.h>
#include <boost/foreach.hpp>
#include <pcl_conversions/pcl_conversions.h>

typedef pcl::PointCloud<pcl::PointXYZ> PointCloud;

//Main
int main(int argc, char** argv){
    ros::init(argc, argv, "point_cloud_publisher");    
    ros::NodeHandle n;
    ros::Publisher pub = n.advertise<sensor_msgs::PointCloud>("cloud", 50);
    
    unsigned int num_points = 100;
    int count = 0;
    ros::Rate r(1.0);
	
	PointCloud::Ptr msg (new PointCloud);
	msg->header.frame_id = "tf_frame";
    msg->height = msg->width = 1;
    msg->points.push_back (pcl::PointXYZ(1.0, 2.0, 3.0));
	//Loop
    while(n.ok()){
	   pcl_conversions::toPCL(ros::Time::now(), msg->header.stamp);
       pub.publish (msg);
	   ros::spinOnce ();
		
       sensor_msgs::PointCloud cloud;
       cloud.header.stamp = ros::Time::now();
       cloud.header.frame_id = "sensor_frame";
       cloud.points.resize(num_points);

       cloud.channels.resize(1);
       cloud.channels[0].name = "intensities";
       cloud.channels[0].values.resize(num_points);
   
       for(unsigned int i = 0; i < num_points; ++i){
         cloud.points[i].x = 1 + count;
         cloud.points[i].y = 2 + count;
         cloud.points[i].z = 3 + count;
         cloud.channels[0].values[i] = 100 + count;
       }
  
       pub.publish(cloud);
       ++count;
       r.sleep();
     }
}
