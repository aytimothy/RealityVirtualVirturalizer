using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour {
    public float mouseSensitivity = 0.1f;
    public float walkSpeed = 5f;
    public float runSpeed = 10f;
    public bool invertVertical = true;
    public bool invertHorizontal = false;
    public Camera camera;

    Vector3 mousePosition;
    Vector3 cameraRotation;

    void Awake() {
        walkSpeed = PlayerPrefs.GetFloat("WalkSpeed", 5f);
        runSpeed = PlayerPrefs.GetFloat("WalkSpeed", 5f) * 2f;
        mouseSensitivity = PlayerPrefs.GetFloat("LookSensitivity");
        float red = PlayerPrefs.GetFloat("BackgroundRed", 0f);
        float green = PlayerPrefs.GetFloat("BackgroundGreen", 0f);
        float blue = PlayerPrefs.GetFloat("BackgroundBlue", 0f);
        camera.backgroundColor = new Color(red, green, blue, 1f);
    }

    public void UpdateWalkSpeed(float speed) {
        PlayerPrefs.SetFloat("WalkSpeed", speed);
        walkSpeed = speed;
        runSpeed = speed * 2f;
    }

    public void UpdateMouseSensitivity(float sensitivity) {
        PlayerPrefs.SetFloat("LookSensitivity", sensitivity);
        mouseSensitivity = sensitivity;
    }

    public void UpdateBackgroundColor(Color color) {
        PlayerPrefs.SetFloat("BackgroundRed", color.r);
        PlayerPrefs.SetFloat("BackgroundGreen", color.g);
        PlayerPrefs.SetFloat("BackgroundBlue", color.b);
        camera.backgroundColor = new Color(color.r, color.g, color.b, 1f);
    }

    void Update() {
        float effectiveMovementSpeed = (Input.GetKey(KeyCode.LeftShift) || Input.GetKey(KeyCode.RightShift)) ? runSpeed : walkSpeed;
        transform.position += transform.forward * effectiveMovementSpeed * Time.deltaTime * Input.GetAxis("Vertical");
        transform.position += transform.right * effectiveMovementSpeed * Time.deltaTime * Input.GetAxis("Horizontal");
        if (Input.GetKey(KeyCode.Q)) {
            transform.position += transform.up * effectiveMovementSpeed * Time.deltaTime;
        }
        if (Input.GetKey(KeyCode.E)) {
            transform.position -= transform.up * effectiveMovementSpeed * Time.deltaTime;
        }

        if (Input.GetMouseButtonDown(0) || Input.GetMouseButtonDown(1)) {
            mousePosition = Input.mousePosition;
            cameraRotation = transform.eulerAngles;
        }
        if (Input.GetMouseButton(0) || Input.GetMouseButton(1)) {
            Vector3 deltaMouse = Input.mousePosition - mousePosition;
            Vector3 deltaRotation = new Vector3(mouseSensitivity * deltaMouse.y * ((invertVertical) ? -1f : 1f), mouseSensitivity * deltaMouse.x * ((invertHorizontal) ? -1f : 1f), 0f);
            transform.eulerAngles = cameraRotation + deltaRotation;
        }
    }
}