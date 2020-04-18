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
        Loaded = false;
        if (Load)
            LoadFrame();
    }

    public FrameData(string FilePath, Frame Data) {
        this.FilePath = FilePath;
        this.Data = Data;
        Loaded = true;
    }

    public Frame LoadFrame() {
        string fullFilePath = Path.GetFullPath(ProjectScene.CurrentProjectPath + FilePath);
        string frameString = File.ReadAllText(fullFilePath);
        Data = JsonConvert.DeserializeObject<Frame>(frameString);
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
}