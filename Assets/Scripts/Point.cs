using UnityEngine;

public class Point : MonoBehaviour {
    public MeshRenderer renderer;
    public Color TextureColor;
    public Color ClassificationColor;

    public void SetColor(Color color) {
        renderer.material.color = color;
    }

    // rgba = Red/Green/Blue Color Channels + Alpha, and 'i' is intensitiy in HDR. Usually this is 0 because 2^0 = 1.
    public void SetColor(float r, float g, float b, float a = 1f, float i = 0f) {
        Color color = new Color(r, g, b, a);
        SetColor(color * Mathf.Pow(2, i));
    }
}