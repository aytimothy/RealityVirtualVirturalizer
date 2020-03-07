// Uncomment this to use ROS output functionality instead.
// #define ROS

#include <I2Cdev.h>
#include <helper_3dmath.h>
#include <MPU6050.h>
#if ROS
  #include <ros.h>
  #include <sensor_msgs/imu.h>
#endif

#if I2CDEV_IMPLEMENTATION == I2CDEV_ARDUINO_WIRE
  #include "Wire.h"
#endif

int16_t accelX, accelY, accelZ = 0;
int16_t gyroX, gyroY, gyroZ = 0;
double posX, posY, posZ = 0;
double rotX, rotY, rotZ = 0;
MPU6050 accelgyro;

double ax, ay, az, gx, gy, gz = 0;
unsigned long lastMillis, currentMillis, deltaTime = 0;
double dt = 0;

#ifdef ROS
  ros::NodeHandle nh;
  sensor_msgs::Imu imu_msg;
  ros::Publisher chatter("imu", &imu_msg);
#endif

void setup() {
  #if I2CDEV_IMPLEMENTATION == I2CDEV_ARDUINO_WIRE
    Wire.begin();
  #elif I2CDEV_IMPLEMENTATION == I2CDEV_BUILTIN_FASTWIRE
    Fastwire::setup(400, true);
  #endif

#ifdef ROS
  nh.initNode();
  nh.advertise(chatter);
#else
  Serial.begin(38400);
#endif

#ifdef ROS

#else
  Serial.println("Initializing I2C devices...");
#endif
  accelgyro.initialize();

#ifdef ROS

#else
  Serial.println("Testing device connections...");
  Serial.println(accelgyro.testConnection() ? "MPU6050 connection successful" : "MPU6050 connection failed");
#endif

accelgyro.setFullScaleAccelRange(MPU6050_ACCEL_FS_16);
accelgyro.setFullScaleGyroRange(MPU6050_GYRO_FS_2000);

#ifdef ROS

#else
  Serial.println("\taccelX\taccelY\taccelZ\tgyroX\tgyroY\tgyroZ");
#endif
}

void loop() {
  lastMillis = currentMillis;
  currentMillis = millis();
  if (lastMillis < currentMillis) {
    deltaTime = currentMillis - lastMillis;
  }
  else {
    deltaTime = (4294967295 - lastMillis) + currentMillis;
  }
  dt = deltaTime / 1000.0;
  
  accelgyro.getMotion6(&accelX, &accelY, &accelZ, &gyroX, &gyroY, &gyroZ);
  ax = accelX / 2048.0;
  ay = accelY / 2048.0;
  az = accelZ / 2048.0;
  gx = gyroX / 16.4;
  gy = gyroY / 16.4;
  gz = gyroZ / 16.4;

  posX += ax * dt;
  posY += ay * dt;
  posZ += az * dt;
  rotX += gx * dt;
  rotY += gy * dt;
  rotZ += gz * dt;
  
#ifdef ROS
  imu_msg.angular_velocity.x = gyroX;
  imu_msg.angular_velocity.y = gyroY;
  imu_msg.angular_velocity.z = gyroZ;
  imu_msg.linear_acceleration.x = accelX;
  imu_msg.linear_acceleration.y = accelY;
  imu_msg.linear_acceleration.z = accelZ;
  chatter.publish(imu_msg);
  nh.spinOnce();
#else
  Serial.print("a/g:\t");
    Serial.print(accelX); Serial.print("\t");
    Serial.print(accelY); Serial.print("\t");
    Serial.print(accelZ); Serial.print("\t");
    Serial.print(gyroX); Serial.print("\t");
    Serial.print(gyroY); Serial.print("\t");
    Serial.print(gyroZ); Serial.print("\t");
    Serial.print(posX); Serial.print("\t");
    Serial.print(posY); Serial.print("\t");
    Serial.print(posZ); Serial.print("\t");
    Serial.print(rotX); Serial.print("\t");
    Serial.print(rotY); Serial.print("\t");
    Serial.print(rotZ); Serial.print("\n");
#endif

}