using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;
using UnityEngine.UI;
using TMPro;

public class ProjectCreateNewProjectPanel : MonoBehaviour
{
    public GameObject directoryButton;
    public GameObject content;
    public GameObject addFolderPanel;
    public GameObject browserPanel;
    public TMP_InputField PathInputField;
    public TMP_InputField ProjetNameInputField;

    public static DirectoryInfo currentFolder;
    public static DirectoryInfo previousFolder;

    public static Dictionary<string, GameObject> currentDirectoryElements = new Dictionary<string, GameObject>();

    public int posY;
    public void InstantiateFolderElements()
    {
        foreach (DirectoryInfo directory in currentFolder.GetDirectories())
        {
            GameObject button = Instantiate(directoryButton);

            currentDirectoryElements.Add(directory.Name, button);

            currentDirectoryElements[directory.Name].SetActive(true);

            currentDirectoryElements[directory.Name].GetComponent<DirectoryButtonControl>().InitializeButton(directory.Name);

            currentDirectoryElements[directory.Name].GetComponent<RectTransform>().SetParent(content.GetComponent<RectTransform>(), true);

            currentDirectoryElements[directory.Name].GetComponent<RectTransform>().localScale = directoryButton.GetComponent<RectTransform>().localScale;

            currentDirectoryElements[directory.Name].GetComponent<RectTransform>().sizeDelta = directoryButton.GetComponent<RectTransform>().sizeDelta;

            currentDirectoryElements[directory.Name].GetComponent<RectTransform>().anchoredPosition = directoryButton.GetComponent<RectTransform>().anchoredPosition;
            currentDirectoryElements[directory.Name].GetComponent<RectTransform>().localPosition = new Vector3(directoryButton.GetComponent<RectTransform>().position.x,
                directoryButton.GetComponent<RectTransform>().position.y - posY);
            posY += 45;

            currentDirectoryElements[directory.Name].GetComponent<DirectoryButtonControl>()._Button = new BrowseNewProjectPanel.Directory_Button(directory);
        }
    }

    void Start()
    {
        DirectoryButtonControl.panel = "project";
        InstantiateFolderElements();
    }

    void Update()
    {
        previousFolder = currentFolder.Parent;
        PathInputField.text = currentFolder.FullName;
        currentFolder = new DirectoryInfo(ProjectScene.CurrentProjectPath);

        if (BrowseNewProjectPanel.Directory_Button.changeDirectory)
        {
            foreach (GameObject element in currentDirectoryElements.Values)
                Destroy(element);
            currentDirectoryElements.Clear();

            InstantiateFolderElements();
            BrowseNewProjectPanel.Directory_Button.changeDirectory = false;
        }
    }


    public void OnCancelButtonClick()
    {
        browserPanel.SetActive(false);
    }

    public void OnCreateButtonClick()
    {
        ProjectScene.StartupProjectPath = currentFolder.FullName;
        browserPanel.SetActive(false);
    }
    public void OnPreviousFolderButtonClick()
    {
        foreach (GameObject element in currentDirectoryElements.Values)
            Destroy(element);
        currentDirectoryElements.Clear();

        currentFolder = previousFolder;
        InstantiateFolderElements();
    }

    public void OnAddFolderButtonClick()
    {
        addFolderPanel.SetActive(true);
    }

    public void OnOkButtonClick(Text newFolderName)
    {
        Directory.CreateDirectory(currentFolder + @"\" + newFolderName.text);
        foreach (GameObject element in currentDirectoryElements.Values)
            Destroy(element);
        currentDirectoryElements.Clear();

        InstantiateFolderElements();
        addFolderPanel.SetActive(false);
    }

    public TextMeshProUGUI ProjectName;
    public void OnSaveButtonClick()
    {
        ProjectScene.projectName = ProjectName.text;
        browserPanel.SetActive(false);
    }
}
