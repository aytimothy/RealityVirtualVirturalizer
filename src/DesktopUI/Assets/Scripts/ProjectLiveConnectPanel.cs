using System;
using System.Collections;
using System.Collections.Generic;
using RosSharp.RosBridgeClient;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class ProjectLiveConnectPanel : MonoBehaviour {
    [Header("UI Elements")]
    public Button StartStopButton;
    public TMP_Text StartStopButtonLabel;
    public TMP_InputField ServerInputField;
    public TMP_Dropdown CommunicationMethodDropdown;
    public TMP_InputField ROSTopicInputField;

    [Header("References")]
    public FrameListener Listener;
    public StoppableRosConnector Connector;

    public string LastServerURL {
        get { return PlayerPrefs.GetString("LastROSServerAddress", "ws://127.0.0.1:9090"); }
        set { PlayerPrefs.SetString("LastROSServerAddress", value); }
    }
    public string LastROSTopic {
        get { return PlayerPrefs.GetString("LastROSTopic", "output"); }
        set { PlayerPrefs.SetString("LastROSTopic", value); }
    }
    bool isReadingFromPrefs = false;

    void OnEnable() {
        isReadingFromPrefs = true;
        ROSTopicInputField.text = LastROSTopic;
        ServerInputField.text = LastServerURL;
        isReadingFromPrefs = false;
    }

    void Update() {
        StartStopButtonLabel.text = (Connector.enabled) ? "Disconnect" : "Connect";
    }

    public void StartStopButton_OnClick() {
        if (!Connector.enabled) {
            Connector.RosBridgeServerUrl = LastServerURL;
            Listener.Topic = "/" + LastROSTopic;
        }
        Connector.enabled = !Connector.enabled;
    }

    public void ServerInputField_OnTextChanged(string text) {
        if (isReadingFromPrefs)
            return;
        LastServerURL = text;
    }

    public void CommunicationMethodDropdown_OnValueChanged(int value) {
        throw new NotImplementedException();
    }

    public void ROSTopicInputField_OnTextChanged(string text) {
        if (isReadingFromPrefs)
            return;
        LastROSTopic = text;
    }
}
