using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraController : MonoBehaviour {
    public float mouseSensitivity = 0.1f;
    public float walkSpeed = 5f;
    public float runSpeed = 10f;
    public bool invertVertical = true;
    public bool invertHorizontal = false;

    Vector3 mousePosition;
    Vector3 cameraRotation;

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