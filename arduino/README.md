# Arduino Code

This folder contains the Arduino code that is to be uploaded to the Arduino and built on the ROS system first.

## arduino_imu

Reads the sensor data using the UTM-6050 IMU using the Arduino, and posts that straight into ROS.

**Note:** You'll need to run [`rosrun rosserial_arduino make_libraries.py`](https://wiki.ros.org/rosserial_arduino/Tutorials/Arduino%20IDE%20Setup) first.

**Included Libraries:** [I2Cdev](https://github.com/jrowberg/i2cdevlib), [MPU6050](https://github.com/jrowberg/i2cdevlib/tree/master/Arduino/MPU6050)