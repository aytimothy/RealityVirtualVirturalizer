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
    public RosConnector Connector;

    public string LastServerURL {
        get { return PlayerPrefs.GetString("LastROSServerAddress", "ws://127.0.0.1:9090"); }
        set { PlayerPrefs.SetString("LastROSServerAddress", value); }
    }
    public string LastROSTopic {
        get { return PlayerPrefs.GetString("LastROSTopic", "output"); }
        set { PlayerPrefs.SetString("LastROSTopic", value); }
    }

    void OnEnable() {
        
    }

    public void ServerInputField_OnTextChanged(string text) {

    }

    public void CommunicationMethodDropdown_OnValueChanged(int value) {

    }

    public void ROSTopicInputField_OnTextChanged(string text) {

    }
}
