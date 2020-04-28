using RosSharp.RosBridgeClient;
using System;
using System.Collections.Generic;
using System.Threading;
using UnityEngine;

public class StoppableRosConnector : RosConnector {
    public Thread rosThread;
    public bool running {
        get { return enabled; }
        set { enabled = value; }
    }

    public virtual void OnEnable() {
        IsConnected = new ManualResetEvent(false);
        ConnectAndWait();
    }

    public virtual void OnDisable() {
        if (RosSocket != null)
            RosSocket.Close();
    }

    protected override void ConnectAndWait() {
        RosSocket = ConnectToRos(protocol, RosBridgeServerUrl, OnConnected, OnClosed, Serializer);

        if (!IsConnected.WaitOne(SecondsTimeout * 1000)) {
            Debug.LogWarning("Failed to connect to RosBridge at: " + RosBridgeServerUrl, gameObject);
            RosSocket = null;
            enabled = false;
        }
    }
}
