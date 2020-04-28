using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ProjectViewPanel : MonoBehaviour {
    public Camera camera;

    public void ViewPointCloudButton_OnClick() {

    }

    public void PointCloudImageColorToggle_OnValueChanged(bool newValue) {

    }

    public void PointCloudClassificationColorToggle_OnValueChanged(bool newValue) {

    }

    public void ViewReconstructionButton_OnClick() {

    }

    public void ReconstructionColorToggle_OnValueChanged(bool newValue) {

    }

    public void ReconstructionUVsToggle_OnValueChanged(bool newValue) {

    }

    public void ResetCameraButton_OnClick() {
        camera.transform.position = Vector3.zero;
        camera.transform.rotation = Quaternion.identity;
    }
}
