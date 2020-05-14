using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;

public class ProjectOpenProjectButton : MonoBehaviour
{
    public TextMeshProUGUI ProjectNameLabel;
    public TextMeshProUGUI ProjectModifiedLabel;
    public TextMeshProUGUI ProjectPathLabel;
    public GameObject openProjectPanel;

    public ProjectManifest manifest;

    public void InitializeButton(string project_name, string modified_date, string path)
    {
        ProjectNameLabel.text = project_name;
        ProjectModifiedLabel.text = modified_date;
        ProjectPathLabel.text = path;
    }

    public void OnClick()
    {
        ProjectScene.StartupProjectPath = 
            ProjectOpenProjectPanel.
            projects[ProjectNameLabel.text].
            GetComponent<ProjectOpenProjectButton>().ProjectPathLabel.text;

        openProjectPanel.SetActive(false);
    }
}
