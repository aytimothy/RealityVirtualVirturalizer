using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PointCloudManager : MonoBehaviour {
    public GameObject PointPrefab;
    public Transform ContainerTransform;
    public List<GameObject> PointObjects = new List<GameObject>();

    public void AddPoint(Vector3 position) {
        GameObject newPointObject = Instantiate(PointPrefab, ContainerTransform);
        newPointObject.transform.localPosition = position;
        PointObjects.Add(newPointObject);
    }

    public void RemovePoints(Vector3 position, float tolerance = 0.0001f, bool global = true) {
        foreach (GameObject pointObject in PointObjects) {
            float distance = Vector3.Distance(position, (global) ? pointObject.transform.position : pointObject.transform.localEulerAngles);
            if (distance <= tolerance)
                Destroy(pointObject);
        }

        PointObjects.RemoveAll(null);
    }

    public Vector3[] GetAllPoints() {
        List<Vector3> pointList = new List<Vector3>();
        foreach (GameObject pointObject in PointObjects)
            pointList.Add(pointObject.transform.position);
        return pointList.ToArray();
    }
}
