using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;
using TMPro;
using UnityEngine.UI;
using UnityEngine.TestTools;
using UnityEngine.WSA;
using GameObject = UnityEngine.GameObject;

public class ProjectFileBrowserPanel : MonoBehaviour {
    public Transform ButtonSpawnLocation;
    public FrameManager FrameManager;
    public ProjectFileViewerPanel FileViewer;

    public GameObject BackButton;
    public GameObject FileButtonPrefab;
    public GameObject FolderButtonPrefab;
    public GameObject NoFileNotice;

    public TMP_Text FileDirectoryLabel;

    public List<GameObject> Buttons;

    public string CurrentPath {
        get { return currentPath; }
        private set { currentPath = value; }
    }
    [SerializeField]
    string currentPath;

    void OnEnable() {
        DisplayDirectory(ProjectScene.CurrentProjectPath);
    }

    public void DisplayDirectory(string directory) {
        DirectoryInfo directoryInfo = new DirectoryInfo(directory);
        string relativePath = ProjectFileManagerPanel.GetRelativePath(ProjectScene.CurrentProjectPath, directory);
        FileDirectoryLabel.text = (directory == ProjectScene.CurrentProjectPath) ? "[Root]" : relativePath;
        currentPath = directoryInfo.FullName;
        BackButton.SetActive(NormalizePath(directory) != NormalizePath(ProjectScene.CurrentProjectPath));
        
        foreach (GameObject fileButton in Buttons)
            Destroy(fileButton);
        Buttons.Clear();

        FileInfo[] files = directoryInfo.GetFiles();
        DirectoryInfo[] folders = directoryInfo.GetDirectories();
        foreach (DirectoryInfo folder in folders) {
            GameObject newFolderButton = Instantiate(FolderButtonPrefab, ButtonSpawnLocation);
            Buttons.Add(newFolderButton);
            FileBrowserFolderButton buttonController = newFolderButton.GetComponent<FileBrowserFolderButton>();
            buttonController.FileBrowser = this;
            buttonController.FolderPath = folder.FullName;
            buttonController.Label.text = folder.Name;
        }

        foreach (FileInfo file in files) {
            GameObject newFileButton = Instantiate(FileButtonPrefab, ButtonSpawnLocation);
            Buttons.Add(newFileButton);
            FileBrowserFileButton buttonController = newFileButton.GetComponent<FileBrowserFileButton>();
            buttonController.FrameManager = FrameManager;
            buttonController.Viewer = FileViewer;
            buttonController.SetupButton(file.FullName);
        }

        NoFileNotice.SetActive(files.Length + folders.Length <= 0);
    }

    public void ShowFolder(string directory) { DisplayDirectory(directory); }

    public static string NormalizePath(string path) {
        return Path.GetFullPath(new Uri(path).LocalPath)
            .TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar)
            .ToUpperInvariant();
    }
}


