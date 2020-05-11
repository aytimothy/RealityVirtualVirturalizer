using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UniversalHotkeys : MonoBehaviour {
    public bool IsFullScreen {
        get { return PlayerPrefs.GetInt("FullScreen", 0) == 1; }
        set {
            PlayerPrefs.SetInt("FullScreen", (value) ? 1 : 0 );
            PlayerPrefs.Save();
        }
    }

    void Awake() {
        CheckFullscreen();

        void CheckFullscreen() {
            if (Screen.fullScreen != IsFullScreen)
                Screen.fullScreen = IsFullScreen;
        }
    }

    void Update() {
        if (Input.GetKeyDown(KeyCode.F11)) {
            ToggleFullscreen();
        }

        void ToggleFullscreen() {
            Screen.fullScreen = !Screen.fullScreen;
            IsFullScreen = Screen.fullScreen;
        }
    }
}
