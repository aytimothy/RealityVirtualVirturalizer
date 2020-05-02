using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using RosSharp.RosBridgeClient.MessageTypes.WorldMapper;
using UnityEngine;
using UnityEngine.TestTools;

public class FrameManager : MonoBehaviour {
    public List<FrameData> Frames = new List<FrameData>();

    public void LoadAllFrames() {
        foreach (FrameData frameData in Frames) {
            if (!frameData.Loaded)
                frameData.LoadFrame();
        }
    }
}

[Serializable]
public class FrameData {
    public string FilePath;
    public Frame Data;

    public bool Loaded {
        get { return loaded; }
        private set { loaded = value; }
    }
    [SerializeField]
    bool loaded;

    public FrameData(string FilePath, bool Load = false) {
        this.FilePath = FilePath;
        loaded = false;
        if (Load)
            LoadFrame();
    }

    public FrameData(string FilePath, Frame Data) {
        this.FilePath = FilePath;
        this.Data = Data;
        loaded = true;
    }

    public Frame LoadFrame() {
        string fullFilePath = Path.GetFullPath(ProjectScene.CurrentProjectPath + FilePath);
        string frameString = File.ReadAllText(fullFilePath);
        Data = JsonConvert.DeserializeObject<Frame>(frameString);
        loaded = true;
        return Data;
    }

    public static Frame LoadFrame(string filePath) {
        return JsonConvert.DeserializeObject<Frame>(File.ReadAllText(filePath));
    }

    public static Frame LoadFrame(RosSharp.RosBridgeClient.MessageTypes.WorldMapper.Frame message) {
        Frame frame = new Frame();
        frame.seq = message.seq;
        frame.timestamp = (float) message.timestamp.secs + (((float)message.timestamp.nsecs) / 1000f);
        frame.frameid = message.frameid;
        frame.accX = message.accX;
        frame.accY = message.accY;
        frame.accZ = message.accZ;
        frame.posX = message.posX;
        frame.posY = message.posY;
        frame.posZ = message.posZ;
        frame.rotX = message.rotX;
        frame.rotY = message.rotY;
        frame.rotZ = message.rotZ;
        frame.gyrX = message.gyrX;
        frame.gyrY = message.gyrY;
        frame.gyrZ = message.gyrZ;
        frame.angle_min = message.angle_min;
        frame.angle_max = message.angle_max;
        frame.angle_increment = message.angle_increment;
        frame.range_min = message.range_min;
        frame.range_max = message.range_max;
        frame.ranges = message.ranges;
        frame.intensities = message.intensities;
        frame.img = message.img;
        frame.imgfmt = message.imgfmt;
        return frame;
    } 
}

[Serializable]
public class Frame {
    public uint seq;
    public float timestamp;
    public string frameid;
    public float posX;
    public float posY;
    public float posZ;
    public float rotX;
    public float rotY;
    public float rotZ;
    public float accX;
    public float accY;
    public float accZ;
    public float gyrX;
    public float gyrY;
    public float gyrZ;
    public float angle_min;
    public float angle_max;
    public float angle_increment;
    public float range_min;
    public float range_max;
    public float[] ranges = new float[] { };
    public float[] intensities = new float[] { };
    public byte[] img = new byte[] { };
    public string imgfmt;

    public Frame() { }

    public Frame(RosSharp.RosBridgeClient.MessageTypes.WorldMapper.Frame frame) {
        seq = frame.seq;
        timestamp = (float) frame.timestamp.secs + ((float)frame.timestamp.nsecs / 1000f);
        frameid = frame.frameid;
        posX = frame.posX;
        posY = frame.posY;
        posZ = frame.posZ;
        rotX = frame.rotX;
        rotY = frame.rotY;
        rotZ = frame.rotZ;
        accX = frame.accX;
        accY = frame.accY;
        accZ = frame.accZ;
        gyrX = frame.gyrX;
        gyrY = frame.gyrY;
        gyrZ = frame.gyrZ;
        angle_min = frame.angle_min;
        angle_max = frame.angle_max;
        angle_increment = frame.angle_increment;
        range_min = frame.range_min;
        range_max = frame.range_max;
        ranges = frame.ranges;
        intensities = frame.intensities;
        img = frame.img;
        imgfmt = frame.imgfmt;
    }

    public Vector3[] ToVector3() {
        return ToVector3(this);
    }

    public static Vector3[] ToVector3(Frame frame, bool removeOutliers = false, float outlierThreshold = 0.9f) {
        if (frame == null)
            return new Vector3[] { };
        List<Vector3> baseVectors = new List<Vector3>();
        if (frame.angle_increment >= 0.1f)
            frame.angle_increment = (frame.angle_max - frame.angle_min) / (frame.ranges.Length - 1);
        if (frame.angle_increment == 0) {
            Debug.LogError("Cannot have an angle increment of 0, because then we'll get nowhere!\nThere are " + frame.ranges.Length.ToString() + " readings.");
            throw new ArgumentOutOfRangeException();
        }

        int reps = 500;
        for (float angle = frame.angle_min; angle < frame.angle_max; angle += frame.angle_increment) {
            baseVectors.Add(new Vector3(Mathf.Cos(angle * Mathf.Deg2Rad), 0f, Mathf.Sin(angle * Mathf.Deg2Rad)));
            reps--;
            if (reps < 0) {
                Debug.LogError("There's too many vectors to add!");
                Debug.LogError("frame.ranges.Length = " + frame.ranges.Length.ToString() + "\nframe.angle_increment = " + frame.angle_increment.ToString() + "\nframe.angle_min = " + frame.angle_min.ToString() + "\nframe.angle_max = " + frame.angle_max.ToString());
                break;
            }
        }
        List<Vector3> results = new List<Vector3>();
        for (int i = 0; i < baseVectors.Count; i++) {
            Vector3 baseVector = baseVectors[i];
            if (frame.ranges[i] >= frame.angle_max * outlierThreshold && removeOutliers)
                continue;

            float alpha = frame.rotX * Mathf.Deg2Rad;
            float beta = frame.rotY * Mathf.Deg2Rad;
            float gamma = frame.rotZ * Mathf.Deg2Rad;

            float cosa = Mathf.Cos(alpha);
            float sina = Mathf.Sin(alpha);
            float cosb = Mathf.Cos(beta);
            float sinb = Mathf.Sin(beta);
            float cosc = Mathf.Cos(gamma);
            float sinc = Mathf.Sin(gamma);

            float axx = cosa*cosb;
            float axy = (cosa*sinb*sinc) - (sina*cosc);
            float axz = (cosa*sinb*cosc) + (sina*sinc);
            float ayx = sina*cosb;
            float ayy = (sina*sinb*sinc) + (cosa*cosc);
            float ayz = (sina*sinb*cosc) - (cosa*sinc);
            float azx = -sinb;
            float azy = cosb*sinc;
            float azz = cosb*cosc;

            float mx = (baseVector.x * axx) + (baseVector.y * axy) + (baseVector.z * axz);
            float my = (baseVector.x * ayx) + (baseVector.y * ayy) + (baseVector.z * ayz);
            float mz = (baseVector.x * azx) + (baseVector.y * azy) + (baseVector.z * azz);
            results.Add((new Vector3(mx, my, mz) * frame.ranges[i]) + new Vector3(frame.posX, frame.posY, frame.posZ));
        }

        return results.ToArray();
    }
}