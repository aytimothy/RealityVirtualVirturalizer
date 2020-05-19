using ROSFrame = RosSharp.RosBridgeClient.MessageTypes.WorldMapper.Frame;
using ROSTime = RosSharp.RosBridgeClient.MessageTypes.Std.Time;
using String = System.String;
using Time = UnityEngine.Time;
using Newtonsoft.Json;
using RosSharp.RosBridgeClient;
using RosSharp.RosBridgeClient.MessageTypes.WorldMapper;
using System;
using System.Collections.Generic;
using System.IO;
#if UNITY_EDITOR
using UnityEditor;
#endif
using UnityEngine;

[RequireComponent(typeof(Camera))]
[RequireComponent(typeof(RosConnector))]
public class Framewriter : UnityPublisher<ROSFrame>
{
    bool canBroadcastFrames;
    bool canWriteFrames;
    public Camera camera;

    [Header("Write Parameters")]
    public string framePath;
    public string frameFileName = "Frame";
    public string frameFileExtension = ".json";
    public string frameNumberFormat = "0000";
    public float frameInterval;
    [Tooltip("The range the lidar reads in.")]
    public Vector2 readingRange;
    [Tooltip("The angular distance between each reading.")]
    public float readingInterval;
    [Tooltip("The minimum reading.")]
    public float min_range;
    [Tooltip("The maximum reading.")]
    public float max_range;
    [Tooltip("This is what the intensity value represents.")]
    public IntensityMetric intensityMetric;
    [Tooltip("Displays lines that represents rays")]
    public bool showRays;

    [Header("Internal Values")]
    float nextFrameTime;
    float lastFrameTime;
    public uint seq;

    [Header("Frame Calculation Variables")]
    public Vector3 lastPosition;
    public Vector3 lastRotation;
    public RosConnector rosConnector;


    protected override void Start()
    {
        if (rosConnector == null)
            rosConnector = GetComponent<RosConnector>();
        if (rosConnector != null)
            canBroadcastFrames = true;
        if (!String.IsNullOrEmpty(framePath))
        {
            canWriteFrames = true;
            if (!Directory.Exists(framePath))
                Directory.CreateDirectory(framePath);
            if (!framePath.EndsWith("\\") && !framePath.EndsWith("/"))
                framePath += "/";
                // framePath += "\\"; <-- Caused problems on Linux
        }
    }

    void Update()
    {
        if (Time.time > nextFrameTime)
        {
            nextFrameTime = Time.time + frameInterval;
            Frame frame = MakeFrame();
            if (canBroadcastFrames)
                BroadcastFrame(frame);
            if (canWriteFrames)
                WriteFrame(frame, framePath + frameFileName + seq.ToString(frameNumberFormat) + frameFileExtension); // Had to insert this manually
        }
    }

    bool errorAlreadyShown = false;

