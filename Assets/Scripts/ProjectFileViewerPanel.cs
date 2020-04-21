using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.IO;
using System.Drawing;
public class ProjectFileViewerPanel : MonoBehaviour
{
    [SerializeField]
    private GameObject infoTemplate;
    [SerializeField]
    private RawImage imageTemplate;

    public static FileInfo file;
    void Start()
    {
        FrameData data = new FrameData(file.FullName);

        GameObject seq = Instantiate(infoTemplate.gameObject) as GameObject;
        seq.SetActive(true);
        seq.GetComponent<Text>().text = "seq: " + data.LoadFrame().seq.ToString();
        seq.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject timestamp = Instantiate(infoTemplate.gameObject) as GameObject;
        timestamp.SetActive(true);
        timestamp.GetComponent<Text>().text = "timestamp: " + data.LoadFrame().timestamp.ToString();
        timestamp.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject frameid = Instantiate(infoTemplate.gameObject) as GameObject;
        frameid.SetActive(true);
        frameid.GetComponent<Text>().text = "frameid: " + data.LoadFrame().frameid.ToString();
        frameid.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject posX = Instantiate(infoTemplate.gameObject) as GameObject;
        posX.SetActive(true);
        posX.GetComponent<Text>().text = "posX: " + data.LoadFrame().posX.ToString();
        posX.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject posY = Instantiate(infoTemplate.gameObject) as GameObject;
        posY.SetActive(true);
        posY.GetComponent<Text>().text = "posY: " + data.LoadFrame().posY.ToString();
        posY.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject posZ = Instantiate(infoTemplate.gameObject) as GameObject;
        posZ.SetActive(true);
        posZ.GetComponent<Text>().text = "posZ: " + data.LoadFrame().posZ.ToString();
        posZ.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject rotX = Instantiate(infoTemplate.gameObject) as GameObject;
        rotX.SetActive(true);
        rotX.GetComponent<Text>().text = "rotX: " + data.LoadFrame().rotX.ToString();
        rotX.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject rotY = Instantiate(infoTemplate.gameObject) as GameObject;
        rotY.SetActive(true);
        rotY.GetComponent<Text>().text = "rotY: " + data.LoadFrame().rotY.ToString();
        rotY.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject rotZ = Instantiate(infoTemplate.gameObject) as GameObject;
        rotZ.SetActive(true);
        rotZ.GetComponent<Text>().text = "rotZ: " +  data.LoadFrame().rotZ.ToString();
        rotZ.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject accX = Instantiate(infoTemplate.gameObject) as GameObject;
        accX.SetActive(true);
        accX.GetComponent<Text>().text = "accX: " + data.LoadFrame().accX.ToString();
        accX.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject accY = Instantiate(infoTemplate.gameObject) as GameObject;
        accY.SetActive(true);
        accY.GetComponent<Text>().text = "accY: " + data.LoadFrame().accY.ToString();
        accY.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject accZ = Instantiate(infoTemplate.gameObject) as GameObject;
        accZ.SetActive(true);
        accZ.GetComponent<Text>().text = "accZ: " + data.LoadFrame().accZ.ToString();
        accZ.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject gyrX = Instantiate(infoTemplate.gameObject) as GameObject;
        gyrX.SetActive(true);
        gyrX.GetComponent<Text>().text = "gyrX: " + data.LoadFrame().gyrX.ToString();
        gyrX.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject gyrY = Instantiate(infoTemplate.gameObject) as GameObject;
        gyrY.SetActive(true);
        gyrY.GetComponent<Text>().text = "gyrY: " + data.LoadFrame().gyrY.ToString();
        gyrY.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject gyrZ = Instantiate(infoTemplate.gameObject) as GameObject;
        gyrZ.SetActive(true);
        gyrZ.GetComponent<Text>().text = "gyrZ: " + data.LoadFrame().gyrZ.ToString();
        gyrZ.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject angle_min = Instantiate(infoTemplate.gameObject) as GameObject;
        angle_min.SetActive(true);
        angle_min.GetComponent<Text>().text = "angle min: " + data.LoadFrame().angle_min.ToString();
        angle_min.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject angle_max = Instantiate(infoTemplate.gameObject) as GameObject;
        angle_max.SetActive(true);
        angle_max.GetComponent<Text>().text = "angle max: " + data.LoadFrame().angle_max.ToString();
        angle_max.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject angle_increment = Instantiate(infoTemplate.gameObject) as GameObject;
        angle_increment.SetActive(true);
        angle_increment.GetComponent<Text>().text = "angle increment: " + data.LoadFrame().angle_max.ToString();
        angle_increment.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject range_min = Instantiate(infoTemplate.gameObject) as GameObject;
        range_min.SetActive(true);
        range_min.GetComponent<Text>().text = "range min: " + data.LoadFrame().angle_max.ToString();
        range_min.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject range_max = Instantiate(infoTemplate.gameObject) as GameObject;
        range_max.SetActive(true);
        range_max.GetComponent<Text>().text = "range max: " + data.LoadFrame().range_max.ToString();
        range_max.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject ranges = Instantiate(infoTemplate.gameObject) as GameObject;
        ranges.SetActive(true);
        ranges.GetComponent<Text>().text =
            "ranges: " + "\n";
        foreach (float range in data.LoadFrame().ranges)
            ranges.GetComponent<Text>().text.Insert(ranges.GetComponent<Text>().text.Length - 1, range + "\n");
        ranges.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject intensities = Instantiate(infoTemplate.gameObject) as GameObject;
        intensities.SetActive(true);
        intensities.GetComponent<Text>().text =
            "intensities: " + "\n";
        foreach (float intensity in data.LoadFrame().intensities)
            intensities.GetComponent<Text>().text.Insert(intensities.GetComponent<Text>().text.Length - 1, intensity + "\n");
        intensities.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject imgfmt = Instantiate(infoTemplate.gameObject) as GameObject;
        imgfmt.SetActive(true);
        imgfmt.GetComponent<Text>().text = data.LoadFrame().imgfmt;
        imgfmt.transform.SetParent(infoTemplate.transform.parent, true);

        GameObject img = Instantiate(imageTemplate.gameObject) as GameObject;
        img.SetActive(true);
        var offset = data.LoadFrame().img[10] + data.LoadFrame().img[11] << 8 + data.LoadFrame().img[12] << 16 + data.LoadFrame().img[13] << 24;
        var height = data.LoadFrame().img[22] + data.LoadFrame().img[23] << 8 + data.LoadFrame().img[24] << 16 + data.LoadFrame().img[25] << 24;
        var width = data.LoadFrame().img[18] + data.LoadFrame().img[19] << 8 + data.LoadFrame().img[20] << 16 + data.LoadFrame().img[21] << 24;

        Color32[] img_clArray = new Color32[width * height];

        for (int i = 0; i < data.LoadFrame().img.Length - offset; i += 4)
        {
            var img_cl = new Color32(data.LoadFrame().img[offset + i + 0], data.LoadFrame().img[offset + i + 1], data.LoadFrame().img[offset + i + 2], data.LoadFrame().img[offset + i + 3]);
            img_clArray[i / 4] = img_cl;
        }

        Texture2D texture = new Texture2D(200, 200);
        texture.SetPixels32(img_clArray);

        img.GetComponent<RawImage>().texture = texture;
    }

    void Update()
    {
        
    }
}
