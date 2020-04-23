using UnityEditor;
using UnityEngine;

public class ClearPlayerPrefs : MonoBehaviour
{
    [MenuItem ("File/Clear PlayerPrefs")]
    public static void ClearPlayerPrefs_OnClick() {
        PlayerPrefs.DeleteAll();
        PlayerPrefs.Save();
    }

    [MenuItem ("File/Clear EditorPrefs")]
    public static void ClearEditorPrefs_OnClick() {
        EditorPrefs.DeleteAll();
    }
}
