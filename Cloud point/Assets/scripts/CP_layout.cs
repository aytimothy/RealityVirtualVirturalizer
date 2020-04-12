using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class CP_layout : MonoBehaviour
{
    //script turned to layout and interface management

    //the position and size of the panel where will be displayed all the text files in selected folder
    public Rect panel_rect;

    //the text collected from InputField "Enter folder path"
    public Text path;

    //file and directory variables
    System.IO.DirectoryInfo directory;
    System.IO.FileInfo[] files;
    
    //string array variable used to store the names of the files on the folder
    string[] capture_thumbs = new string[500];
    void Start()
    {

    }
    bool gui = false;
    bool exception = false;
    public void add_path()
    {
        //try to get the directory inserted on the text InputField, and locate all files inside of it, than store all the names
        //in the "capture_thumbs" string array
        try
        {
            directory = new System.IO.DirectoryInfo(path.text);
            files = directory.GetFiles();
            exception = false;

            int i = 0;
            foreach (System.IO.FileInfo file in files)
            {
                if (file.Extension == ".txt")
                {
                    capture_thumbs.SetValue(file.Name, i);
                    print(capture_thumbs[i]);
                    i++;
                }
            }

            gui = true;
        }
        //if the code doesn't find the folder, turn the bool variable ahead into "true"
        catch
        {
            exception = true;
        }  
    }
    public GUIStyle gg;

    public Rect warningRect;
    public GUIStyle warningStyle;
    string warning;
    private void OnGUI()
    {
        //if "exception" is true, a warning red text will apear to show that the folder address needs to be writen again
        GUI.Label(warningRect, warning, warningStyle);
        if (exception)
            warning = "directory not found! Try writing again.";
        else
            warning = "";

        //code to show the names of all text files inside of the selected folder, on vertical alignment
        if (gui)
        {
            string n = "";
            for (int s = 0; s < capture_thumbs.Length; s++)
            {
                if (capture_thumbs[s] != null)
                {
                     GUI.Label(panel_rect, n + capture_thumbs[s], gg);
                     n += "\n";
                }
            }
        }
    }
    void Update()
    {
        
    }
}
