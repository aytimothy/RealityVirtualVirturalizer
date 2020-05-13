using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Point2 {
    public int x;
    public int y;

    public Point2(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

public class Point3 {
    public int x;
    public int y;
    public int z;

    public Point3(int x, int y, int z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

public static class PointUtils {
    public static Vector3 ToVector3(this Point3 point) {
        return new Vector3(point.x, point.y, point.z);
    }

    public static Vector2 ToVector2(this Point2 point) {
        return new Vector2(point.x, point.y);
    }

    public static Point2 ToPoint2(this Vector2 vector) {
        return new Point2((int)vector.x, (int)vector.y);
    }

    public static Point3 ToPoint3(this Vector3 vector) {
        return new Point3((int)vector.x, (int)vector.y, (int)vector.z);

    }
}