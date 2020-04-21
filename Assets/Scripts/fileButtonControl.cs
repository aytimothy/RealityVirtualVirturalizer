using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.IO;
public class fileButtonControl : MonoBehaviour
{
    [SerializeField]
    private Text elementName;
    private GameObject fileViewerPanel;

    public FileInfo associatedFile;
    public DirectoryInfo associatedDirectory;
    public bool isFile;

    public static bool changeDirectory = false;
    public void SetButtonText(string name)
    {
        elementName.text = name;
    }

    public void OnClick()
    {
        switch(isFile)
        {
            case false:
                changeDirectory = true;
                ProjectFileBrowserPanel.current_directory = associatedDirectory;
                break;
            case true:
                fileViewerPanel.SetActive(true);
                ProjectFileViewerPanel.file = associatedFile;
                break;
        }
    }
}
