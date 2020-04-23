using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.IO;
public class fileButtonControl : MonoBehaviour
{
    public Text elementName;
    public GameObject fileViewerPanel;

    public File_button _Button;
    private void Start()
    {

    }
    public void initializeButton(string name)
    {
        elementName.text = name;

    }

    public void OnClick()
    {
        switch(ProjectFileBrowserPanel.currentFolder_elements[elementName.text].
            GetComponent<fileButtonControl>()._Button.isFile)
        {
            case false:
                ProjectFileBrowserPanel.current_directory = 
                    ProjectFileBrowserPanel.currentFolder_elements[elementName.text].GetComponent<fileButtonControl>()._Button.associatedDirectory;
                File_button.changeDirectory = true;
                break;
            case true:
                fileViewerPanel.SetActive(true);
                ProjectFileViewerPanel.file = ProjectFileBrowserPanel.currentFolder_elements[elementName.text].
            GetComponent<fileButtonControl>()._Button.associatedFile;
                break;
        }
    }
}
