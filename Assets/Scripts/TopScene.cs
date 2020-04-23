using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Mail;
using System.Windows.Forms;
using Newtonsoft.Json;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using Application = UnityEngine.Application;
using Button = UnityEngine.UI.Button;

public class TopScene : MonoBehaviour {
    [Header("Prefab References")]
    public GameObject OpenProjectButtonPrefab;

    [Header("Scene References")]
    public GameObject OpenProjectPanel;
    public GameObject CreateProjectPanel;
    public GameObject ProjectListEmptyMessage;
    public GameObject ProjectListScrollArea;
    public Transform ProjectListContentArea;
    public TMP_InputField CreateProjectNameInputField;
    public TMP_InputField CreateProjectPathInputField;
    public TMP_Text CreateProjectPathPlaceholderInputField;
    public Button ReallyCreateProjectButton;
    public List<GameObject> OpenProjectPanelButtons = new List<GameObject>();

    public string DefaultDirectory {
        get { return Application.persistentDataPath; }
    }
    public string LastUsedDirectory {
        get { return PlayerPrefs.GetString("LastUsedDirectory", DefaultDirectory); }
        set { PlayerPrefs.SetString("LastUsedDirectory", value); }
    }
    public string ProjectHistory {
        get { return PlayerPrefs.GetString("ProjectHistory", JsonConvert.SerializeObject(new RecentProjectList())); }
        set { PlayerPrefs.SetString("ProjectHistory", value);}
    }

    void Start() {
        UpdateOpenProjectPanel();
        CreateProjectPathPlaceholderInputField.text = Application.persistentDataPath;
    }

    #region UI Events
    public void CreateProjectButton_OnClick() {
        CreateProjectPanel.SetActive(true);
        OpenProjectPanel.SetActive(false);
    }

    public void AddProjectButton_OnClick() {
        OpenFileDialog openFileDialog = new OpenFileDialog();
        openFileDialog.InitialDirectory = LastUsedDirectory;
        DialogResult dialogResult = openFileDialog.ShowDialog();
        if (dialogResult == DialogResult.OK) {
            string filePath = Path.GetDirectoryName(openFileDialog.FileName);
            AddProject(filePath);
            LastUsedDirectory = filePath;
        }
    }

    public void OpenProjectButton_OnClick() {
        CreateProjectPanel.SetActive(false);
        OpenProjectPanel.SetActive(true);

        UpdateOpenProjectPanel();
    }

    public void ActuallyCreateProjectButton_OnClick() {
        CreateProject(CreateProjectPathInputField.text, CreateProjectNameInputField.text);
    }

    public void CreateProjectBrowseButton_OnClick() {
        SaveFileDialog saveFileDialog = new SaveFileDialog();
        saveFileDialog.InitialDirectory = LastUsedDirectory;
        DialogResult dialogResult = saveFileDialog.ShowDialog();
        if (dialogResult == DialogResult.OK) {
            string filePath = Path.GetDirectoryName(saveFileDialog.FileName);
            LastUsedDirectory = filePath;
            CreateProjectPathInputField.text = filePath;
        }
    }

    public void ProjectNameInputField_OnChanged(string text) {
        ReallyCreateProjectButton.interactable = !String.IsNullOrEmpty(text);
    }
    #endregion

    public void AddProject(string projectFilePath) {
        DialogResult dialogResult = MessageBox.Show("Not Implemented Yet...", "Error!");
    }
    public void OpenProject(string projectFilePath) {
        ProjectScene.StartupProjectPath = projectFilePath;
        SceneManager.LoadScene("Project Scene");
    }

    public void CreateProject(string parentFolderFilePath, string projectFolderName) {
        if (String.IsNullOrEmpty(parentFolderFilePath))
            parentFolderFilePath = Application.persistentDataPath;
        if (!parentFolderFilePath.EndsWith("\\") && !parentFolderFilePath.EndsWith("/"))
            parentFolderFilePath += "/";
        string projectPath = parentFolderFilePath + projectFolderName + "/";
        ProjectScene.StartupProjectPath = projectPath;

        RecentProjectList recentProjects = JsonConvert.DeserializeObject<RecentProjectList>(ProjectHistory);

        if (recentProjects.projectPaths.Contains(projectPath))
            recentProjects.projectPaths.Remove(projectPath);
        recentProjects.projectPaths.Add(projectPath);
        ProjectHistory = JsonConvert.SerializeObject(recentProjects);

        SceneManager.LoadScene("Project Scene");
    }

    public void UpdateOpenProjectPanel() {
        foreach (GameObject openProjectButton in OpenProjectPanelButtons)
            Destroy(openProjectButton);
        OpenProjectPanelButtons.Clear();

        RecentProjectList recentProjects = JsonConvert.DeserializeObject<RecentProjectList>(ProjectHistory);
        bool noProjects = recentProjects.projectPaths.Count == 0;
        ProjectListEmptyMessage.SetActive(noProjects);
        ProjectListScrollArea.SetActive(!noProjects);

        if (!noProjects)
            foreach (string recentProjectPath in recentProjects.projectPaths) {
                GameObject newObject = Instantiate(OpenProjectButtonPrefab, ProjectListContentArea);
                OpenProjectButton openProjectButton = newObject.GetComponent<OpenProjectButton>();
                openProjectButton.Setup(this, recentProjectPath);
            }
    }

    public void RemoveProject(string projectFilePath) {
        RecentProjectList recentProjects = JsonConvert.DeserializeObject<RecentProjectList>(ProjectHistory);
        recentProjects.projectPaths.Remove(projectFilePath);
        ProjectHistory = JsonConvert.SerializeObject(recentProjects);
    }
}

public class RecentProjectList {
    public List<string> projectPaths = new List<string>();
}
