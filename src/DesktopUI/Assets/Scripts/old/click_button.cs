using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class click_button : MonoBehaviour
{
    //when the "BACK" buttom is clicked, this script is invoked to go back to project screen
    public void click()
    {
        SceneManager.LoadScene(0);
    }
}
