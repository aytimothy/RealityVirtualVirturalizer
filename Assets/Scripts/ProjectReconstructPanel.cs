using String = System.String;
using SFB;
using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class ProjectReconstructPanel : MonoBehaviour {
    public PointCloudManager PointManager;
    public TMP_Text StampDotButtonLabel;
    public Button StampDotButton;
    public CheatDotStamper CheatDotStamper;
    public TMP_InputField CameraDistanceInputField;
    public TMP_InputField FocalLengthInputField;
    public TMP_InputField EdgeLengthLimitInputField;
    public ProjectScene SceneController;
    bool uiIsReadingFromDisk;

    public string DefaultDirectory {
        get { return Application.persistentDataPath; }
    }
    public string LastUsedDirectory {
        get { return PlayerPrefs.GetString("LastUsedDirectory", DefaultDirectory); }
        set { PlayerPrefs.SetString("LastUsedDirectory", value); }
    }

    void Update() {
        UpdateStampButton();

        void UpdateStampButton() {
            bool StamperInProgress = CheatDotStamper.progress >= 0f && CheatDotStamper.progress < 1f;
            StampDotButton.interactable = !StamperInProgress;
            StampDotButtonLabel.text = (StamperInProgress)
                ? "Stamping... " + Mathf.RoundToInt(CheatDotStamper.progress * 100f).ToString() + "%"
                : "Stamp Point Color";
        }
    }

    public float CameraDistance {
        get {
            if (SceneController.projectManifest.settings == null)
                SceneController.projectManifest.settings = new ProjectManifestSettings();
            return SceneController.projectManifest.settings.cameraDistance;
        }
        set {
            if (SceneController.projectManifest.settings == null)
                SceneController.projectManifest.settings = new ProjectManifestSettings();
            SceneController.projectManifest.settings.cameraDistance = value;
        }
    }
    public float FocalDistance {
        get {
            if (SceneController.projectManifest.settings == null)
                SceneController.projectManifest.settings = new ProjectManifestSettings();
            return SceneController.projectManifest.settings.focalLength;
        }
        set {
            if (SceneController.projectManifest.settings == null)
                SceneController.projectManifest.settings = new ProjectManifestSettings();
            SceneController.projectManifest.settings.focalLength = value;
        }
    }
    public float EdgeLimit {
        get {
            if (SceneController.projectManifest.settings == null)
                SceneController.projectManifest.settings = new ProjectManifestSettings();
            return SceneController.projectManifest.settings.edgeLimit;
        }
        set {
            if (SceneController.projectManifest.settings == null)
                SceneController.projectManifest.settings = new ProjectManifestSettings();
            SceneController.projectManifest.settings.edgeLimit = value;
        }
    }

    void OnEnable() {
        uiIsReadingFromDisk = true;
        CameraDistanceInputField.text = CameraDistance.ToString();
        FocalLengthInputField.text = FocalDistance.ToString();
        EdgeLengthLimitInputField.text = EdgeLimit.ToString();
        uiIsReadingFromDisk = false;
    }

    public void ClassifyPointsButton_OnClick() {

    }

    public void StampPointsButton_OnClick() {
        if (CheatDotStamper.progress < 0 || CheatDotStamper.progress >= 1)
            CheatDotStamper.Stamp();
    }

    public void GenerateMeshButton_OnClick() {

    }

    public void StampMeshButton_OnClick() {

    }

    public void ExportMeshButton_OnClick() {

    }

    public void ExportVertexButton_OnClick() {
        bool shiftHeld = Input.GetKey(KeyCode.LeftShift) || Input.GetKey(KeyCode.RightShift);
        string filePath = StandaloneFileBrowser.SaveFilePanel("Save Vertices", LastUsedDirectory, "points", ".json");
        if (!String.IsNullOrEmpty(filePath)) {
            LastUsedDirectory = Path.GetDirectoryName(filePath);

            if (shiftHeld)
                ExportVectorArray();
            if (!shiftHeld)
                ExportNamedVectors();
        }

        void ExportVectorArray() {
            VectorArrayExportFileFormat data = new VectorArrayExportFileFormat();
            foreach (GameObject point in PointManager.PointObjects) {
                data.points.Add(new float[3] { point.transform.position.x, point.transform.position.y, point.transform.position.z });
            }

            string json = JsonConvert.SerializeObject(data);
            if (File.Exists(filePath))
                File.Delete(filePath);
            File.WriteAllText(filePath, json);
            
        }

        void ExportNamedVectors() {
            NamedVectorArrayExportFileFormat data = new NamedVectorArrayExportFileFormat();
            foreach (GameObject point in PointManager.PointObjects) {
                data.points.Add(new NamedVector3() { x = point.transform.position.x, y = point.transform.position.y, z = point.transform.position.z });
            }

            string json = JsonConvert.SerializeObject(data);
            if (File.Exists(filePath))
                File.Delete(filePath);
            File.WriteAllText(filePath, json);
        }
    }

    public void CameraDistanceInputField_OnEndEdit(string value) {
        if (uiIsReadingFromDisk)
            return;

        float floatValue;
        if (float.TryParse(value, out floatValue))
            CameraDistance = floatValue;
    }

    public void CameraFocalLengthInputField_OnEndEdit(string value) {
        if (uiIsReadingFromDisk)
            return;

        float floatValue;
        if (float.TryParse(value, out floatValue))
            FocalDistance = floatValue;
    }

    public void EdgeLengthLimitInputField_OnEndEdit(string value) {
        if (uiIsReadingFromDisk)
            return;

        float floatValue;
        if (float.TryParse(value, out floatValue))
            EdgeLimit = floatValue;
    }
}

public class VectorArrayExportFileFormat {
    public List<float[]> points = new List<float[]>();
}

public class NamedVectorArrayExportFileFormat {
    public List<NamedVector3> points = new List<NamedVector3>();
}

public class NamedVector3 {
    public float x;
    public float y;
    public float z;
}