using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using TMPro;
using UnityEngine;

public class ProjectScene : MonoBehaviour {
    public static string StartupProjectPath;
    public static string CurrentProjectPath;

    public ProjectManifest projectManifest;
    public bool modified;

    public PointCloudManager pointCloudManager;
    public FrameManager frameManager;

    void Start() {
        bool existingManifestExists = File.Exists(StartupProjectPath + "/manifest.json");
        if (existingManifestExists) 
            PrepareExistingProject(StartupProjectPath);
        if (!existingManifestExists)
            PrepareNewProject(StartupProjectPath);
    }

    public void PrepareNewProject(string directory) {
        projectManifest = new ProjectManifest();
        projectManifest.Name = "NOT_IMPLEMENTED";
        projectManifest.Created = DateTime.Now;
        projectManifest.Modified = DateTime.Now;
        projectManifest.Description = "NOT IMPLEMENTED";
        projectManifest.Frames = new List<string>();

        string manifestFileString = JsonConvert.SerializeObject(projectManifest);
        if (File.Exists(directory + "/manifest.json"))
            File.Delete(directory + "/manifest.json");
        File.WriteAllText(directory + "/manifest.json", manifestFileString);
    }

    public void PrepareExistingProject(string directory) {
        string manifestFileContents = File.ReadAllText(directory + "/manifest.json");
        projectManifest = JsonConvert.DeserializeObject<ProjectManifest>(manifestFileContents);
        frameManager.Frames.Clear();
        foreach (string frameFilePath in projectManifest.Frames)
            frameManager.Frames.Add(new FrameData(frameFilePath));
    }

    public void SaveProject() {

    }

    public void LoadProject() {

    }
}

[Serializable]
public class ProjectManifest {
    public string Name;
    public string Description;
    public DateTime Created;
    public DateTime Modified;
    public List<string> Frames = new List<string>();
}