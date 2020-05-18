using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using UnityEngine;

public class OverTimeImporter : MonoBehaviour {
    public string FolderPath;
    public FileInfo[] Files;
    public float ImportInterval = 0.5f;
    float NextImportTime;
    bool FolderFound;
    bool activated;
    int index = 0;

    public PointCloudManager PointCloud;

    public void Start() {
        DirectoryInfo directoryInfo = new DirectoryInfo(FolderPath);
        if (!directoryInfo.Exists)
            return;
        FolderFound = true;
        Files = directoryInfo.GetFiles();
    }

    public void Update() {
        if (Input.GetKeyDown(KeyCode.Space)) {
            activated = !activated;
            NextImportTime = Time.time + 5f;
        }
        if (activated && Time.time > NextImportTime && FolderFound) {
            if (index > Files.Length)
                activated = false;
            if (!activated)
                return;

            string json = File.ReadAllText(Files[index].FullName);
            Frame frameData = JsonConvert.DeserializeObject<Frame>(json);
            Vector3[] points = frameData.ToVector3();
            foreach (Vector3 point in points)
                PointCloud.AddPoint(point);

            index++;
            NextImportTime = Time.time + ImportInterval;
            if (index >= Files.Length) {
                index = 0;
                activated = false;
            }
        }   
    }
}
