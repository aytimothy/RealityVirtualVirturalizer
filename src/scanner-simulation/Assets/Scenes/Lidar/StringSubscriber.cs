using MessageTypes = RosSharp.RosBridgeClient.MessageTypes;
using RosSharp.RosBridgeClient;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StringSubscriber : UnitySubscriber<MessageTypes.Std.String> {

    protected override void ReceiveMessage(MessageTypes.Std.String stringMsg) {
        Debug.Log(stringMsg.data);
    }
}
