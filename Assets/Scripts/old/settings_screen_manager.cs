using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class settings_screen_manager : MonoBehaviour
{
    //script to manage the inputs sent from screen interface
    void Start()
    {
        
    }

    void Update()
    {
        
    }

    //this function is called when "project screen" button is pressed
    public void project_screen_press()
    {
        //load project screen
        SceneManager.LoadScene(0);
    }
    //this function is called when "manage projects" button is pressed
    public void manage_projects_press()
    {
        //load projects management screen
        SceneManager.LoadScene(4);
    }
    //this function is called when "create new project" button is pressed
    public void create_new_project()
    {
        //load screen to create new project
        SceneManager.LoadScene(5);
    }
}
