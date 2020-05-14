using UnityEditor;
using UnityEngine;

public class ClearPlayerPrefs : MonoBehaviour
{
    [MenuItem ("Edit/Clear PlayerPrefs")]
    public static void ClearPlayerPrefs_OnClick() {
        PlayerPrefs.DeleteAll();
        PlayerPrefs.Save();
    }

    [MenuItem ("Edit/Clear EditorPrefs")]
    public static void ClearEditorPrefs_OnClick() {
        EditorPrefs.DeleteAll();
    }
}
