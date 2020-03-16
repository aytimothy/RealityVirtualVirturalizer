#include <cstdint>
#include <string>
#include <vector>
#ifdef _WIN32
#include "../../../../../../../opt/ros/melodic/x64/include/ros/ros.h"
#else
#include "ros/ros.h"
#endif

// See /catkin_ws/src/world_mapper/msg/Frame.msg for documentation.
class Frame
{
public:
	uint32_t seq;
	ros::Time timestamp;
	std::string frameid;
	float posX;
	float posY;
	float posZ;
	float rotX;
	float rotY;
	float rotZ;
	float accX;
	float accY;
	float accZ;
	float gyrX;
	float gyrY;
	float gyrZ;
	float angle_min;
	float angle_max;
	std::vector<float> ranges;
	std::vector<float> intensities;
	uint32_t width;
	uint32_t height;
	uint32_t depth;
	uint32_t rowSize;
	std::vector<unsigned char> image;
};