using System.Collections;
using System.Collections.Generic;
using System.IO;
using TMPro;
using TMPro.EditorUtilities;
using UnityEngine;

public class FileBrowserFileButton : MonoBehaviour {
    public FrameManager FrameManager;
    public ProjectFileViewerPanel Viewer;
    public TMP_Text Label;
    public string FilePath;

    public void SetupButton(string filePath) {
        Label.text = Path.GetFileName(filePath);
        FilePath = filePath;
    }

    public void Button_OnClick() {
        Viewer.Show(FilePath);
    }

    public void DeleteButton_OnClick() {
        File.Delete(FilePath);
        foreach (FrameData frameData in FrameManager.Frames)
            if (ProjectScene.CurrentProjectPath + frameData.FilePath == FilePath)
                FrameManager.Frames.Remove(frameData);
        Destroy(gameObject);
    }
}
