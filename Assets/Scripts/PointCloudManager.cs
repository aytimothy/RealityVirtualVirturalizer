using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PointCloudManager : MonoBehaviour {
    public GameObject PointPrefab;
    public Transform ContainerTransform;
    public List<GameObject> PointObjects = new List<GameObject>();

    public void AddPoint(Vector3 position) {
        GameObject newPointObject = Instantiate(PointPrefab, ContainerTransform);
        newPointObject.transform.position = position;
        PointObjects.Add(newPointObject);
    }

    public void RemovePoints(Vector3 position, float tolerance = 0.0001f) {
        foreach (GameObject pointObject in PointObjects) {
            float distance = Vector3.Distance(position, pointObject.transform.position);
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
