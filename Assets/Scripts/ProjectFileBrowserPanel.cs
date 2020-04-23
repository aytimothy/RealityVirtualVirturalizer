using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;
using UnityEngine.UI;
using UnityEngine.TestTools;

public class ProjectFileBrowserPanel : MonoBehaviour {
    //the object of the buttons for files and directories
    public GameObject fileButtonTemplate;
    public Button previousFolderButton;
    public GameObject scrollView;

    public static DirectoryInfo current_directory;
    public static DirectoryInfo previous_directory;

    public static Dictionary<string, GameObject> currentFolder_elements = new Dictionary<string, GameObject>();

    public int posY;
    public int posX = 145;
    void InstantiateCurrentDirectoryElements()
    {
        posY = 230;
        foreach (DirectoryInfo directory in current_directory.GetDirectories())
        {
            GameObject directoryButton = Instantiate(fileButtonTemplate);

            print(fileButtonTemplate.name);

            currentFolder_elements.Add(directory.Name, directoryButton);

            currentFolder_elements[directory.Name].SetActive(true);

            currentFolder_elements[directory.Name].GetComponent<fileButtonControl>().initializeButton(directory.Name);

            currentFolder_elements[directory.Name].GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);

            currentFolder_elements[directory.Name].GetComponent<RectTransform>().localScale = fileButtonTemplate.GetComponent<RectTransform>().localScale;

            currentFolder_elements[directory.Name].GetComponent<RectTransform>().sizeDelta = fileButtonTemplate.GetComponent<RectTransform>().sizeDelta;

            currentFolder_elements[directory.Name].GetComponent<RectTransform>().anchoredPosition = fileButtonTemplate.GetComponent<RectTransform>().anchoredPosition;
            currentFolder_elements[directory.Name].GetComponent<RectTransform>().localPosition = new Vector3(fileButtonTemplate.GetComponent<RectTransform>().position.x - posX,
                fileButtonTemplate.GetComponent<RectTransform>().position.y - posY);
            posY += 45;

            currentFolder_elements[directory.Name].GetComponent<fileButtonControl>()._Button = new File_button(false, directory, null);
        }
        foreach (FileInfo file in current_directory.GetFiles())
        {
            GameObject fileButton = Instantiate(fileButtonTemplate);

            currentFolder_elements.Add(file.Name, fileButton);

            currentFolder_elements[file.Name].SetActive(true);

            currentFolder_elements[file.Name].GetComponent<fileButtonControl>().initializeButton(file.Name);

            currentFolder_elements[file.Name].GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);

            currentFolder_elements[file.Name].GetComponent<RectTransform>().localScale = fileButtonTemplate.GetComponent<RectTransform>().localScale;

            currentFolder_elements[file.Name].GetComponent<RectTransform>().sizeDelta = fileButtonTemplate.GetComponent<RectTransform>().sizeDelta;

            currentFolder_elements[file.Name].GetComponent<RectTransform>().anchoredPosition = fileButtonTemplate.GetComponent<RectTransform>().anchoredPosition;
            currentFolder_elements[file.Name].GetComponent<RectTransform>().localPosition = new Vector3(fileButtonTemplate.GetComponent<RectTransform>().position.x - posX,
                fileButtonTemplate.GetComponent<RectTransform>().position.y - posY);
            posY += 45;

            currentFolder_elements[file.Name].GetComponent<fileButtonControl>()._Button = new File_button(true, null, file);
        }
    }
    void Start()
    {
        previousFolderButton.enabled = false;
        current_directory = new DirectoryInfo(@"C:\Users\Waleed\Desktop\Tafe Folder");
        InstantiateCurrentDirectoryElements();
    }

    public void OnPreviousDirectoryButtonClick()
    {
        foreach (GameObject element in currentFolder_elements.Values)
            Destroy(element);
        currentFolder_elements.Clear();
        current_directory = previous_directory;
        InstantiateCurrentDirectoryElements();
    }
    void Update()
    {
        print(previousFolderButton.enabled);
        previous_directory = current_directory.Parent;
        if (File_button.changeDirectory)
        {
            foreach (GameObject element in currentFolder_elements.Values)
                Destroy(element);
            currentFolder_elements.Clear();
            print(current_directory.Name);
            InstantiateCurrentDirectoryElements();
            File_button.changeDirectory = false;
            previousFolderButton.enabled = true;
        }
        if (current_directory.FullName == @"C:\Users\Waleed\Desktop\Tafe Folder")
            previousFolderButton.gameObject.SetActive(false);
        else
            previousFolderButton.gameObject.SetActive(true);
    }
}

#region Button Control Class
public class File_button
{
    public FileInfo associatedFile;
    public DirectoryInfo associatedDirectory;
    public bool isFile;
    public static bool changeDirectory = false;

    public File_button(bool isFile, DirectoryInfo associatedDirectory, FileInfo associatedFile)
    {
        this.isFile = isFile;
        this.associatedDirectory = associatedDirectory;
        this.associatedFile = associatedFile;
    }
}
#endregion


