using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using Random = UnityEngine.Random;

public class MeshBuilder : MonoBehaviour {
    public PointCloudManager pointCloudManager;
    public Transform displayPosition;
    public Mesh resultMesh;

    public Mesh GenerateMesh() {
        return GenerateMesh(pointCloudManager);
    }

    public Mesh GenerateMesh(PointCloudManager pointManager) {
        List<Vector3> points = new List<Vector3>();
        foreach (GameObject point in pointManager.PointObjects)
            points.Add(point.transform.position);
        return GenerateMesh(points.ToArray());
    }

    public Mesh GenerateMesh(Vector3[] points) {
        throw new NotImplementedException("Use _GenerateMesh(Vector3[]) instead!");

        // Remove all doubles.
        List<Vector3> finalPoints = new List<Vector3>(points).Distinct().ToList();

        List<Point2> edges = new List<Point2>();
        List<Point3> edgeTriangles = new List<Point3>();
        List<Point3> pointTriangles = new List<Point3>();

        Queue<int> edgeQueue = new Queue<int>();
        Queue<int> pointQueue = new Queue<int>();

        // Generate the initial triangle;
        int randomInitialPoint = Random.Range(0, finalPoints.Count - 1);


        Mesh mesh = new Mesh();
        mesh.vertices = finalPoints.ToArray();
        return mesh;
    }