    public Frame MakeFrame()
    {
        Frame result = new Frame();
        float deltaFrameTime = Time.time - lastFrameTime;
        lastFrameTime = Time.time;
        seq++;

        Vector3 thisPosition = transform.position;
        Vector3 thisRotation = transform.eulerAngles;

        result.posX = thisPosition.x;
        result.posY = thisPosition.y;
        result.posZ = thisPosition.z;
        result.rotX = thisRotation.x;
        result.rotY = thisRotation.y;
        result.rotZ = thisRotation.z;
        result.accX = thisPosition.x - lastPosition.x;
        result.accY = thisPosition.y - lastPosition.y;
        result.accZ = thisPosition.z - lastPosition.z;
        result.gyrX = thisRotation.x - lastRotation.x;
        result.gyrY = thisRotation.y - lastRotation.y;
        result.gyrZ = thisRotation.z - lastRotation.z;
        result.angle_increment = readingInterval;
        result.angle_min = Mathf.Min(readingRange.x, readingRange.y) * Mathf.Deg2Rad;
        result.angle_max = Mathf.Max(readingRange.x, readingRange.y) * Mathf.Deg2Rad;
        result.range_min = min_range;
        result.range_max = max_range;
        RangeResult rangeResult = GenerateRanges();
        result.ranges = (rangeResult == null) ? new float[0] : rangeResult.ranges;
        result.intensities = (rangeResult == null) ? new float[0] : rangeResult.intensities;
        result.seq = seq;
        result.timestamp = Time.time;
        result.img = GenerateImage();
        result.imgfmt = (result.img == null) ? "none" : "png";
        result.frameid = "unity";

        return result;

        RangeResult GenerateRanges()
        {
            if (readingInterval <= 0.0001f)
            {
                if (!errorAlreadyShown)
                {
                    errorAlreadyShown = true;
                    Debug.LogError("Cannot record with a reading interval of less than 0.0001 degrees as this will take forever to compute.");
                }

                return null;
            }

            List<Vector3> baseVectors = new List<Vector3>();
            for (float deg = Mathf.Min(readingRange.x, readingRange.y); deg <= Mathf.Max(readingRange.x, readingRange.y); deg += readingInterval)
            {
                baseVectors.Add(new Vector3(Mathf.Cos(Mathf.Deg2Rad * deg), 0f, Mathf.Sin(Mathf.Deg2Rad * deg)));
            }

            List<Vector3> rotatedVectors = new List<Vector3>();
            foreach (Vector3 baseVector in baseVectors)
            {
                float alpha = thisRotation.x * Mathf.Deg2Rad;
                float beta = thisRotation.y * Mathf.Deg2Rad;
                float gamma = thisRotation.z * Mathf.Deg2Rad;

                float cosa = Mathf.Cos(alpha);
                float sina = Mathf.Sin(alpha);
                float cosb = Mathf.Cos(beta);
                float sinb = Mathf.Sin(beta);
                float cosc = Mathf.Cos(gamma);
                float sinc = Mathf.Sin(gamma);

                float axx = cosa * cosb;
                float axy = (cosa * sinb * sinc) - (sina * cosc);
                float axz = (cosa * sinb * cosc) + (sina * sinc);
                float ayx = sina * cosb;
                float ayy = (sina * sinb * sinc) + (cosa * cosc);
                float ayz = (sina * sinb * cosc) - (cosa * sinc);
                float azx = -sinb;
                float azy = cosb * sinc;
                float azz = cosb * cosc;

                float mx = (baseVector.x * axx) + (baseVector.y * axy) + (baseVector.z * axz);
                float my = (baseVector.x * ayx) + (baseVector.y * ayy) + (baseVector.z * ayz);
                float mz = (baseVector.x * azx) + (baseVector.y * azy) + (baseVector.z * azz);
                rotatedVectors.Add(new Vector3(mx, my, mz));
            }

            List<float> rangeReadings = new List<float>();
            List<float> intensityReadings = new List<float>();
            foreach (Vector3 direction in rotatedVectors)
            {
                Ray ray = new Ray(transform.position, direction);
                RaycastHit[] hits = Physics.RaycastAll(ray, max_range);
                float distance = max_range;
                float intensity = 0f;
                RaycastHit closestHit = new RaycastHit();
                float minDistance = float.MaxValue;
                foreach (RaycastHit hit in hits)
                {
                    if (minDistance > hit.distance)
                    {
                        minDistance = hit.distance;
                        closestHit = hit;
                    }
                    if (showRays)
                        Debug.DrawLine(transform.position, hit.point, Color.green);

                    if (hit.distance < min_range)
                        continue;
                    distance = hit.distance;
                    switch (intensityMetric)
                    {
                        case IntensityMetric.None:
                            intensity = 0f;
                            break;
                        case IntensityMetric.Success:
                            intensity = 1f;
                            break;
                        case IntensityMetric.Noise:
                            intensity = 1f - (distance / max_range);
                            break;
                    }
                    break;
                }
                rangeReadings.Add(distance);
                intensityReadings.Add(intensity);
            }

            return new RangeResult()
            {
                intensities = intensityReadings.ToArray(),
                ranges = rangeReadings.ToArray()
            };
        }

        byte[] GenerateImage()
        {
            if (camera == null)
                camera = GetComponent<Camera>();
            if (camera == null)
                return null;
            byte[] ba = new byte[0];

            if (camera.targetTexture == null)
                camera.targetTexture = new RenderTexture(Screen.width, Screen.height, 24);
            RenderTexture active = RenderTexture.active;
            RenderTexture.active = camera.targetTexture;
            camera.Render();
            Texture2D texture = new Texture2D(camera.targetTexture.width, camera.targetTexture.height, TextureFormat.RGB24, false);
            texture.ReadPixels(new Rect(0, 0, camera.targetTexture.width, camera.targetTexture.height), 0, 0);
            texture.Apply();
            RenderTexture.active = active;
            ba = texture.EncodeToPNG();
            Destroy(texture);
            return ba;
        }
    }

