using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class button_file : MonoBehaviour
{
    [SerializeField]
    private Text buttonText;

    public GameObject scrollview;
    public GameObject option_panel;
    public void setText(string text)
    {
        buttonText.text = text;
    }
    private void Update()
    {
        if (option_panel.activeInHierarchy && Input.GetMouseButtonDown(2))
            option_panel.SetActive(false);

    }
    public void Onclick()
    {
        option_panel.SetActive(true);
    }
    public void load_click()
    {
        try
        {
            try
            { main_menu_manager.project_file = new System.IO.FileInfo(messager.project_file_path); }
            catch { }
            main_menu_manager.project_file = new System.IO.FileInfo(main_menu_manager.project_folder + @"\" + buttonText.text + ".txt");
            messager.project_file_path = main_menu_manager.project_file.FullName;
            option_panel.SetActive(false);
            scan_data_test.maxX = messager.maxX;
            scan_data_test.maxY = messager.maxY;
            scan_data_test.maxZ = messager.maxZ;

            main_menu_manager.main_menu_static.enabled = false;
            main_menu_manager.viewer_static.enabled = true;
        }
        catch { }
    }
    public void delete_click()
    {
        System.IO.Directory.Delete(main_menu_manager.project_folder.FullName);
        option_panel.SetActive(false);
        SceneManager.LoadScene(0);
    }
}
