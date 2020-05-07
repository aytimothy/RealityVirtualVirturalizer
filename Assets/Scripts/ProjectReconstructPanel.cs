using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class ProjectReconstructPanel : MonoBehaviour {
    public TMP_InputField CameraDistanceInputField;
    public TMP_InputField FocalLengthInputField;
    public ProjectScene SceneController;
    bool uiIsReadingFromDisk;

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

    public void ClassifyPointsButton_OnClick() {

    }

    public void StampPointsButton_OnClick() {

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

    }

    public void CameraFocalLengthInputField_OnEndEdit(string value) {
        
    }
}
