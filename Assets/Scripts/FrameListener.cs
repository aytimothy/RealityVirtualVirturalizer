using ROSFrame = RosSharp.RosBridgeClient.MessageTypes.WorldMapper.Frame;
using Newtonsoft.Json;
using RosSharp.RosBridgeClient;
using System;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

public class FrameListener : UnitySubscriber<ROSFrame>
{
    public RosConnector Connector;
    public FrameManager Manager;
    public string StorePath = "ROSFrames";
    public string FileName = "Frame";
    public string FileExtension = ".json";

    public int Count
    {
        get { return Manager.Frames.Count; }
    }
    public string LastServerURL
    {
        get { return PlayerPrefs.GetString("LastROSServerAddress", "ws://127.0.0.1:9090"); }
        set { PlayerPrefs.SetString("LastROSServerAddress", value); }
    }
    public string LastROSTopic
    {
        get { return PlayerPrefs.GetString("LastROSTopic", "output"); }
        set { PlayerPrefs.SetString("LastROSTopic", value); }
    }

    void Awake()
    {
        Connector.RosBridgeServerUrl = LastServerURL;
        Topic = LastROSTopic;
    }

    protected override void ReceiveMessage(ROSFrame message)
    {
        Frame frame = new Frame(message);
        string frameJson = JsonConvert.SerializeObject(frame);
        string fileName = ProjectScene.CurrentProjectPath + "/" + StorePath + "/" + FileName + (Count + 1).ToString("0000") + FileExtension;
        File.WriteAllText(fileName, frameJson);
        Manager.Frames.Add(new FrameData(fileName, frame));
    }
}