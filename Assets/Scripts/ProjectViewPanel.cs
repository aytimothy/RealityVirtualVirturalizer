using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class ProjectViewPanel : MonoBehaviour
{
    public PointCloudManager CloudManager;
    public GameObject pointCloudCanvas;
    public GameObject reconstructCanvas;
    public Camera camera;
    public Toggle PointCloudImageColor;
    public Toggle PointCloudClassificationColor;
    public Toggle ReconstructionColor;
    public Toggle ReconstructionUVs;
    public bool isUpdating;

    void Start() {
        isUpdating = true;
        PointCloudImageColor.isOn = false;
        PointCloudClassificationColor.isOn = false;
        ReconstructionColor.isOn = false;
        ReconstructionUVs.isOn = false;
        UpdateColors();
        isUpdating = false;
    }

    void Update() {
        if ((Input.GetKey(KeyCode.LeftControl) || Input.GetKey(KeyCode.RightControl)) && Input.GetKeyDown(KeyCode.R))
            ResetCameraButton_OnClick();
    }

    public void ViewPointCloudButton_OnClick()
    {
        pointCloudCanvas.SetActive(true);
        reconstructCanvas.SetActive(false);
    }

    public void PointCloudImageColorToggle_OnValueChanged(bool newValue) {
        if (!isUpdating) {
            isUpdating = true;
            PointCloudClassificationColor.isOn = false;
            UpdateColors();
            isUpdating = false;
        }
    }

    public void PointCloudClassificationColorToggle_OnValueChanged(bool newValue) {
        if (!isUpdating) {
            isUpdating = true;
            PointCloudImageColor.isOn = false;
            UpdateColors();
            isUpdating = false;
        }
    }

    public void ViewReconstructionButton_OnClick() {
        pointCloudCanvas.SetActive(false);
        reconstructCanvas.SetActive(true);

    }

    public void ReconstructionColorToggle_OnValueChanged(bool newValue)
    {
        if (!isUpdating) {
            isUpdating = true;
            ReconstructionUVs.isOn = false;
            UpdateTextures();
            isUpdating = false;
        }
    }

    public void ReconstructionUVsToggle_OnValueChanged(bool newValue) {
        if (!isUpdating) {
            isUpdating = true;
            ReconstructionColor.isOn = false;
            UpdateTextures();
            isUpdating = false;
        }
    }

    public void ResetCameraButton_OnClick()
    {
        camera.transform.position = Vector3.zero;
        camera.transform.rotation = Quaternion.identity;
    }

    public void UpdateColors()
    {
        float maxX = 0;
        float minX = 0;
        float maxZ = 0;
        float minZ = 0;
        if (PointCloudImageColor.isOn)
        {
            foreach (GameObject point in CloudManager.PointObjects)
            {
                point.GetComponent<Point>().SetColor(255, 255, 255, 0.0006f);
                print(point.transform.position);
            }
        }
        if (PointCloudClassificationColor.isOn)
        {
            foreach (Vector3 point in CloudManager.GetAllPoints())
            {
                if (point.x > maxX)
                    maxX = point.x;
                if (point.x < minX)
                    minX = point.x;
                if (point.z > maxZ)
                    maxZ = point.z;
                if (point.z < minZ)
                    minZ = point.z;
            }

            foreach (GameObject point in CloudManager.PointObjects)
            {
                if (point.transform.position.x >= maxX - 0.2f || point.transform.position.x <= minX + 0.2f)
                    point.GetComponent<Point>().SetColor(255, 0, 0, 1);
                else if (point.transform.position.z >= maxZ - 0.2f || point.transform.position.z <= minZ + 0.2f)
                    point.GetComponent<Point>().SetColor(255, 255, 0, 1);
                else
                    point.GetComponent<Point>().SetColor(0, 0, 255, 1);
            }
        }

        if (!PointCloudClassificationColor.isOn && !PointCloudImageColor.isOn)
        {
            foreach (GameObject point in CloudManager.PointObjects)
            {
                point.GetComponent<Point>().SetColor(255, 255, 255);
            }
        }
    }

    public void UpdateTextures() {
        // todo.
    }
}
