using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
public class DirectoryButtonControl : MonoBehaviour
{
    public TextMeshProUGUI elementName;

    public BrowseNewProjectPanel.Directory_Button _Button;

    /// <summary>
    /// * panel = "project" -> project screen
    /// * panel = "top" -> top screen
    /// </summary>
    public static string panel;

    public void InitializeButton(string name)
    {
        elementName.text = name;
    }

    public void OnClick()
    {
        switch (panel)
        {
            case "project":
                    ProjectCreateNewProjectPanel.currentFolder = ProjectCreateNewProjectPanel.
                        currentDirectoryElements[elementName.text].
                        GetComponent<DirectoryButtonControl>().
                        _Button.associatedDirectory;

                    BrowseNewProjectPanel.Directory_Button.changeDirectory = true;
                break;
            case "top":
                BrowseNewProjectPanel.currentFolder =
                BrowseNewProjectPanel.
                currentDirectoryElements[elementName.text].
                GetComponent<DirectoryButtonControl>().
                _Button.associatedDirectory;

                BrowseNewProjectPanel.Directory_Button.changeDirectory = true;
                break;
        }
    }
}
