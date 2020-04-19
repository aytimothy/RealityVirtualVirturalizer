using System;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms.VisualStyles;
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
public class Point3 {
    public float x;
    public float y;
    public float z;

    public Point3(Vector3 point) {
        x = point.x;
        y = point.y;
        z = point.z;
    }

    public Point3(float x, float y, float z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

[Serializable]
public class FrameData {
    public string FilePath;
    public Frame Data;
    public List<Point3> Points;

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
    public float[] ranges;
    public float[] intensities;
    public byte[] img;
    public string imgfmt;

    public Vector3[] ToVector3() {
        return ToVector3(this);
    }

    public static Vector3[] ToVector3(Frame frame) {
        // error checking, because 1 + 0 forever is never going to leave 1.
        List<Vector3> baseVectors = new List<Vector3>();
        if (frame.angle_increment >= 0.1f)
            frame.angle_increment = (frame.angle_max - frame.angle_min) / (frame.ranges.Length - 1);
        if (frame.angle_increment == 0) {
            Debug.LogError("Cannot have an angle increment of 0, because then we'll get nowhere!\nThere are " + frame.ranges.Length.ToString() + " readings.");
            throw new ArgumentOutOfRangeException();
        }

        
        // calculate the rays normalized (basically as if flat)
        for (float angle = frame.angle_min; angle < frame.angle_max; angle += frame.angle_increment) {
            baseVectors.Add(new Vector3(Mathf.Cos(angle * Mathf.Deg2Rad), 0f, Mathf.Sin(angle * Mathf.Deg2Rad)));
        }
        // now rotate every single normalized ray by the direction
        List<Vector3> results = new List<Vector3>();
        for (int i = 0; i < baseVectors.Count; i++) {
            Vector3 baseVector = baseVectors[i];

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
            float axy = cosa*sinb*sinc - sina*cosc;
            float axz = cosa*sinb*cosc + sina*sinc;
            float ayx = sina*cosb;
            float ayy = sina*sinb*sinc + cosa*cosc;
            float ayz = sina*sinb*cosc - cosa*sinc;
            float azx = -sinb;
            float azy = cosb*sinc;
            float azz = cosb*cosc;

            // since we know the direction of the ray is travelling, now is to apply the distance the ray travelled, which is 'range'.
            results.Add((new Vector3(baseVector.x * (axx + axy + axz), baseVector.y * (ayx + ayy + ayz), baseVector.z * (azx + azy + azz)) * frame.ranges[i]) + new Vector3(frame.posX, frame.posY, frame.posZ));
        }

        return results.ToArray();
    }
}