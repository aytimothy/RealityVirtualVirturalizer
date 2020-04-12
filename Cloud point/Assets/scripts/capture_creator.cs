using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using System.IO;
using UnityEngine.UI;

public class capture_creator : MonoBehaviour
{
    FileInfo scanned_file = new FileInfo(scan_data_test.path);
    public Text path;

    DirectoryInfo captures_folder;

    public static int fileName = 0;
    void Start()
    {

    }

    void Update()
    {

    }
    public void set_path()
    {
        try
        {
            captures_folder = new DirectoryInfo(path + @"\" + scanned_file.Name + @"\");
        }
        catch
        {
            print("caminho vazio ou pasta não encontrada");
        }


        if (Input.GetKeyDown(KeyCode.Z))
        {
            FileInfo[] files = captures_folder.GetFiles();
            if (files != null)
            {
                foreach (FileInfo f in files)
                {
                    if (f.Extension == ".png" || f.Extension == ".PNG")
                        fileName++;
                }
            }
            ScreenCapture.CaptureScreenshot(captures_folder + fileName.ToString());
        }
    }
}
