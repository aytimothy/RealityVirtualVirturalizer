using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class scan_data_test : MonoBehaviour
{
    //main script of the project. Will be used to receive all the information from the project screen, and use it to build a point cloud
    //as result from the scanner data

    //"point" game object. Every point of the cloud building will use it as a material
    public GameObject cloud_point;

    //the scan maximun coordinates
    public static int maxX;
    public static int maxY;
    public static int maxZ;

    //the complete name of the file to be scanned
    public static string path;
    
    //auxiliar variable that will be used to turn the camera on the right direction
    GameObject target_point;

    void Start()
    {
        //receive data from "messager" script and store the coordinates information collected
        maxX = messager.maxX;
        maxY = messager.maxY;
        maxZ = messager.maxZ;

        //create a StreamReader object to read all the lines from the file
        System.IO.StreamReader scan_file 
            = new System.IO.StreamReader(messager.file_path);
        string line;
        //add each line readed to a Dictionary variable and associate it to a "cloud_point" object
        Dictionary<string, GameObject> scanned = new Dictionary<string, GameObject>();
        while((line = scan_file.ReadLine()) != null)
        {
            scanned.Add(line, cloud_point);
        }

        //scann all the information collected and added to the Dictionary, and use it as coordinates to instantiate the 
        //cloud_point objects
        foreach(string i in scanned.Keys)
        {
            Vector3 vector = new Vector3();
            char[] s = i.ToCharArray();

            //use the maximun coordinate values collected from the project screen to determinate how to read the information from
            //the file correctly. This way, the scanner coordinates will support numbers with up to five digits
            //X digits
            int x = 0;
            {
                if (maxX <= 10)
                {
                    x = 1;
                    vector = new Vector3(s[0], vector.y, vector.z);
                }
                else if (maxX > 10 && maxX <= 100)
                {
                    x = 2;
                    vector = new Vector3(s[0] + s[1], vector.y, vector.z);
                }
                else if (maxX > 100 && maxX <= 1000)
                {
                    x = 3;
                    vector = new Vector3(s[0] + s[1] + s[2], vector.y, vector.z);
                }
                else if (maxX > 1000 && maxX <= 10000)
                {
                    x = 4;
                    vector = new Vector3(s[0] + s[1] + s[2] + s[3], vector.y, vector.z);
                }
                else if(maxX > 10000 & maxX <= 100000)
                {
                    x = 5;
                    vector = new Vector3(s[0] + s[1] + s[2] + s[3] + s[4], vector.y, vector.z);
                }
            }
            //Y digits
            int y = 0;
            {
                if (maxY <= 10)
                {
                    y = x + 1;
                    vector = new Vector3(vector.x, s[x], vector.z);
                }
                else if (maxY > 10 && maxY <= 100)
                {
                    y = x + 2;
                    vector = new Vector3(vector.x, s[x] + s[x + 1], vector.z);
                }
                else if (maxY > 100 && maxY <= 1000)
                {
                    y = x + 3;
                    vector = new Vector3(vector.x, s[x] + s[x + 1] + s[x + 2], vector.z);
                }
                else if (maxY > 1000 && maxY <= 10000)
                {
                    y = x + 4;
                    vector = new Vector3(vector.x, s[x] + s[x + 1] + s[x + 2] + s[x + 3], vector.z);
                }
                else if(maxY > 10000 && maxY <= 100000)
                {
                    y = x + 5
;
                    vector = new Vector3(vector.x, s[x] + s[x + 1] + s[x + 2] + s[x + 3] + s[x + 4], vector.z);
                }
            }
            //Z digits
            int z = 0;
            {
                if (maxZ <= 10)
                {
                    z = y + 1;
                    vector = new Vector3(vector.x, vector.y, s[y]);
                }
                else if (maxZ > 10 && maxZ <= 100)
                {
                    z = y + 2;
                    vector = new Vector3(vector.x, vector.y, s[y] + s[y + 1]);
                }
                else if (maxZ > 100 && maxZ <= 1000)
                {
                    z = y + 3;
                    vector = new Vector3(vector.x, vector.y, s[y] + s[y + 1] + s[y + 2]);
                }
                else if (maxZ > 1000 && maxZ <= 10000)
                {
                    z = y + 4;
                    vector = new Vector3(vector.x, vector.y, s[y] + s[y + 1] + s[y + 2] + s[y + 3]);
                }
                else if(maxZ > 10000 && maxZ <= 100000)
                {
                    z = y + 5;
                    vector = new Vector3(vector.x, vector.y, s[y] + s[y + 1] + s[y + 2] + s[y + 3] + s[y + 4]);
                }
            }

            //name the cloud point object to be build with its corresponding position
            scanned[i].name = i;
            //instantiate the point on map
            Instantiate(scanned[i], vector, transform.rotation);
            //move the camera to a apropriate position, corresponding to the point cloud position on map
            transform.position = new Vector3(s[0] + (maxX / 2), s[0] + (maxY / 2), vector.z + (maxZ / 2));
            
            //name the auxiliar variable with the last point built
            target_point = scanned[i];
        }
    }

    void Update()
    {
        try
        {
            //make the camera always look at the corresponding target point
            transform.LookAt(target_point.transform.position);

            //move the camera forward corresponding to the mouse scroll movemment
            transform.Translate(Vector3.forward * Input.mouseScrollDelta.y);
            //move the camera right or left corresponding to keyboard arrow keys
            transform.Translate(Vector2.right * Input.GetAxis("Horizontal") * Time.deltaTime);
            //move the camera up or down corresponding to keyboard arrow keys
            transform.Translate(Vector2.up * Input.GetAxis("Vertical") * Time.deltaTime);
        }
        catch { }
    }
}
