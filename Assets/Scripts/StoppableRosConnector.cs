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

    public override void Awake() {
        // Do nada.
    }

    public virtual void OnEnable() {
        base.Awake();
    }

    public virtual void OnDisable() {
        if (RosSocket != null)
            RosSocket.Close();
    }

    protected override void ConnectAndWait() {
        RosSocket = ConnectToRos(protocol, RosBridgeServerUrl, OnConnected, OnClosed, Serializer);

        bool connected = IsConnected.WaitOne(SecondsTimeout * 1000);
        if (!connected) {
            Debug.LogWarning("Failed to connect to RosBridge at: " + RosBridgeServerUrl, gameObject);
            RosSocket = null;
            enabled = false;
        }
    }
}
