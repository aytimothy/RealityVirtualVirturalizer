using Newtonsoft.Json;
using System;
using System.IO;
using UnityEngine;

public class Fudge : MonoBehaviour {
    public string fudgeLocation = "C:\\Users\\aytimothy\\Downloads\\Points.json";
    public bool triggered = false;
    public PointCloudManager pointCloudManager;

    void Update() {
        if ((Input.GetKey(KeyCode.LeftControl) || Input.GetKey(KeyCode.RightControl)) && Input.GetKeyDown(KeyCode.F))
            FudgeIt();
    }

    public void FudgeIt() {
        if (triggered)
            return;

        triggered = true;

        FudgeData fudgeData = JsonConvert.DeserializeObject<FudgeData>(File.ReadAllText(fudgeLocation));
        foreach (FudgedPoint point in fudgeData.points)
            pointCloudManager.AddPoint(new Vector3(point.x, point.y, point.z));
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