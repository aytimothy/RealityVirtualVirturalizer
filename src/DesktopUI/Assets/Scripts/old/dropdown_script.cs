using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class dropdown_script : MonoBehaviour
{
    //script responsible for the input management on the project screen. It will convert the text information on 
    //the input fields into file data and the scanner coordinates

    //name (with exctension) of the file to be scanned
    public Text file_name;
    //path of the folder where is stored all the scanner data files
    public Text path_file;

    //data collected from the input field for the XYZ coordinates of the scanner
    public InputField Xvalue;
    public InputField Yvalue;
    public InputField Zvalue;
    void Start()
    {
        
    }

    //when this function is called, set the messager script coordinate variables to the values got from InputField values
    public void set_values()
    {
        messager.maxX = int.Parse(Xvalue.text);
        messager.maxY = int.Parse(Yvalue.text);
        messager.maxY = int.Parse(Zvalue.text);
    }
    void Update()
    {

        //set the complete file path for the scanner
        try
        {
            if (file_name.text != null && path_file.text != null)
                messager.file_path = path_file.text + file_name.text;
        }
        catch
        {
            print(file_name.text);
        }

    }
    //this function is called when the "settings" button is pressed
    public void press_settings()
    {
        //load the Remote Linkup Settings screen
        SceneManager.LoadScene(2);
    }
    //this function is called when the "view reconstructions" buttons is pressed
    public void press_view_reconstructions()
    {
        //load the viewer screen
        SceneManager.LoadScene(3);
    }
    //this function is called when the "SCAN" button is pressed
    public void press_SCAN()
    {
        //set all the values that will be used by "scan_data_test" script and load the point cloud screen
        try
        {
            set_values();
            scan_data_test.maxX = messager.maxX;
            scan_data_test.maxY = messager.maxY;
            scan_data_test.maxZ = messager.maxZ;
            SceneManager.LoadScene(1);
        }
        catch
        {
            scan_data_test.path = messager.file_path;
        }
    }
}
