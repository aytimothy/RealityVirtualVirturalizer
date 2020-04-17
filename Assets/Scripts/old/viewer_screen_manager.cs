using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class viewer_screen_manager : MonoBehaviour
{
    //script to manage the inputs sent from screen interface
    void Start()
    {
        
    }

    void Update()
    {
        
    }

    public void project_screen_press()
    {
        SceneManager.LoadScene(0);
    }
}
