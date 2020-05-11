using ROSFrame = RosSharp.RosBridgeClient.MessageTypes.WorldMapper.Frame;
using Newtonsoft.Json;
using RosSharp.RosBridgeClient;
using System;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

public class FrameListener : UnitySubscriber<ROSFrame> {
    public RosConnector Connector;
    public FrameManager Manager;
    public string StorePath = "ROSFrames";
    public string FileName = "Frame";
    public string FileExtension = ".json";
    public bool isConnectorRunning = false;

    public int Count {
        get { return Manager.Frames.Count; }
    }

    void Update() {
        if (Connector.enabled != isConnectorRunning) {
            isConnectorRunning = Connector.enabled;
            if (Connector.enabled) {
                Subscribe(Connector);
            }
        }
    }

    protected override void ReceiveMessage(ROSFrame message) {
        Debug.Log("I received a frame!");
        Frame frame = new Frame(message);
        string frameJson = JsonConvert.SerializeObject(frame);
        if (!Directory.Exists(ProjectScene.CurrentProjectPath + "/" + StorePath + "/"))
            Directory.CreateDirectory(ProjectScene.CurrentProjectPath + "/" + StorePath + "/");
        string fileName = ProjectScene.CurrentProjectPath + "/" + StorePath + "/" + FileName + (Count + 1).ToString("0000") + FileExtension;
        File.WriteAllText(fileName, frameJson);
        Manager.Frames.Add(new FrameData(fileName, frame));
    }
}