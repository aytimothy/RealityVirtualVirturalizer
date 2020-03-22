# Timestamp
uint32 seq					# The sequential frame number. Always in order.
time timestamp				# Timestamp in actual unix time. It's 64-bit so we should be fine for another trillion or so years.
string frameid				# A string tag for this frame.
# Arduino Data
float32 posX				# Position of sensor (x-axis), worked locally from accelorometer deltas.
float32 posY				# Position of sensor (y-axis), worked locally from accelorometer deltas.
float32 posZ				# Position of sensor (z-axis), worked locally from accelorometer deltas.
float32 rotX				# Current gyroscope rotation (x-axis) at the current frame.
float32 rotY				# Current gyroscope rotation (y-axis) at the current frame.
float32 rotZ				# Current gyroscope rotation (z-axis) at the current frame.
float32 accX				# Accelorometer Delta (x-axis) at the current frame.
float32 accY				# Accelorometer Delta (y-axis) at the current frame.
float32 accZ				# Accelorometer Delta (z-axis) at the current frame.
float32 gyrX				# Gyroscope Delta (x-axis) at the current frame.
float32 gyrY				# Gyroscope Delta (y-axis) at the current frame.
float32 gyrZ				# Gyroscope Delta (Z-axis) at the current frame.
# Laser Data (sensor_msgs/LaserScan)
float32 angle_min			# Minimum angle from lidar's local origin (0 degrees).
float32 angle_max			# Maximum angle from lidar's local origin (0 degrees).
float32 angle_increment		# The angle step for each laser scan.
float32 range_min			# The minimum range the lidar can detect.
float32 range_max			# The maximum range the lidar can detect.
float32[] ranges			# An array of all the distance data collected in the current frame.
float32[] intensities		# An array of all the response intensity data collected in the current frame.
# Image Data (sensor_msgs/Image)
uint32 width                # Width of the image.
uint32 height               # Height of the image.
uint32 depth                # The color depth of the image (this is usually 3, for RGB).
uint32 rowSize              # Size of a row of data
uint8[] image                # Image data. This should be height*width*depth in size.