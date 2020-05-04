using System.IO;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class ImageFileViewer : MonoBehaviour
{
    public TMP_Text FileName;
    public void Show(string filePath)
    {
        gameObject.SetActive(true);
        FileName.text = "<color=#FFFF00> File: </color>" + Path.GetFileName(filePath);
    }
}
