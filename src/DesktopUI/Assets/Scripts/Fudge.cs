using Newtonsoft.Json;
using System;
using System.IO;
using UnityEngine;

public class Fudge : MonoBehaviour {
    public string fudgeLocation = "C:\\Users\\aytimothy\\Downloads\\Points.json";
    public bool triggered = false;
    public bool triggered2 = false;
    public bool activated2 = false;
    public float displayDelay;
    public float displayTime;
    public PointCloudManager pointCloudManager;
    public GameObject fudgeObject;
    public Transform fudgeTarget;

    void Update() {
        if ((Input.GetKey(KeyCode.LeftControl) || Input.GetKey(KeyCode.RightControl)) && Input.GetKeyDown(KeyCode.F))
            FudgeIt();
        if ((Input.GetKey(KeyCode.LeftControl) || Input.GetKey(KeyCode.RightControl)) && Input.GetKeyDown(KeyCode.M))
            FudgeIt2();
        if (triggered2)
            FudgeIt2_Update();
    }

    public void FudgeIt() {
        if (triggered)
            return;

        triggered = true;

        FudgeData fudgeData = JsonConvert.DeserializeObject<FudgeData>(File.ReadAllText(fudgeLocation));
        foreach (FudgedPoint point in fudgeData.points)
            pointCloudManager.AddPoint(new Vector3(point.x, point.y, point.z));
    }

    public void FudgeIt2() {
        activated2 = false;
        displayTime = Time.time + displayDelay;
        triggered2 = true;
    }

    public void FudgeIt2_Update() {
        if (triggered2 && !activated2 && Time.time > displayTime) {
            Instantiate(fudgeObject, fudgeTarget);
            activated2 = true;
        }
    }
}

[Serializable]
public class FudgeData {
    public FudgedPoint[] points;
}

[Serializable]
public class FudgedPoint {
    public float x;
    public float y;
    public float z;
}