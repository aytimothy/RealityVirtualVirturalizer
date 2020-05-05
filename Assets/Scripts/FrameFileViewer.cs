using System.IO;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class FrameFileViewer : MonoBehaviour
{
    public TextFileViewer TextViewer;
    public ImageFileViewer ImageViewer;
    public TMP_Text FileName;
    public TMP_Text FileContent;
    RectTransform textTransform;

    void Update()
    {
        if (textTransform == null || FileContent == null)
            return;
        Vector2 size = new Vector2(textTransform.sizeDelta.x, FileContent.preferredHeight);
        textTransform.sizeDelta = size;
    }
    public void Show(string filePath)
    {
        // Ensure that the image and text viewer are not active
        TextViewer.gameObject.SetActive(false);
        ImageViewer.gameObject.SetActive(false);
        gameObject.SetActive(true);

        // Set the name of the file
        FileName.text = "<color=#FFFF00> File: </color>" + Path.GetFileName(filePath);

        // Load the frame data
        FrameData data = new FrameData(filePath);
        Frame frame = data.LoadFrame();

        // Assign the data to the FileContent
        FileContent.text =
            "seq: " + frame.seq.ToString() + "\n" +
            "timestamp: " + frame.timestamp.ToString() + "\n" +
            "frameid: " + frame.frameid.ToString() + "\n" +
            "posX: " + frame.posX.ToString() + "\n" +
            "posY: " + frame.posY.ToString() + "\n" +
            "posZ: " + frame.posZ.ToString() + "\n" +
            "rotX: " + frame.rotX.ToString() + "\n" +
            "rotY: " + frame.rotY.ToString() + "\n" +
            "rotZ: " + frame.rotZ.ToString() + "\n" +
            "accX: " + frame.accX.ToString() + "\n" +
            "accY: " + frame.accY.ToString() + "\n" +
            "accZ: " + frame.accZ.ToString() + "\n" +
            "gyrX: " + frame.gyrX.ToString() + "\n" +
            "gyrY: " + frame.gyrY.ToString() + "\n" +
            "gyrZ: " + frame.gyrZ.ToString() + "\n" +
            "angle min: " + frame.angle_min.ToString() + "\n" +
            "angle max: " + frame.angle_max.ToString() + "\n" +
            "angle increment: " + frame.angle_increment.ToString() + "\n" +
            "range min: " + frame.range_min.ToString() + "\n" +
            "range max: " + frame.range_max.ToString() + "\n" +
            "ranges: " + "\n";

        // Append ranges list
        if (frame.ranges != null)
        {
            foreach (float range in frame.ranges)
            {
                FileContent.text += range.ToString() + ", ";
            }
        }
        // Append intensitites list
        FileContent.text += "\nintensities: " + "\n";

        if (frame.intensities != null)
        {
            foreach (float intensity in frame.intensities)
            {
                FileContent.text += intensity.ToString() + ", ";
            }
        }
        // Append image format
        FileContent.text += "\nimgfmt: " + frame.imgfmt;

        /*try
        {
            var offset = frame.img[10] + frame.img[11] << 8 + frame.img[12] << 16 + frame.img[13] << 24;
            var height = frame.img[22] + frame.img[23] << 8 + frame.img[24] << 16 + frame.img[25] << 24;
            var width = frame.img[18] + frame.img[19] << 8 + frame.img[20] << 16 + frame.img[21] << 24;

            Color32[] img_clArray = new Color32[width * height];

            for (int i = 0; i < frame.img.Length - offset; i += 4)
            {
                var img_cl = new Color32(frame.img[offset + i + 0], frame.img[offset + i + 1], frame.img[offset + i + 2], frame.img[offset + i + 3]);
                img_clArray[i / 4] = img_cl;
            }

            Texture2D texture = new Texture2D(200, 200);
            texture.SetPixels32(img_clArray);

            imageTemplate.GetComponent<RawImage>().texture = texture;
        }
        catch { }*/

        textTransform = FileContent.GetComponent<RectTransform>();
    }
}
