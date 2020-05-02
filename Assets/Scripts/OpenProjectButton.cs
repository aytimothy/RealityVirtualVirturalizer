using System;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;
using System.IO;
using Newtonsoft.Json;

[RequireComponent(typeof(Button))]
public class OpenProjectButton : MonoBehaviour {
    public string projectFilePath;
    public TopScene sceneController;
    
    public TMP_Text nameLabel;
    public TMP_Text pathLabel;
    public TMP_Text modifiedLabel;
    ProjectManifest manifest = new ProjectManifest();

    public void OnClick() {
        sceneController.OpenProject(projectFilePath);
    }

    public void DeleteButton_OnClick() {
        sceneController.RemoveProject(projectFilePath);
        Destroy(gameObject);
    }

    public void Setup(TopScene sceneController, string projectFilePath) {
        try {
            manifest = JsonConvert.DeserializeObject<ProjectManifest>(File.ReadAllText(projectFilePath + "manifest.json"));
        }
        catch (Exception ex) {
            Debug.LogException(ex);
            manifest = null;
        }

        this.projectFilePath = projectFilePath;
        this.sceneController = sceneController;

        nameLabel.text = (manifest == null) ? "<color=#FF0000>Error: Could not read manifest file...</color>" : manifest.Name;
        pathLabel.text = projectFilePath;
        modifiedLabel.text = (manifest == null) ? "Unknown" : manifest.Modified.ToShortDateString() + " " + manifest.Modified.ToShortTimeString();
        string manifestFileContents = File.ReadAllText(projectFilePath + "manifest.json");
    }
}
