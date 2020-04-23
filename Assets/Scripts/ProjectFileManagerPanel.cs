using Application = UnityEngine.Application;
using System;
using System.IO;
using System.Windows.Forms;
using TMPro;
using UnityEngine;

public class ProjectFileManagerPanel : MonoBehaviour {
    public FrameManager frameManager;
    public PointCloudManager pointsManager;

    public TMP_Text TotalFramesCountLabel;
    public TMP_Text TotalFrameSizeLabel;

    public string StorePath = "ImportedFrames";
    public string FileName = "Frame";
    public string FileExtension = ".json";

    public int Count {
        get { return frameManager.Frames.Count; }
    }

    public string DefaultDirectory {
        get { return Application.persistentDataPath; }
    }
    public string LastUsedDirectory {
        get { return PlayerPrefs.GetString("LastUsedDirectory", DefaultDirectory); }
        set { PlayerPrefs.SetString("LastUsedDirectory", value); }
    }

    void OnEnable() {
        UpdateLabels();
    }

    public void ImportFrameFileButton_OnClick() {
        OpenFileDialog openFileDialog = new OpenFileDialog();
        openFileDialog.Filter = "JSON Frame|*.json";
        openFileDialog.InitialDirectory = LastUsedDirectory;
        DialogResult dialogResult = openFileDialog.ShowDialog();
        if (dialogResult == DialogResult.OK) {
            LastUsedDirectory = Path.GetDirectoryName(openFileDialog.FileName);
            // ImportFile(GetRelativePath(ProjectScene.CurrentProjectPath, openFileDialog.FileName));
            ImportFile(openFileDialog.FileName);
        }
    }

    public void ImportFolderOfFrameFilesButton_OnClick() {
        OpenFileDialog openFileDialog = new OpenFileDialog();
        openFileDialog.Filter = "JSON Frame|*.json";
        openFileDialog.InitialDirectory = LastUsedDirectory;
        DialogResult dialogResult = openFileDialog.ShowDialog();
        if (dialogResult == DialogResult.OK) {
            LastUsedDirectory = Path.GetDirectoryName(openFileDialog.FileName);
            ImportFolder(Path.GetDirectoryName(openFileDialog.FileName));
        }
    }

    public void ImportFolder(string folderPath) {
        string[] files = Directory.GetFiles(folderPath);
        foreach (string fileName in files) {
            if (fileName.EndsWith(".json")) {
                // FrameData frameData = new FrameData(GetRelativePath(ProjectScene.CurrentProjectPath, fileName), true);
                FrameData frameData = new FrameData(fileName, true);
                frameManager.Frames.Add(frameData);
                Vector3[] points = frameData.Data.ToVector3();
                foreach (Vector3 point in points)
                    pointsManager.AddPoint(point);
            }
        }

        UpdateLabels();
    }

    public void ImportFile(string filePath) {
        string importedFilePath = ProjectScene.CurrentProjectPath + "/" + StorePath + "/" + FileName + (Count + 1).ToString("0000") + FileExtension;
        File.Copy(filePath, importedFilePath);
        FrameData frameData = new FrameData(importedFilePath, true);
        frameManager.Frames.Add(frameData);

        Vector3[] points = frameData.Data.ToVector3();
        foreach (Vector3 point in points)
            pointsManager.AddPoint(point);
        
        UpdateLabels();
    }

    public void UpdateLabels() {
        TotalFrameSizeLabel.text = "(Not Implemented Yet...)";
        TotalFramesCountLabel.text = frameManager.Frames.Count.ToString();
    }

    // https://stackoverflow.com/questions/275689/how-to-get-relative-path-from-absolute-path
    public static String GetRelativePath(String fromPath, String toPath)
    {
        if (String.IsNullOrEmpty(fromPath)) throw new ArgumentNullException("fromPath");
        if (String.IsNullOrEmpty(toPath))   throw new ArgumentNullException("toPath");

        Uri fromUri = new Uri(fromPath);
        Uri toUri = new Uri(toPath);

        if (fromUri.Scheme != toUri.Scheme) { return toPath; } // path can't be made relative.

        Uri relativeUri = fromUri.MakeRelativeUri(toUri);
        String relativePath = Uri.UnescapeDataString(relativeUri.ToString());

        if (toUri.Scheme.Equals("file", StringComparison.InvariantCultureIgnoreCase))
        {
            relativePath = relativePath.Replace(Path.AltDirectorySeparatorChar, Path.DirectorySeparatorChar);
        }

        return relativePath;
    }
}
