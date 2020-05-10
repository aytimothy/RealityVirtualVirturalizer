using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CheatDotStamper : MonoBehaviour {
    public Camera camera;

    public PointCloudManager pointManager;
    public FrameManager frameManager;
    FrameData[] tempFrameBuffer;
    public float cameraDistance = 0.05f;
    public float focalLength = 0.05f;

    public void Stamp() {
        if (progress == 0f || progress == 1f) {
            tempFrameBuffer = frameManager.Frames.ToArray();
            progress = 0;
            StartCoroutine(_Stamp());
        }
    }

    public float progress;
    int _progress;

    IEnumerator _Stamp() {
        foreach (FrameData frameData in tempFrameBuffer) {
            if (!frameData.Loaded)
                frameData.LoadFrame();
            Stamp(frameData.Data, pointManager, cameraDistance, focalLength);
            _progress++;
            progress = (float)_progress / (float)tempFrameBuffer.Length;
            yield return new WaitForEndOfFrame();
        }

        progress = 1f;
        yield return null;
    }

    public void Stamp(Frame frame, PointCloudManager points, float cameraDistance, float focalLength, bool forceSet = false) {
        // position cheat camera
        camera.transform.eulerAngles = new Vector3(frame.rotX, frame.rotY, frame.rotZ);
        camera.transform.position = new Vector3(frame.posX, frame.posY, frame.posZ) + (camera.transform.up * cameraDistance);
        camera.focalLength = focalLength;

        // load frame texture
        Texture2D texture = new Texture2D(1, 1);
        texture.LoadImage(frame.img);

        foreach (GameObject point in points.PointObjects) {
            Vector3 cameraPos = camera.WorldToScreenPoint(point.transform.position);
            // if a point is in view of the camera, calc where it is on the screen
            if (cameraPos.x >= 0 && cameraPos.x <= 1 && cameraPos.z >= 0 && cameraPos.z <= 0) {
                // assign color to point from texture
                Point pointController = point.GetComponent<Point>();
                pointController.TextureColor = texture.GetPixel(Mathf.RoundToInt(cameraPos.x * texture.width), Mathf.RoundToInt(cameraPos.y * texture.height));
                if (forceSet)
                    pointController.SetColor(pointController.TextureColor);
            }
        }
    }
}
