using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class ProjectOptionsMenu : MonoBehaviour {
    public TMP_InputField RedBackgroundColorInputField;
    public TMP_InputField BlueBackgroundColorInputField;
    public TMP_InputField GreenBackgroundColorInputField;
    public TMP_InputField LookSensitivityInputField;
    public TMP_InputField CameraSpeedInputField;

    public Camera Camera;
    public CameraController CameraController;
    public Image ColorPreviewImage;

    private bool NoChange;

    void OnEnable() {
        NoChange = true;
        RedBackgroundColorInputField.text = Camera.backgroundColor.r.ToString();
        GreenBackgroundColorInputField.text = Camera.backgroundColor.g.ToString();
        BlueBackgroundColorInputField.text = Camera.backgroundColor.b.ToString();
        LookSensitivityInputField.text = CameraController.mouseSensitivity.ToString();
        CameraSpeedInputField.text = CameraController.walkSpeed.ToString();
        ColorPreviewImage.color = Camera.backgroundColor;
        NoChange = false;
    }

    public void redBackgroundColorInputField_OnTextChanged(string newValue) {
        if (NoChange)
            return;
        float newFloat;
        if (float.TryParse(newValue, out newFloat)) {
            Color newColor = new Color(newFloat, Camera.backgroundColor.g, Camera.backgroundColor.b, Camera.backgroundColor.a);
            CameraController.UpdateBackgroundColor(newColor);
            ColorPreviewImage.color = newColor;
        }
    }

    public void blueBackgroundColorInputField_OnTextChanged(string newValue) {
        if (NoChange)
            return;
        float newFloat;
        if (float.TryParse(newValue, out newFloat)) {
            Color newColor = new Color(Camera.backgroundColor.r, Camera.backgroundColor.g, newFloat, Camera.backgroundColor.a);
            CameraController.UpdateBackgroundColor(newColor);
            ColorPreviewImage.color = newColor;
        }
    }

    public void greenBackgroundColorInputField_OnTextChanged(string newValue) {
        if (NoChange)
            return;
        float newFloat;
        if (float.TryParse(newValue, out newFloat)) {
            Color newColor = new Color(Camera.backgroundColor.r, newFloat, Camera.backgroundColor.b, Camera.backgroundColor.a);
            CameraController.UpdateBackgroundColor(newColor);
            ColorPreviewImage.color = newColor;
        }
    }

    public void lookSensitivityInputField_OnTextChanged(string newValue) {
        if (NoChange)
            return;
        float newFloat;
        if (float.TryParse(newValue, out newFloat))
            CameraController.UpdateMouseSensitivity(newFloat);
    }

    public void moveSpeedInputField_OnTextChanged(string newValue) {
        if (NoChange)
            return;
        float newFloat;
        if (float.TryParse(newValue, out newFloat))
            CameraController.UpdateWalkSpeed(newFloat);
    }
}
