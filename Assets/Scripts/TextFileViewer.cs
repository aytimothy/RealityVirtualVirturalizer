using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using System.IO;
using UnityEngine.UI;

public class TextFileViewer : MonoBehaviour {
    public TMP_Text Label;
    public string FilePath;
    public void Show(string filePath) {
        gameObject.SetActive(true);
        Label.text = "<color=#FFFF00>" + Path.GetFileName(filePath) + "</color>";
        FilePath = filePath;
    }
}
