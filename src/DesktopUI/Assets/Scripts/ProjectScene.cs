using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using TMPro;
using UnityEngine;

public class ProjectScene : MonoBehaviour {
    public static string StartupProjectPath;
    [SerializeField]
    public static string CurrentProjectPath;

    public ProjectManifest projectManifest;
    public bool modified;

    public PointCloudManager pointCloudManager;
    public FrameManager frameManager;

    DirectoryInfo CurrentProject;
    public TMP_InputField ProjectNameInputField;
    public bool ProjectLoaded = false;

    void Start() {
        CurrentProjectPath = StartupProjectPath;
        bool existingManifestExists = File.Exists(StartupProjectPath + "/manifest.json");
        if (existingManifestExists) 
            PrepareExistingProject(StartupProjectPath);
        if (!existingManifestExists)
            PrepareNewProject(StartupProjectPath);
        Debug.Log("Loaded Project at " + CurrentProjectPath);
    }
    public void PrepareNewProject(string directory) {
        projectManifest = new ProjectManifest();
        CurrentProject = new DirectoryInfo(directory);
        projectManifest.Name = CurrentProject.Name;
        projectManifest.Created = DateTime.Now;
        projectManifest.Modified = DateTime.Now;
        projectManifest.Description = "NOT IMPLEMENTED";
        projectManifest.Frames = new List<string>();

        string manifestFileString = JsonConvert.SerializeObject(projectManifest);
        if (File.Exists(directory + "/manifest.json"))
            File.Delete(directory + "/manifest.json");
        if (!Directory.Exists(directory))
            Directory.CreateDirectory(directory);
        File.WriteAllText(directory + "/manifest.json", manifestFileString);

        Directory.CreateDirectory(directory + @"\Frames Folder");
        ProjectNameInputField.text = projectManifest.Name;
    }

    public void PrepareExistingProject(string directory) {
        string manifestFileContents = File.ReadAllText(directory + "/manifest.json");
        projectManifest = JsonConvert.DeserializeObject<ProjectManifest>(manifestFileContents);
        frameManager.Frames.Clear();
        foreach (string frameFilePath in projectManifest.Frames)
            frameManager.Frames.Add(new FrameData(frameFilePath));
        foreach (FrameData frameData in frameManager.Frames) {
            frameData.LoadFrame();
            Vector3[] points = frameData.Data.ToVector3();
            foreach (Vector3 point in points)
                pointCloudManager.AddPoint(point);
        } 
        ProjectNameInputField.text = projectManifest.Name;
        ProjectLoaded = true;
    }

    public void NewProject() {
        CurrentProjectPath = StartupProjectPath;
        PrepareNewProject(CurrentProjectPath); 
    }

    public void SaveProject() {
        projectManifest.Modified = DateTime.Now;
        string manifestInformation = JsonConvert.SerializeObject(projectManifest);

        /*File.WriteAllText(CurrentProjectPath + @"\manifest.json", manifestInformation);*/
        File.WriteAllText(CurrentProjectPath + "/manifest.json", manifestInformation);
    }

    public static string projectName;
    public void SaveAsProject(TextMeshProUGUI directory)
    {
        DirectoryInfo newProjectDirectory = Directory.CreateDirectory(directory.text + @"\" + projectName);

        Directory.CreateDirectory(directory.text + @"\" + projectName + @"\Frames Folder");

        DirectoryInfo FramesFolder = new DirectoryInfo(CurrentProject + @"\Frames Folder");

        foreach (FileInfo frame in FramesFolder.GetFiles())
            frame.CopyTo(newProjectDirectory + @"\Frames Folder" + @"\" + frame.Name);
        foreach (FileInfo manifest in CurrentProject.GetFiles())
            manifest.CopyTo(newProjectDirectory + @"\" + manifest.Name);
    }

    public void LoadProject() {
        CurrentProjectPath = StartupProjectPath;
        PrepareExistingProject(CurrentProjectPath);
    }

    public void ProjectNameInputField_OnEndEdit(string newValue) {
        if (!ProjectLoaded)
            return;

        projectManifest.Name = newValue;
    }
}


[Serializable]
public class ProjectManifest {
    public string Name;
    public string Description;
    public DateTime Created;
    public DateTime Modified;
    public List<string> Frames = new List<string>();
    public ProjectManifestSettings settings = new ProjectManifestSettings();
}

[Serializable]
public class ProjectManifestSettings {
    public bool removeOutlierReadings;
    public float outlierThreshold;
    public float cameraDistance;
    public float focalLength;
    public float edgeLimit;

    public ProjectManifestSettings() {
        removeOutlierReadings = true;
        outlierThreshold = 0.9f;
        cameraDistance = 0.05f;     // 0.07f or 7cm if the lidar actually fit in the slot.
        focalLength = 0.05f;        // 50mm aka. 5cm aka 0.05m
    }
}