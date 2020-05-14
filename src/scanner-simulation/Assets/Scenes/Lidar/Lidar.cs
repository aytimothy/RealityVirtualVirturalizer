using MessageTypes = RosSharp.RosBridgeClient.MessageTypes;
using System.Collections;
using System.Collections.Generic;
using RosSharp.RosBridgeClient;
using RosSharp.RosBridgeClient.MessageTypes.Sensor;
using RosSharp.RosBridgeClient.MessageTypes.Std;
using UnityEngine;
using Time = UnityEngine.Time;

public class Lidar : UnityPublisher<MessageTypes.Sensor.LaserScan> {
    Vector3 lastRotation;
    public List<GameObject> directions = new List<GameObject>();
    public List<Ray> rays = new List<Ray>();
    public float maxDistance;
    public float minDistance;
    public Vector2 readingRange;
    Vector2 _readingRange;
    public float readingInterval;
    float _readingInterval;
    public uint seq = 0;

    public MessageTypes.Sensor.LaserScan laser_msg;
    public bool drawLines;

    void Update() {
        laser_msg = new LaserScan();
        laser_msg.angle_increment = readingInterval;
        laser_msg.angle_min = Mathf.Min(readingRange.x, readingRange.y);
        laser_msg.angle_max = Mathf.Max(readingRange.x, readingRange.y);
        laser_msg.range_min = minDistance;
        laser_msg.range_max = maxDistance;
        laser_msg.scan_time = Time.deltaTime;
        laser_msg.time_increment = 0f;

        if (_readingRange != readingRange || _readingInterval != readingInterval || directions.Count == 0) {
            foreach (GameObject direction in directions)
                Destroy(direction);
            directions.Clear();
            _readingRange = readingRange;
            _readingInterval = readingInterval;
            int rayNumber = 0;
            float angle = readingRange.x;
            while (angle <= readingRange.y && angle <= 360f) {
                rayNumber++;
                GameObject newDirection = new GameObject("Ray #" + rayNumber.ToString());
                newDirection.transform.parent = transform;
                newDirection.transform.localPosition = new Vector3(Mathf.Cos(Mathf.Deg2Rad * angle), 0f, Mathf.Sin(Mathf.Deg2Rad * angle));
                directions.Add(newDirection);
                angle += readingInterval;
            }
        }
        rays.Clear();
        if (lastRotation != transform.eulerAngles || rays.Count == 0) {
            foreach (GameObject direction in directions) {
                Ray ray = new Ray(transform.position, direction.transform.position - transform.position);
                rays.Add(ray);
            }

            lastRotation = transform.eulerAngles;
        }
        List<float> ranges = new List<float>();
        List<float> intensities = new List<float>();
        foreach (Ray ray in rays) {
            RaycastHit[] hits = Physics.RaycastAll(ray, maxDistance);
            if (hits.Length == 0) {
                ranges.Add(maxDistance);
                intensities.Add(0f);
                if (drawLines)
                    Debug.DrawLine(transform.position, transform.position + ray.direction, Color.red);
                continue;
            }

            float minDistance = float.MaxValue;
            RaycastHit closestHit = new RaycastHit();
            foreach (RaycastHit hit in hits)
                if (minDistance > hit.distance) {
                    minDistance = hit.distance;
                    closestHit = hit;
                }
            if (drawLines)
                Debug.DrawLine(transform.position, closestHit.point, Color.green);

            ranges.Add(minDistance);
            intensities.Add(1f);
        }

        laser_msg.ranges = ranges.ToArray();
        laser_msg.intensities = intensities.ToArray();
        float time = Time.time;
        int secs = Mathf.FloorToInt(time);
        int nsecs = Mathf.FloorToInt((time - secs) * 1000);
        laser_msg.header = new Header(seq, new MessageTypes.Std.Time((uint)secs, (uint)nsecs), "laser");

        seq++;
        Publish(laser_msg);
    }
}
