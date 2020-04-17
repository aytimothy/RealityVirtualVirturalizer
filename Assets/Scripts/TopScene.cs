using System;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;
using Application = UnityEngine.Application;

public class TopScene : MonoBehaviour {
    [Header("Prefab References")]
    public GameObject OpenProjectButtonPrefab;

    [Header("Scene References")]
    public GameObject OpenProjectPanel;
    public GameObject CreateProjectPanel;
    public GameObject ProjectListEmptyMessage;
    public GameObject ProjectListScrollArea;
    public TMP_InputField CreateProjectNameInputField;
    public TMP_InputField CreateProjectPathInputField;
    public List<GameObject> OpenProjectPanelButtons = new List<GameObject>();

    public string DefaultDirectory {
        get { return Application.persistentDataPath; }
    }
    public string LastUsedDirectory {
        get { return PlayerPrefs.GetString("LastUsedDirectory", DefaultDirectory); }
        set { PlayerPrefs.SetString("LastUsedDirectory", value); }
    }

    void Start() {
        UpdateOpenProjectPanel();
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
        MessageBox.Show("Not Implemented Yet...", "Error!");
    }

    public void CreateProjectBrowseButton_OnClick() {
        SaveFileDialog saveFileDialog = new SaveFileDialog();
        saveFileDialog.InitialDirectory = LastUsedDirectory;
        DialogResult dialogResult = saveFileDialog.ShowDialog();
        if (dialogResult == DialogResult.OK) {
            string filePath = Path.GetDirectoryName(saveFileDialog.FileName);
            CreateProjectPathInputField.text = filePath;
            CreateProject(CreateProjectPathInputField.text, CreateProjectNameInputField.text);
            LastUsedDirectory = filePath;
        }
    }
    #endregion

    public void AddProject(string projectFilePath) {
        DialogResult dialogResult = MessageBox.Show("Not Implemented Yet...", "Error!");
    }
    public void OpenProject(string projectFilePath) {
        DialogResult dialogResult = MessageBox.Show("Not Implemented Yet...", "Error!");
        SceneManager.LoadScene("Project Scene");
    }

    public void CreateProject(string parentFolderFilePath, string projectFolderName) {
        DialogResult dialogResult = MessageBox.Show("Not Implemented Yet...", "Error!");
        SceneManager.LoadScene("Project Scene");
    }

    public void UpdateOpenProjectPanel() {
        // look up a list of recent projects and add them to the dialog box for quick access.
    }
}
