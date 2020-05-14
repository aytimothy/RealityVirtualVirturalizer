using MessageTypes = RosSharp.RosBridgeClient.MessageTypes;
using RosSharp.RosBridgeClient;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StringPublisher : UnityPublisher<MessageTypes.Std.String> {

    public string message;
    public float interval = 1f;
    float nextMessage;

    void Update() {
        if (Time.time > nextMessage) {
            nextMessage = Time.time + interval;
            Publish(new MessageTypes.Std.String(message));
        }
    }
}
