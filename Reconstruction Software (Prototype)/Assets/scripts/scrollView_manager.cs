using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.IO;

public class scrollView_manager : MonoBehaviour
{
    //scrip to manage the scroll view of "open file" menu

    //template of the buttons to represent projects to select
    [SerializeField]
    private GameObject buttonTemplate;

    string[] folders;
    void Start()
    {

    }

    void Update()
    {
        try
        {
            folders = new string[Directory.GetDirectories(main_menu_manager.projectsFolder.FullName).Length];
            int index = 0;
            foreach (string f in Directory.GetDirectories(main_menu_manager.projectsFolder.FullName))
            {
                folders.SetValue(f, index);
            }
            foreach (string folder in folders)
            {
                GameObject project = Instantiate(buttonTemplate) as GameObject;
                project.SetActive(true);

                project.GetComponent<button_file>().setText(folder);
                project.transform.SetParent(buttonTemplate.transform.parent, false);
            }
        }
        catch { }
    }
}
