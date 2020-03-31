// Uncomment this to use ROS output functionality instead.
//#define ROS

#include <I2Cdev.h>
#include <helper_3dmath.h>
#include <MPU6050.h>
#ifdef ROS
  #include <ros.h>
  // #define USE_USBCON
  #include <sensor_msgs/Imu.h>
#endif

#ifdef I2CDEV_IMPLEMENTATION == I2CDEV_ARDUINO_WIRE
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
  ros::Publisher chatter("arduino_imu", &imu_msg);
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
  Serial.begin(57600);
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
  Serial.println("\taccelX\taccelY\taccelZ\tgyroX\tgyroY\tgyroZ\tposX\tposY\tposZ\trotX\trotY\trotZ");
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
  chatter.publish(&imu_msg);
  nh.spinOnce();
#else

  char imuArr[1000];
  
  char accelXtemp[20];
  char accelYtemp[20];
  char accelZtemp[20];
  
  char gyroXtemp[20];
  char gyroYtemp[20];
  char gyroZtemp[20];
  
  char posXtemp[20];
  char posYtemp[20];
  char posZtemp[20];
  
  char rotXtemp[20];
  char rotYtemp[20];
  char rotZtemp[20];

  
  dtostrf(accelX, 4, 3, accelXtemp);
  dtostrf(accelY, 4, 3, accelYtemp);
  dtostrf(accelZ, 4, 3, accelZtemp);

  dtostrf(gyroX, 4, 3, gyroXtemp);
  dtostrf(gyroY, 4, 3, gyroYtemp);
  dtostrf(gyroZ, 4, 3, gyroZtemp);

  dtostrf(posX, 4, 3, posXtemp);
  dtostrf(posY, 4, 3, posYtemp);
  dtostrf(posZ, 4, 3, posZtemp);

  dtostrf(rotX, 4, 3, rotXtemp);
  dtostrf(rotY, 4, 3, rotYtemp);
  dtostrf(rotZ, 4, 3, rotZtemp);

  

  
  sprintf(imuArr, "%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;%s;", accelXtemp, accelYtemp, accelZtemp, gyroXtemp, gyroYtemp, gyroZtemp, posXtemp, posYtemp, posZtemp, rotXtemp, rotYtemp, rotZtemp);
  
  Serial.println(imuArr);
  

  
//  String accelX2 = String(accelX);
//  String accelY2 = String(accelY);
//  String accelZ2 = String(accelZ);
//  
//  String gyroX2 = String(gyroX);
//  String gyroY2 = String(gyroY);
//  String gyroZ2 = String(gyroZ);
//  
//  String posX2 = String(posX);
//  String posY2 = String(posY);
//  String posZ2 = String(posZ);
//  
//  String rotX2 = String(rotX);
//  String rotY2 = String(rotY);
//  String rotZ2 = String(rotZ);
//
//  String buffer = "";
//  buffer.concat(accelX2);
//  buffer.concat(";");
//  buffer.concat(accelY2);
//  buffer.concat(";");
//  buffer.concat(accelZ2);
//  buffer.concat(";");
//  buffer.concat(gyroX2);
//  buffer.concat(";");
//  buffer.concat(gyroY2);
//  buffer.concat(";");
//  buffer.concat(gyroZ2);
//  buffer.concat(";");
//  buffer.concat(posX2);
//  buffer.concat(";");
//  buffer.concat(posY2);
//  buffer.concat(";");
//  buffer.concat(posZ2);
//  buffer.concat(";");
//  buffer.concat(rotX2);
//  buffer.concat(";");
//  buffer.concat(rotY2);
//  buffer.concat(";");
//  buffer.concat(rotZ2);
//
//
//
//  
//  Serial.println(buffer);

//  Serial.print("a/g:\t");
//  Serial.print(accelX); Serial.print("\t");
//  Serial.print(accelY); Serial.print("\t");
//  Serial.print(accelZ); Serial.print("\t");
//  Serial.print(gyroX); Serial.print("\t");
//  Serial.print(gyroY); Serial.print("\t");
//  Serial.print(gyroZ); Serial.print("\t");
//  Serial.print(posX); Serial.print("\t");
//  Serial.print(posY); Serial.print("\t");
//  Serial.print(posZ); Serial.print("\t");
//  Serial.print(rotX); Serial.print("\t");
//  Serial.print(rotY); Serial.print("\t");
//  Serial.print(rotZ); Serial.print("\n");
#endif

}
