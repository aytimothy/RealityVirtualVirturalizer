using System.IO;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class TextFileViewer : MonoBehaviour
{
    public FrameFileViewer FrameViewer;
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
        // Ensure that the frame and image viewer gameobjects are not active
        FrameViewer.gameObject.SetActive(false);
        ImageViewer.gameObject.SetActive(false);
        gameObject.SetActive(true);
        FileName.text = "<color=#FFFF00> File: </color>" + Path.GetFileName(filePath);
        FileContent.text = File.ReadAllText(filePath);
        textTransform = FileContent.GetComponent<RectTransform>();
    }
}
