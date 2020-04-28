using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using System.IO;

public class ProjectImportFileBrowserPanel : MonoBehaviour
{
    [Header("Scene References")]
    public GameObject fileButton;
    public GameObject directoryButton;
    public GameObject scrollContent;
    public GameObject BrowserPanel;
    public GameObject fileInfo;
    public GameObject fileImage;
    public TextMeshProUGUI currentFolderPath;

    public static DirectoryInfo currentDirectory;
    public static DirectoryInfo previousDirectory;
    public static FileInfo currentFile;

    public static Dictionary<string, GameObject> currentDirectoryElements = new Dictionary<string, GameObject>();

    public static bool fileView = false;
    public static bool importFile = false;

    int posY = 290;
    public void InstantiateElements()
    {
        //instantiate directories
        foreach(DirectoryInfo directory in currentDirectory.GetDirectories())
        {
            GameObject button = Instantiate(directoryButton);

            currentDirectoryElements.Add(directory.Name, button);

            currentDirectoryElements[directory.Name].SetActive(true);

            currentDirectoryElements[directory.Name].GetComponent<ProjectFileBrowserButton>().initializeButton(directory.Name);

            currentDirectoryElements[directory.Name].GetComponent<RectTransform>().SetParent(scrollContent.GetComponent<RectTransform>(), true);

            currentDirectoryElements[directory.Name].GetComponent<RectTransform>().localScale = directoryButton.GetComponent<RectTransform>().localScale;

            currentDirectoryElements[directory.Name].GetComponent<RectTransform>().sizeDelta = directoryButton.GetComponent<RectTransform>().sizeDelta;

            currentDirectoryElements[directory.Name].GetComponent<RectTransform>().anchoredPosition = directoryButton.GetComponent<RectTransform>().anchoredPosition;
            currentDirectoryElements[directory.Name].GetComponent<RectTransform>().localPosition = new Vector3(directoryButton.GetComponent<RectTransform>().position.x + 45,
                directoryButton.GetComponent<RectTransform>().position.y - posY);
            posY += 45;

            currentDirectoryElements[directory.Name].GetComponent<ProjectFileBrowserButton>()._Button = new File_button(false, directory, null);
        }

        //instantiate files
        foreach(FileInfo file in currentDirectory.GetFiles())
        {
            GameObject button = Instantiate(directoryButton);

            currentDirectoryElements.Add(file.Name, button);

            currentDirectoryElements[file.Name].SetActive(true);

            currentDirectoryElements[file.Name].GetComponent<ProjectFileBrowserButton>().initializeButton(file.Name);

            currentDirectoryElements[file.Name].GetComponent<RectTransform>().SetParent(scrollContent.GetComponent<RectTransform>(), true);

            currentDirectoryElements[file.Name].GetComponent<RectTransform>().localScale = directoryButton.GetComponent<RectTransform>().localScale;

            currentDirectoryElements[file.Name].GetComponent<RectTransform>().sizeDelta = directoryButton.GetComponent<RectTransform>().sizeDelta;

            currentDirectoryElements[file.Name].GetComponent<RectTransform>().anchoredPosition = directoryButton.GetComponent<RectTransform>().anchoredPosition;
            currentDirectoryElements[file.Name].GetComponent<RectTransform>().localPosition = new Vector3(directoryButton.GetComponent<RectTransform>().position.x + 45,
                directoryButton.GetComponent<RectTransform>().position.y - posY);
            posY += 45;

            currentDirectoryElements[file.Name].GetComponent<ProjectFileBrowserButton>()._Button = new File_button(true, null, file);
        }
        posY = 290;
    }

    void Start()
    {
        currentDirectory = new DirectoryInfo(ProjectScene.CurrentProjectPath);
        InstantiateElements();
    }

    void Update()
    {
        if(!fileView)
            currentFolderPath.text = currentDirectory.FullName;
        previousDirectory = currentDirectory.Parent;
        if(File_button.changeDirectory)
        {
            foreach(GameObject element in currentDirectoryElements.Values)
                Destroy(element);
            currentDirectoryElements.Clear();
            File_button.changeDirectory = false;
            InstantiateElements();
        }
    }

    public void OnBackButtonClick()
    {
        if (!fileView)
        {
            foreach (GameObject element in currentDirectoryElements.Values)
                Destroy(element);
            currentDirectoryElements.Clear();

            currentDirectory = previousDirectory;
        }
        else
        {
            fileImage.GetComponent<RectTransform>().localPosition = new Vector3(fileImage.GetComponent<RectTransform>().localPosition.x, fileImage.GetComponent<RectTransform>().localPosition.y + fileInfo.GetComponent<RectTransform>().localScale.y * 320);
            try { File.Delete(ProjectScene.CurrentProjectPath + @"\" + currentFile.Name); }
            catch { }
            fileInfo.SetActive(false);
            fileImage.SetActive(false);
        }
        currentDirectoryElements.Clear();
        InstantiateElements();
    }

    public void OnSelectFileButtonClick()
    {
        if(!File.Exists(ProjectScene.CurrentProjectPath + @"\" + currentFile.Name))
            File.Copy(currentFile.FullName, ProjectScene.CurrentProjectPath + @"\" + currentFile.Name);
        importFile = true;
        ProjectFileManagerPanel.toImportFilePath = @"\" + currentFile.Name;

        ProjectScene.projectManifest.Frames.Add(currentFile.Name);
        BrowserPanel.SetActive(false);
    }

    public void OnCancelButtonClick()
    {
        try { File.Delete(ProjectScene.CurrentProjectPath + @"\" + currentFile.Name); }
        catch { }
        BrowserPanel.SetActive(false);
    }
}
