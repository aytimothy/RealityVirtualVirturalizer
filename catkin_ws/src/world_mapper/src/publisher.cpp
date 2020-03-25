//Include 
#include <ros/ros.h>
#include <pcl_ros/point_cloud.h>
#include <pcl/point_types.h>
#include <pcl_conversions/pcl_conversions.h>

typedef pcl::PointCloud<pcl::PointXYZ> PointCloud;
//Main
int main(int argc, char** argv){
    ros::init (argc, argv, "pub_pcl");
    ros::NodeHandle nh;
	//Publishing
    ros::Publisher pub = nh.advertise<PointCloud> ("points2", 1);
    PointCloud::Ptr msg(new PointCloud);
    msg->header.frame_id = "frame";
    msg->height = msg->width = 1;
    msg->points.push_back(pcl::PointXYZ(1.0, 2.0, 3.0));

    ros::Rate loop_rate(4);
	//Loop
    while (nh.ok()){
        pcl_conversions::toPCL(ros::Time::now(), msg->header.stamp);
        pub.publish(msg);
        ros::spinOnce();
        loop_rate.sleep();
    }
}
