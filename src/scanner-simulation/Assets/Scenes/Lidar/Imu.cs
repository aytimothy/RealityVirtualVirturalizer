using MessageTypes = RosSharp.RosBridgeClient.MessageTypes;
using System.Collections;
using System.Collections.Generic;
using RosSharp.RosBridgeClient;
using RosSharp.RosBridgeClient.MessageTypes.Std;
using UnityEngine;
using Vector3 = UnityEngine.Vector3;
using Quaternion = RosSharp.RosBridgeClient.MessageTypes.Geometry.Quaternion;
using Time = UnityEngine.Time;

/// <summary>
/// Our reports velocity for some reason.
/// </summary>
public class Imu : UnityPublisher<MessageTypes.Sensor.Imu> {
    public MessageTypes.Sensor.Imu imu_msg;
    public Vector3 lastPosition;
    public Vector3 lastRotation;
    public int maxIntensity;
    public float maxAngularVelocity;
    public float maxLinearVelocity;
    public uint seq;

    void Update() {
        imu_msg = new MessageTypes.Sensor.Imu();
        Vector3 currentPosition = transform.position / Time.deltaTime;
        Vector3 currentRotation = transform.eulerAngles / Time.deltaTime;
        imu_msg.orientation = new Quaternion(transform.rotation.x, transform.rotation.y, transform.rotation.z, transform.rotation.w);
        Vector3 deltaRotation = (currentRotation - currentPosition) / Time.deltaTime;
        Vector3 deltaPosition = (currentPosition - currentRotation) / Time.deltaTime;
        imu_msg.angular_velocity = new MessageTypes.Geometry.Vector3(Mathf.Clamp((deltaRotation.x / maxAngularVelocity), -1, 1) * maxIntensity, Mathf.Clamp((deltaRotation.y / maxAngularVelocity), -1, 1) * maxIntensity, Mathf.Clamp((deltaRotation.z / maxAngularVelocity), -1, 1) * maxIntensity);
        imu_msg.linear_acceleration = new MessageTypes.Geometry.Vector3(Mathf.Clamp((deltaPosition.x / maxLinearVelocity), -1, 1) * maxIntensity, Mathf.Clamp((deltaPosition.y / maxLinearVelocity), -1, 1) * maxIntensity, Mathf.Clamp((deltaPosition.z / maxLinearVelocity), -1, 1) * maxIntensity);
        // imu_msg.angular_velocity = new MessageTypes.Geometry.Vector3(deltaRotation.x, deltaRotation.y, deltaRotation.z);
        // imu_msg.linear_acceleration = new MessageTypes.Geometry.Vector3(deltaPosition.x, deltaPosition.y, deltaPosition.z);
        float time = Time.time;
        int secs = Mathf.FloorToInt(time);
        int nsecs = Mathf.FloorToInt((time - secs) * 1000);
        imu_msg.header = new Header(seq, new MessageTypes.Std.Time((uint)secs, (uint)nsecs), "imu");
        Publish(imu_msg);
        lastPosition = currentPosition;
        lastRotation = currentRotation;
        seq++;
    }
}