using System;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEngine.Windows;
using Directory = System.IO.Directory;

public class FileBrowserBackButton : MonoBehaviour {
    public ProjectFileBrowserPanel FilePanel;

    public void Button_OnClick() {
        FilePanel.ShowFolder(Directory.GetParent(FilePanel.CurrentPath).FullName);
    }
}
