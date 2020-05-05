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
    public void Show(string filePath)
    {
        // Ensure that the image and text viewer gameobjects are not active
        TextViewer.gameObject.SetActive(false);
        ImageViewer.gameObject.SetActive(false);
        gameObject.SetActive(true);
        FileName.text = "<color=#FFFF00> File: </color>" + Path.GetFileName(filePath);
    }
}
