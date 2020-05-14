using Application = UnityEngine.Application;
using SFB;
using System;
using System.IO;
using System.Windows.Forms;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class ProjectFileManagerPanel : MonoBehaviour {
    public FrameManager FrameManager;
    public PointCloudManager PointsManager;
    public ProjectScene ProjectManager;
    public TMP_Text TotalFramesCountLabel;
    public TMP_Text TotalFrameSizeLabel;
    public TMP_InputField OutlierCullThresholdInputField;
    public Toggle CullOutlierToggle;
    bool uiIsReadingFromDisk;

    public static string toImportFilePath;
    public string StorePath = "ImportedFrames";
    public string FileName = "Frame";
    public string FileExtension = ".json";

    public int Count {
        get { return FrameManager.Frames.Count; }
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
        UpdateFields();
    }

    public void ImportFrameFileButton_OnClick() {
        ExtensionFilter[] extensions = new [] {
            new ExtensionFilter("Frame Files", "frame", "json" ),
            new ExtensionFilter("All Files", "*" ),
        };
        string[] filePaths = StandaloneFileBrowser.OpenFilePanel("Open File", "", extensions, false);
        if (filePaths.Length == 0)
            return;

        foreach (string filePath in filePaths) {
            LastUsedDirectory = Path.GetDirectoryName(filePath);
            ImportFile(filePath);
        }
    }

    public void ImportFolderOfFrameFilesButton_OnClick() {
        ExtensionFilter[] extensions = new [] {
            new ExtensionFilter("Frame Files", "frame", "json" ),
            new ExtensionFilter("All Files", "*" ),
        };
        string[] filePaths = StandaloneFileBrowser.OpenFilePanel("Open File", "", extensions, false);
        if (filePaths.Length == 0)
            return;

        LastUsedDirectory = Path.GetDirectoryName(filePaths[0]);
        ImportFolder(Path.GetDirectoryName(filePaths[0]));
    }

    public void ImportFolder(string folderPath) {
        string[] files = Directory.GetFiles(folderPath);
        foreach (string fileName in files) {
            if (fileName.EndsWith(".json"))
                ImportFile(fileName);
        }

        UpdateLabels();
    }

    public void ImportFile(string filePath) {
        string importedFilePath = ProjectScene.CurrentProjectPath + StorePath + "/" + FileName + (Count + 1).ToString("0000") + FileExtension;
        if (!Directory.Exists(ProjectScene.CurrentProjectPath + "/" + StorePath + "/"))
            Directory.CreateDirectory(ProjectScene.CurrentProjectPath + "/" + StorePath + "/");
        if (File.Exists(importedFilePath))
            File.Delete(importedFilePath);
        File.Copy(filePath, importedFilePath);
        importedFilePath = GetRelativePath(ProjectScene.CurrentProjectPath, importedFilePath);
        ProjectManager.projectManifest.Frames.Add(importedFilePath);
        FrameData frameData = new FrameData(importedFilePath, true);
        FrameManager.Frames.Add(frameData);

        Vector3[] points = frameData.Data.ToVector3(CullOutliers, OutlierThreshold);
        foreach (Vector3 point in points)
            PointsManager.AddPoint(point);
        
        UpdateLabels();
    }

    public void UpdateLabels() {
        TotalFrameSizeLabel.text = "(Not Implemented Yet...)";
        TotalFramesCountLabel.text = FrameManager.Frames.Count.ToString();
    }

    public void UpdateFields() {
        uiIsReadingFromDisk = true;
        OutlierCullThresholdInputField.text = OutlierThreshold.ToString();
        CullOutlierToggle.isOn = CullOutliers;
        uiIsReadingFromDisk = false;
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

    public bool CullOutliers {
        get {
            if (ProjectManager.projectManifest.settings == null)
                ProjectManager.projectManifest.settings = new ProjectManifestSettings();
            return ProjectManager.projectManifest.settings.removeOutlierReadings;
        }
        set {
            if (ProjectManager.projectManifest.settings == null)
                ProjectManager.projectManifest.settings = new ProjectManifestSettings();
            ProjectManager.projectManifest.settings.removeOutlierReadings = value;
        }
    }

    public float OutlierThreshold {
        get {
            if (ProjectManager.projectManifest.settings == null)
                ProjectManager.projectManifest.settings = new ProjectManifestSettings();
            return ProjectManager.projectManifest.settings.outlierThreshold;
        }
        set {
            if (ProjectManager.projectManifest.settings == null)
                ProjectManager.projectManifest.settings = new ProjectManifestSettings();
            ProjectManager.projectManifest.settings.outlierThreshold = value;
        }
    }

    public void CullOutlierToggle_OnToggle(bool value) {
        if (uiIsReadingFromDisk)
            return;

        CullOutliers = value;
    }

    public void OutlierCullThresholdInputField_OnEndEdit(string value) {
        if (uiIsReadingFromDisk)
            return;

        float floatValue;
        if (float.TryParse(value, out floatValue))
            OutlierThreshold = floatValue;
    }
}
