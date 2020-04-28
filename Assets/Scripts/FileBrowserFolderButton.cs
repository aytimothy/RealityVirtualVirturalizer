using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.WSA;

public class FileBrowserFolderButton : MonoBehaviour {
    public ProjectFileBrowserPanel FileBrowser;
    public TMP_Text Label;
    public string FolderPath;

    public void Button_OnClick() {
        FileBrowser.ShowFolder(FolderPath);
    }
}
