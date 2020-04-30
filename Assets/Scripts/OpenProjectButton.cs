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
        this.projectFilePath = projectFilePath;
        this.sceneController = sceneController;

        nameLabel.text = "// not implemented yet.";
        pathLabel.text = projectFilePath;
        modifiedLabel.text = "// not implemented yet.";
         string manifestFileContents = File.ReadAllText(projectFilePath);

        manifest = JsonConvert.DeserializeObject<ProjectManifest>(manifestFileContents);
        nameLabel.text = manifest.Name;
        pathLabel.text = projectFilePath;
        modifiedLabel.text = manifest.Modified.ToString();
    }
}
