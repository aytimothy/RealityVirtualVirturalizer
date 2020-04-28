using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using System.IO;
using Newtonsoft.Json;

public class ProjectOpenProjectPanel : MonoBehaviour
{
    public GameObject ProjectButton;
    public GameObject content;
    public GameObject panel;
    public int posY;

    DirectoryInfo projectsFolder;

    public static Dictionary<string, GameObject> projects = new Dictionary<string, GameObject>();
    public void InstantiateProjectButtons()
    {
        foreach(DirectoryInfo project in projectsFolder.GetDirectories())
        {
            GameObject button = Instantiate(ProjectButton);

            projects.Add(project.Name, button);

            projects[project.Name].SetActive(true);

            projects[project.Name].GetComponent<ProjectOpenProjectButton>().manifest = new ProjectManifest();

            try
            {
                string manifestContents = File.ReadAllText(project + @"\manifest.json");
                projects[project.Name].GetComponent<ProjectOpenProjectButton>().manifest = JsonConvert.DeserializeObject<ProjectManifest>(manifestContents);
                projects[project.Name].GetComponent<ProjectOpenProjectButton>().InitializeButton(projects[project.Name].GetComponent<ProjectOpenProjectButton>().manifest.Name,
                projects[project.Name].GetComponent<ProjectOpenProjectButton>().manifest.Modified.Date.ToString(), project.FullName);
            }
            catch
            {
                Destroy(button);
                projects.Remove(project.Name);
                continue;
            }

            projects[project.Name].GetComponent<RectTransform>().SetParent(content.GetComponent<RectTransform>(), true);

            projects[project.Name].GetComponent<RectTransform>().localScale = ProjectButton.GetComponent<RectTransform>().localScale;

            projects[project.Name].GetComponent<RectTransform>().sizeDelta = ProjectButton.GetComponent<RectTransform>().sizeDelta;

            projects[project.Name].GetComponent<RectTransform>().anchoredPosition = ProjectButton.GetComponent<RectTransform>().anchoredPosition;
            projects[project.Name].GetComponent<RectTransform>().localPosition = new Vector3(ProjectButton.GetComponent<RectTransform>().position.x,
                ProjectButton.GetComponent<RectTransform>().position.y - posY);
            posY += 45;
        }
    }
    void Start()
    {
        projectsFolder = new DirectoryInfo(ProjectScene.CurrentProjectPath);
        projectsFolder = projectsFolder.Parent;

        InstantiateProjectButtons();
    }

    public void OnCancelButtonClick()
    {
        panel.SetActive(false);
    }
}
