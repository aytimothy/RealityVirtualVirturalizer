using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.IO;
using UnityEngine.SceneManagement;

public class main_menu_manager : MonoBehaviour
{
    //used on "create new project" menu
    public Text project_name;
    public Text dialog_file;
    public static string dialog_file_path;
    public static DirectoryInfo project_folder;
    public static FileInfo project_file;
    public GameObject warning;

    //used on "settings" menu
    public Text dialog_folder;
    public Text projects_folder;
    public static DirectoryInfo projectsFolder;
    public Text maxX;
    public Text maxY;
    public Text maxZ;

    //used on main menu generals
    public Image CREATE_NEW_PANEL;
    public Image OPEN_FILE_PANEL;
    public Image SETTINGS_PANEL;

    public Button create_new;
    public Button open_file;
    public Button settings;

    public Button[] recents;
    public Text recents_text;
    void Start()
    {

    }

    void Update()
    {
        try
        {
            projectsFolder = new DirectoryInfo(projects_folder.text);
            project_file = new FileInfo(messager.project_file_path);
        }
        catch { }
        try
        {
            messager.maxX = int.Parse(maxX.text);
            messager.maxY = int.Parse(maxY.text);
            messager.maxZ = int.Parse(maxZ.text);
        }
        catch { }
    }

    //used when, on "create new project" menu, user click to create the project
    public void create_project_click()
    {
        //gets the complete path of the selected dialog file
        try
        {
            if (dialog_file.text != null && dialog_folder.text != null)
                dialog_file_path = dialog_folder.text + @"\" + dialog_file.text;
        }
        catch
        {
            print("path not find");
        }
        try
        {
            //creates the project folder, with the project file (where will be saved project settings)
            Directory.CreateDirectory(projects_folder.text + @"\" + project_name.text);
            project_folder = new DirectoryInfo(projects_folder.text + @"\" + project_name.text);
            File.Create(projects_folder.text + @"\" + project_name.text);
            project_file = new FileInfo(project_folder + @"\" + project_name.text + ".txt");
            //moves the dialog file to project folder
            File.Move(dialog_file_path, project_folder + dialog_file.text);

            messager.project_file_path = project_file.FullName;
            scan_data_test.path = messager.project_file_path;
            scan_data_test.maxX = messager.maxX;
            scan_data_test.maxY = messager.maxY;
            scan_data_test.maxZ = messager.maxZ;
            //load viewer screen
            SceneManager.LoadScene(1);
        }
        catch
        {
            warning.SetActive(true);
            //SceneManager.LoadScene(1);
            print("no file detected");
        }
        
    }

    //used when user clicks to open "create new project" menu
    public void create_new_click()
    {
        create_new.interactable = false;
        open_file.interactable = true;
        settings.interactable = true;
        foreach(Button button in recents)
        {
            button.gameObject.SetActive(false);
        }
        recents_text.enabled = false;
        CREATE_NEW_PANEL.gameObject.SetActive(true);
        OPEN_FILE_PANEL.gameObject.SetActive(false);
        SETTINGS_PANEL.gameObject.SetActive(false);
    }
    //used when, on "create new project" menu, user click to go main to main screen
    public void back_create_click()
    {
        CREATE_NEW_PANEL.gameObject.SetActive(false);
        OPEN_FILE_PANEL.gameObject.SetActive(false);
        SETTINGS_PANEL.gameObject.SetActive(false);
        create_new.interactable = true;
        foreach (Button button in recents)
        {
            button.gameObject.SetActive(true);
        }
        recents_text.enabled = true;
    }

    //used when user clicks to open existing project
    public void open_file_click()
    {
        create_new.interactable = true;
        open_file.interactable = false;
        settings.interactable = true;
        foreach (Button button in recents)
        {
            button.gameObject.SetActive(false);
        }
        recents_text.enabled = false;
        CREATE_NEW_PANEL.gameObject.SetActive(false);
        OPEN_FILE_PANEL.gameObject.SetActive(true);
        SETTINGS_PANEL.gameObject.SetActive(false);
    }

    //used when user click to open settings menu
    public void settings_click()
    {
        create_new.interactable = true;
        open_file.interactable = true;
        settings.interactable = false;
        foreach (Button button in recents)
        {
            button.gameObject.SetActive(false);
        }
        recents_text.enabled = false;
        CREATE_NEW_PANEL.gameObject.SetActive(false);
        OPEN_FILE_PANEL.gameObject.SetActive(false);
        SETTINGS_PANEL.gameObject.SetActive(true);
    }
}
