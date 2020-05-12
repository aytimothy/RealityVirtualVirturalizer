using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class ProjectReconstructPanel : MonoBehaviour {
    public TMP_Text StampDotButtonLabel;
    public Button StampDotButton;
    public CheatDotStamper CheatDotStamper;
    public TMP_InputField CameraDistanceInputField;
    public TMP_InputField FocalLengthInputField;
    public TMP_InputField EdgeLengthLimitInputField;
    public ProjectScene SceneController;
    bool uiIsReadingFromDisk;

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
