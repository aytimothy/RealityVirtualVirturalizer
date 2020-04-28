using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.IO;
using TMPro;
public class ProjectFileViewerPanel : MonoBehaviour
{
    public GameObject infoTemplate;
    public GameObject imageTemplate;
    public GameObject panel;

    public static FileInfo file;

    void Start()
    {
        FrameData data = new FrameData(@"\" + file.Name);

        infoTemplate.GetComponent<TextMeshProUGUI>().text =
            "seq: " + data.LoadFrame().seq.ToString() + "\n" +
            "timestamp: " + data.LoadFrame().timestamp.ToString() + "\n" +
            "frameid: " + data.LoadFrame().frameid.ToString() + "\n" +
            "posX: " + data.LoadFrame().posX.ToString() + "\n" +
            "posY: " + data.LoadFrame().posY.ToString() + "\n" +
            "posZ: " + data.LoadFrame().posZ.ToString() + "\n" +
            "rotX: " + data.LoadFrame().rotX.ToString() + "\n" +
            "rotY: " + data.LoadFrame().rotY.ToString() + "\n" +
            "rotZ: " + data.LoadFrame().rotZ.ToString() + "\n" +
            "accX: " + data.LoadFrame().accX.ToString() + "\n" +
            "accY: " + data.LoadFrame().accY.ToString() + "\n" +
            "accZ: " + data.LoadFrame().accZ.ToString() + "\n" +
            "gyrX: " + data.LoadFrame().gyrX.ToString() + "\n" +
            "gyrY: " + data.LoadFrame().gyrY.ToString() + "\n" +
            "gyrZ: " + data.LoadFrame().gyrZ.ToString() + "\n" +
            "angle min: " + data.LoadFrame().angle_min.ToString() + "\n" +
            "angle max: " + data.LoadFrame().angle_max.ToString() + "\n" +
            "angle increment: " + data.LoadFrame().angle_increment.ToString() + "\n" +
            "range min: " + data.LoadFrame().range_min.ToString() + "\n" +
            "range max: " + data.LoadFrame().range_max.ToString() + "\n" +
            "ranges: " + "\n";
        if (data.LoadFrame().ranges != null)
        {
            foreach (float range in data.LoadFrame().ranges)
                infoTemplate.GetComponent<TextMeshProUGUI>().text.Insert(infoTemplate.GetComponent<TextMeshProUGUI>().text.Length - 1, range + ", ");
        }

        infoTemplate.GetComponent<TextMeshProUGUI>().text.Insert(infoTemplate.GetComponent<TextMeshProUGUI>().text.Length - 1, "\n intensities: " + "\n");

        if (data.LoadFrame().intensities != null)
        {
            foreach (float intensity in data.LoadFrame().intensities)
                infoTemplate.GetComponent<TextMeshProUGUI>().text.Insert(infoTemplate.GetComponent<TextMeshProUGUI>().text.Length - 1, intensity + ", ");
        }

        infoTemplate.GetComponent<TextMeshProUGUI>().text.Insert(infoTemplate.GetComponent<TextMeshProUGUI>().text.Length - 1, data.LoadFrame().imgfmt);

        imageTemplate.GetComponent<RectTransform>().localPosition = new Vector3(imageTemplate.GetComponent<RectTransform>().localPosition.x, imageTemplate.GetComponent<RectTransform>().localPosition.y - infoTemplate.GetComponent<RectTransform>().localScale.y * 320);

        try
        {
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

            imageTemplate.GetComponent<RawImage>().texture = texture;
        }
        catch { }
    }

    public void onXButtonClick()
    {
        panel.SetActive(false);
    }
    void Update()
    {
        
    }
}
