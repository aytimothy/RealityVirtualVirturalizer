using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class PreferredTextHeight : MonoBehaviour
{
    public TMP_Text text;
    RectTransform textTransform;

    void Start() {
        textTransform = text.GetComponent<RectTransform>();
    }

    void Update() {
        if (textTransform == null || text == null)
            return;
        Vector2 size = new Vector2(textTransform.sizeDelta.x, text.preferredHeight);
        textTransform.sizeDelta = size;
        Debug.Log(size);
    }
}
