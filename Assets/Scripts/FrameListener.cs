using ROSFrame = RosSharp.RosBridgeClient.MessageTypes.WorldMapper.Frame;
using Newtonsoft.Json;
using RosSharp.RosBridgeClient;
using System;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

public class FrameListener : UnitySubscriber<ROSFrame> {
    public FrameManager frameManager;
    public string StorePath = "ROSFrames";
    public string FileName = "Frame";
    public string FileExtension = ".json";

    public int Count {
        get { return frameManager.Frames.Count; }
    }

    protected override void ReceiveMessage(ROSFrame message) {
        Frame frame = new Frame(message);
        string frameJson = JsonConvert.SerializeObject(frame);
        string fileName = ProjectScene.CurrentProjectPath + "/" + StorePath + "/" + FileName + (Count + 1).ToString("0000") + FileExtension;
        File.WriteAllText(fileName, frameJson);
        frameManager.Frames.Add(new FrameData(fileName, frame));
    }
}