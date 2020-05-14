using System.Collections.Generic;
using UnityEngine;

public class PanelController : MonoBehaviour {
    public GameObject OutsideDetectorGameObject;
    public List<GameObject> TargetObject;
    public int LastMenuID;
    public void OpenButton_OnClick(int menuID) {
        if (LastMenuID != -1)
            TargetObject[LastMenuID].SetActive(false);
        OutsideDetectorGameObject.SetActive(true);
        TargetObject[menuID].SetActive(true);
        LastMenuID = menuID;
    }

    public void CloseButton_OnClick() {
        if (LastMenuID == -1)
            return;
        OutsideDetectorGameObject.SetActive(false);
        TargetObject[LastMenuID].SetActive(false);
        LastMenuID = -1;
    }
}