    public void BroadcastFrame()
    {
        BroadcastFrame(MakeFrame(), Topic);
    }

    public void BroadcastFrame(Frame frame, string channel = null)
    {
        if (channel != Topic)
        {
            string newPublicationId = rosConnector.RosSocket.Advertise<ROSFrame>(Topic);
            rosConnector.RosSocket.Publish(newPublicationId, frame.ToROSFrame());
            rosConnector.RosSocket.Unadvertise(newPublicationId);
        }
        if (channel == Topic)
        {
            Publish(frame.ToROSFrame());
        }
    }

    public void WriteFrame()
    {
        WriteFrame(MakeFrame(), framePath + frameFileName + seq.ToString(frameNumberFormat) + frameFileExtension);
    }

    public void WriteFrame(Frame frame, string filePath = null)
    {
        string frameJson = JsonConvert.SerializeObject(frame);
        if (File.Exists(filePath))
            File.Delete(filePath);
        File.WriteAllText(filePath, frameJson);
    }
}

public static class FrameExtensions
{
    public static ROSFrame ToROSFrame(this Frame src)
    {
        ROSFrame dest = new ROSFrame();
        dest.accX = src.accX;
        dest.accY = src.accY;
        dest.accZ = src.accZ;
        dest.angle_increment = src.angle_increment;
        dest.angle_min = src.angle_min;
        dest.angle_max = src.angle_max;
        dest.frameid = src.frameid;
        dest.gyrX = src.gyrX;
        dest.gyrY = src.gyrY;
        dest.gyrZ = src.gyrZ;
        dest.img = src.img;
        dest.imgfmt = src.imgfmt;
        dest.intensities = src.intensities;
        dest.posX = src.posX;
        dest.posY = src.posY;
        dest.posZ = src.posZ;
        dest.rotX = src.rotX;
        dest.rotY = src.rotY;
        dest.rotZ = src.rotZ;
        dest.seq = src.seq;
        dest.ranges = src.ranges;
        dest.range_min = src.range_min;
        dest.range_max = src.range_max;
        dest.timestamp = new ROSTime((uint)Mathf.FloorToInt(src.timestamp), (uint)Mathf.RoundToInt((src.timestamp - Mathf.Floor(src.timestamp)) * 1000));
        return dest;
    }

    public static Frame ToUnityFrame(this ROSFrame src)
    {
        Frame dest = new Frame();
        dest.accX = src.accX;
        dest.accY = src.accY;
        dest.accZ = src.accZ;
        dest.angle_increment = src.angle_increment;
        dest.angle_min = src.angle_min;
        dest.angle_max = src.angle_max;
        dest.frameid = src.frameid;
        dest.gyrX = src.gyrX;
        dest.gyrY = src.gyrY;
        dest.gyrZ = src.gyrZ;
        dest.img = src.img;
        dest.imgfmt = src.imgfmt;
        dest.intensities = src.intensities;
        dest.posX = src.posX;
        dest.posY = src.posY;
        dest.posZ = src.posZ;
        dest.rotX = src.rotX;
        dest.rotY = src.rotY;
        dest.rotZ = src.rotZ;
        dest.seq = src.seq;
        dest.ranges = src.ranges;
        dest.range_min = src.range_min;
        dest.range_max = src.range_max;
        dest.timestamp = (float)src.timestamp.secs + (src.timestamp.nsecs / 1000f);
        return dest;
    }
}

public enum IntensityMetric
{
    None,
    Success,
    Noise
}

public class RangeResult
{
    public float[] ranges;
    public float[] intensities;
}

#if UNITY_EDITOR
[CustomEditor(typeof(Framewriter))]
public class FramewriterEditor : Editor {
    public override void OnInspectorGUI() {
        base.OnInspectorGUI();
        Framewriter writer = (Framewriter) target;

        if (GUILayout.Button("Write Frame")) {
            string filePath = EditorUtility.SaveFilePanel("Save Frame...", "%userprofile%", "Frame", "json");
            if (!String.IsNullOrEmpty(filePath)) {
                Frame frame = writer.MakeFrame();
                writer.WriteFrame(frame, filePath);
            }
        }
    }
}
#endif
