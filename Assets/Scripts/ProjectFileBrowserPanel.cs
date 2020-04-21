using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;
using UnityEngine.UI;

public class ProjectFileBrowserPanel : MonoBehaviour {
    //the object of the buttons for files and directories
    public GameObject fileButtonTemplate;
    public Button previousFolderButton;

    public static DirectoryInfo current_directory;
    public static DirectoryInfo previous_directory;

    List<GameObject> currentDirectoryElements;

    void InstantiateCurrentDirectoryElements()
    {
        foreach (DirectoryInfo directory in current_directory.GetDirectories())
        {
            GameObject directoryButton = Instantiate(fileButtonTemplate) as GameObject;
            directoryButton.SetActive(true);
            directoryButton.GetComponent<fileButtonControl>().SetButtonText(directory.Name);
            directoryButton.transform.SetParent(fileButtonTemplate.transform.parent, true);
            directoryButton.GetComponent<fileButtonControl>().isFile = false;
            directoryButton.GetComponent<fileButtonControl>().associatedDirectory = directory;

            currentDirectoryElements.Add(directoryButton);
        }
        foreach (FileInfo file in current_directory.GetFiles())
        {
            GameObject fileButton = Instantiate(fileButtonTemplate) as GameObject;
            fileButton.SetActive(true);
            fileButton.GetComponent<fileButtonControl>().SetButtonText(file.Name);
            fileButton.transform.SetParent(fileButtonTemplate.transform.parent, true);
            fileButton.GetComponent<fileButtonControl>().isFile = true;
            fileButton.GetComponent<fileButtonControl>().associatedFile = file;

            currentDirectoryElements.Add(fileButton);
        }
    }
    void Start()
    {
        previousFolderButton.enabled = false;
        currentDirectoryElements = new List<GameObject>();
        current_directory = new DirectoryInfo(@"C:\Desktop");
        InstantiateCurrentDirectoryElements();
    }

    public void OnPreviousDirectoryButtonClick()
    {
        foreach (GameObject element in currentDirectoryElements)
            Destroy(element);
        current_directory = previous_directory;
        InstantiateCurrentDirectoryElements();
    }
    void Update()
    {
        previous_directory = current_directory.Parent;
        if(fileButtonControl.changeDirectory)
        {
            foreach (GameObject element in currentDirectoryElements)
                Destroy(element);
            InstantiateCurrentDirectoryElements();
            fileButtonControl.changeDirectory = false;
            previousFolderButton.enabled = true;
        }
        if (current_directory.FullName == ProjectScene.StartupProjectPath)
            previousFolderButton.enabled = false;
    }
}

  