    public Mesh _GenerateMesh(Vector3[] points) {
        // Get points from FrameManager.cs
        points = new List<Vector3>(points).Distinct().ToArray();

        int i = (points.Length) / 2;
        int cIndex = 0;
        double cPoint = 1000.00;

        // Initialise lists
        List<Point2> edges = new List<Point2>();
        List<Point2> queue = new List<Point2>();
        List<Point3> triangles = new List<Point3>();

        for (int p = 0; p < points.Length; p++) {
            // Avoid comparing the same point
            if (p == i) {
                continue;
            }
            //Calculate distance and record the minimum distance and index of that point
            double distance_ = Vector3.Distance(points[p], points[i]);
            if (distance_ < cPoint) {
                cPoint = distance_;
                cIndex = p;
            }

        }
        // Add an edge from the initial point to the closest point
        edges.Add(new Point2(i, cIndex));
        queue.Add(new Point2(i, cIndex));

        // Calculate midpoint
        Vector3 initialPMidpoint = new Vector3((points[0].x + points[cIndex].x) / 2.0f, (points[0].y + points[cIndex].y) / 2.0f, (points[0].z + points[cIndex].z) / 2.0f);

        // Determine the distance between the midpoint of the first edge and ever other point
        double minInitialDistance = 1000.0;
        int minInitialIndex = 0;
        for (int p = 0; p < points.Length; p++) {
            if (p == cIndex) {
                continue;
            }
            double distance_ = Vector3.Distance(points[p], initialPMidpoint);
            if (distance_ < minInitialDistance) {
                minInitialDistance = distance_;
                minInitialIndex = p;
            }
        }

        // Closest point has been found. Create 2 edges and create the initial triangle
        edges.Add(new Point2(cIndex, minInitialIndex));
        queue.Add(new Point2(cIndex, minInitialIndex));

        edges.Add(new Point2(i, minInitialIndex));
        queue.Add(new Point2(i, minInitialIndex));
        triangles.Add(new Point3(i, cIndex, minInitialIndex));

        // 3 edges in queue

        while (queue.Count > 0) {
            List<Point2> toEnqueue = new List<Point2>();

            foreach (Point2 edge in edges) {
                Vector3 midpoint = new Vector3((points[edge.x].x + points[edge.y].x) / 2.0f, (points[edge.x].y + points[edge.y].y) / 2.0f, (points[edge.x].z + points[edge.y].z) / 2.0f);

                double minDistance = 1000.00;
                int minIndex = 0;

                for (int p = 0; p < points.Length; p++) {
                    if (p == edge.x || p == edge.y) {
                        continue;
                    }
                    double distance_m_p = Vector3.Distance(points[p], midpoint);

                    if (distance_m_p < minDistance) {
                        minDistance = distance_m_p;
                        minIndex = p;
                    }
                }
                double closestDistance = 1000.0;
                int closestEdgeIndex = 0;

                for (int e = 0; e < edges.Count; e++) {
                    Vector3 edge_midpoint = new Vector3((points[edges[e].x].x + points[edges[e].y].x) / 2.0f, (points[edges[e].x].y + points[edges[e].y].y) / 2.0f, (points[edges[e].x].z + points[edges[e].y].z) / 2.0f);
                    double distance_e_p = Vector3.Distance(points[minIndex], edge_midpoint);

                    if (distance_e_p < closestDistance) {
                        closestEdgeIndex = e;
                        closestDistance = distance_e_p;
                    }
                }
                // If there is a closer edge for this point...
                if ((closestDistance < minDistance) && (minIndex != edges[closestEdgeIndex].x) && (minIndex != edges[closestEdgeIndex].y)) {
                    int val1 = edges[closestEdgeIndex].x;
                    int val2 = minIndex;
                    int val3 = edges[closestEdgeIndex].y;
                    Point2 edge1;
                    Point2 edge2;

                    // Bad sorting code to sort the edge index as we don't wont to have an edge of (1,4) and (4,1).
                    if (val1 < val2) {
                        edge1 = new Point2(val1, val2);
                    }
                    else {
                        edge1 = new Point2(val2, val1);
                    }

                    if (val3 < val2) {
                        edge2 = new Point2(val3, val2);
                    }
                    else {
                        edge2 = new Point2(val2, val3);
                    }
                    // Create a triangle with the 2 new edges
                    Point3 tri = new Point3(minIndex, edges[closestEdgeIndex].x, edges[closestEdgeIndex].y);

                    // Check that the triangle is not already known. If not, add it to the list.
                    if (!triangles.Contains(tri)) {
                        triangles.Add(tri);
                    }
                    // Check that the edge is not already known. If not, add it to the list.
                    if (!edges.Contains(edge1)) {
                        toEnqueue.Add(edge1);
                        edges.Add(edge1);
                    }
                    // Check that the edge is not already known. If not, add it to the list.
                    if (!edges.Contains(edge2)) {
                        toEnqueue.Add(edge2);
                        edges.Add(edge2);
                    }

                }
                // If there are no closer edges for this point...
                else if ((minIndex != edges[closestEdgeIndex].x) && (minIndex != edges[closestEdgeIndex].y)) {
                    int val1 = edge.x;
                    int val2 = minIndex;
                    int val3 = edge.x;

                    Point2 edge1;
                    Point2 edge2;

                    // Sort the edge values
                    if (val1 < val2) {
                        edge1 = new Point2(val1, val2);
                    }
                    else {
                        edge1 = new Point2(val2, val1);
                    }

                    if (val3 < val2) {
                        edge2 = new Point2(val3, val2);
                    }
                    else {
                        edge2 = new Point2(val2, val3);
                    }
                    // Create a triangle with the new edges
                    Point3 tri = new Point3(minIndex, edge.x, edge.y);

                    // Check that the triangle is not already known. If not, add it to the list.
                    if (!triangles.Contains(tri)) {
                        triangles.Add(tri);
                    }
                    // Check that the edge is not already known. If not, add it to the list.
                    if (!edges.Contains(edge1)) {
                        toEnqueue.Add(edge1);
                        edges.Add(edge1);
                    }
                    // Check that the edge is not already known. If not, add it to the list.
                    if (!edges.Contains(edge2)) {
                        toEnqueue.Add(edge2);
                        edges.Add(edge2);
                    }

                }

            }

            queue.Clear();

            foreach (Point2 item in toEnqueue) {
                queue.Add(item);
            }

        }

        Mesh mesh = new Mesh();
        mesh.vertices = points;
        List<int> triangleArray = new List<int>();
        foreach (Point3 triangle in triangles) {
            triangleArray.Add(triangle.x);
            triangleArray.Add(triangle.y);
            triangleArray.Add(triangle.z);
        }
        mesh.triangles = triangleArray.ToArray();
        return mesh;
    }

    public static string Mesh2OBJ(Mesh mesh) {
        throw new NotImplementedException();
    }

    public static string OBJ2Mesh(string obj, bool isFilePath = false) {
        throw new NotImplementedException();
    }
}