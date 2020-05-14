using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;
using UnityEngine.UI;
using TMPro;

public class BrowseNewProjectPanel : MonoBehaviour
{
    [Header ("Scene References")]
    public GameObject Body;
    public GameObject directoryButton;
    public GameObject AddFolderPanel;
    public GameObject BrowserPanel;
    public TMP_InputField PathInputField;
    public TextMeshProUGUI currentFolderPath;

    public static DirectoryInfo currentFolder;
    public static DirectoryInfo previousFolder;
    public static DirectoryInfo selectedFolder;

    public static Dictionary<string, GameObject> currentDirectoryElements = new Dictionary<string, GameObject>();

    public int posY;
    public void InstantiateFolderElements()
    {
        foreach(DirectoryInfo directory in currentFolder.GetDirectories())
        {
            GameObject button = Instantiate(directoryButton);

            currentDirectoryElements.Add(directory.Name, button);

            currentDirectoryElements[directory.Name].SetActive(true);

            currentDirectoryElements[directory.Name].GetComponent<DirectoryButtonControl>().InitializeButton(directory.Name);

            currentDirectoryElements[directory.Name].GetComponent<RectTransform>().SetParent(Body.GetComponent<RectTransform>(), true);

            currentDirectoryElements[directory.Name].GetComponent<RectTransform>().localScale = directoryButton.GetComponent<RectTransform>().localScale;

            currentDirectoryElements[directory.Name].GetComponent<RectTransform>().sizeDelta = directoryButton.GetComponent<RectTransform>().sizeDelta;

            currentDirectoryElements[directory.Name].GetComponent<RectTransform>().anchoredPosition = directoryButton.GetComponent<RectTransform>().anchoredPosition;
            currentDirectoryElements[directory.Name].GetComponent<RectTransform>().localPosition = new Vector3(directoryButton.GetComponent<RectTransform>().position.x,
                directoryButton.GetComponent<RectTransform>().position.y - posY);
            posY += 45;

            currentDirectoryElements[directory.Name].GetComponent<DirectoryButtonControl>()._Button = new Directory_Button(directory);
        }
    }
    void Start()
    {
        DirectoryButtonControl.panel = "top";
        currentFolder = new DirectoryInfo(Application.persistentDataPath);
        InstantiateFolderElements();
    }

    void Update()
    {
        currentFolderPath.text = currentFolder.FullName;
        previousFolder = currentFolder.Parent;

        if(Directory_Button.changeDirectory)
        {
            foreach (GameObject element in currentDirectoryElements.Values)
                Destroy(element);
            currentDirectoryElements.Clear();

            InstantiateFolderElements();
            Directory_Button.changeDirectory = false;
        }
    }

    public void OnCancelButtonClick()
    {
        BrowserPanel.SetActive(false);
    }

    public void OnSelectFolderClick()
    {
        PathInputField.text = currentFolder.FullName;
        BrowserPanel.SetActive(false);
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
        AddFolderPanel.SetActive(true);
    }

    public void OnOkButtonClick(Text newFolderName)
    {
        Directory.CreateDirectory(currentFolder + @"\" + newFolderName.text);
        foreach (GameObject element in currentDirectoryElements.Values)
            Destroy(element);
        currentDirectoryElements.Clear();

        InstantiateFolderElements();
        AddFolderPanel.SetActive(false);
    }
    #region Button Control Class
    public class Directory_Button
    {
        public DirectoryInfo associatedDirectory;
        public static bool changeDirectory = false;

        public Directory_Button(DirectoryInfo associatedDirectory)
        {
            this.associatedDirectory = associatedDirectory;
        }
    }
    #endregion
}
