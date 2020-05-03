using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using System.IO;
using TMPro.EditorUtilities;
using UnityEngine.UI;

public class TextFileViewer : MonoBehaviour {
    public TMP_Text Label;
    public string FilePath;
    public void Show(string filePath) {
        Label = GetComponent<TMP_Text>();
        Label.text = Path.GetFileName(filePath);
        FilePath = filePath;
        //throw new System.NotImplementedException();
    }
}
