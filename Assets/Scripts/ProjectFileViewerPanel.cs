using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.IO;
using System.Drawing;
public class ProjectFileViewerPanel : MonoBehaviour
{
    public GameObject infoTemplate;
    public GameObject imageTemplate;
    public GameObject scrollView;
    public GameObject panel;

    public static FileInfo file;

    public int text_x;
    public int text_y;
    public int text_y_increment;

    public int img_x;
    public int img_y;

    void Start()
    {
        FrameData data = new FrameData(file.FullName);

        GameObject seq = Instantiate(infoTemplate);
        seq.SetActive(true);
        try { seq.GetComponent<Text>().text = "seq: " + data.LoadFrame().seq.ToString(); }
        catch { seq.GetComponent<TextMesh>().text = "Information not found! Is this a frame file?"; }
        seq.transform.SetParent(infoTemplate.transform.parent, true);
        seq.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        seq.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        seq.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        seq.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        seq.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject timestamp = Instantiate(infoTemplate);
        timestamp.SetActive(true);
        try { timestamp.GetComponent<Text>().text = "timestamp: " + data.LoadFrame().timestamp.ToString(); }
        catch { timestamp.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        timestamp.transform.SetParent(infoTemplate.transform.parent, true);
        timestamp.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        timestamp.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        timestamp.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        timestamp.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        timestamp.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject frameid = Instantiate(infoTemplate);
        frameid.SetActive(true);
        try { frameid.GetComponent<Text>().text = "frameid: " + data.LoadFrame().frameid.ToString(); }
        catch { frameid.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        frameid.transform.SetParent(infoTemplate.transform.parent, true);
        frameid.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        frameid.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        frameid.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        frameid.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        frameid.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject posX = Instantiate(infoTemplate);
        posX.SetActive(true);
        try { posX.GetComponent<Text>().text = "posX: " + data.LoadFrame().posX.ToString(); }
        catch { posX.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        posX.transform.SetParent(infoTemplate.transform.parent, true);
        posX.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        posX.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        posX.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        posX.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        posX.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject posY = Instantiate(infoTemplate);
        posY.SetActive(true);
        try { posY.GetComponent<Text>().text = "posY: " + data.LoadFrame().posY.ToString(); }
        catch { posY.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        posY.transform.SetParent(infoTemplate.transform.parent, true);
        posY.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        posY.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        posY.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        posY.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        posY.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject posZ = Instantiate(infoTemplate);
        posZ.SetActive(true);
        try { posZ.GetComponent<Text>().text = "posZ: " + data.LoadFrame().posZ.ToString(); }
        catch { posZ.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        posZ.transform.SetParent(infoTemplate.transform.parent, true);
        posZ.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        posZ.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        posZ.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        posZ.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        posZ.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject rotX = Instantiate(infoTemplate);
        rotX.SetActive(true);
        try { rotX.GetComponent<Text>().text = "rotX: " + data.LoadFrame().rotX.ToString(); }
        catch { rotX.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        rotX.transform.SetParent(infoTemplate.transform.parent, true);
        rotX.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        rotX.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        rotX.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        rotX.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        rotX.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject rotY = Instantiate(infoTemplate);
        rotY.SetActive(true);
        try { rotY.GetComponent<Text>().text = "rotY: " + data.LoadFrame().rotY.ToString(); }
        catch { rotY.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        rotY.transform.SetParent(infoTemplate.transform.parent, true);
        rotY.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        rotY.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        rotY.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        rotY.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        rotY.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject rotZ = Instantiate(infoTemplate);
        rotZ.SetActive(true);
        try { rotZ.GetComponent<Text>().text = "rotZ: " + data.LoadFrame().rotZ.ToString(); }
        catch { rotZ.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        rotZ.transform.SetParent(infoTemplate.transform.parent, true);
        rotZ.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        rotZ.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        rotZ.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        rotZ.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        rotZ.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject accX = Instantiate(infoTemplate);
        accX.SetActive(true);
        try { accX.GetComponent<Text>().text = "accX: " + data.LoadFrame().accX.ToString(); }
        catch { accX.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        accX.transform.SetParent(infoTemplate.transform.parent, true);
        accX.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        accX.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        accX.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        accX.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        accX.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject accY = Instantiate(infoTemplate);
        accY.SetActive(true);
        try { accY.GetComponent<Text>().text = "accY: " + data.LoadFrame().accY.ToString(); }
        catch { accY.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        accY.transform.SetParent(infoTemplate.transform.parent, true);
        accY.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        accY.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        accY.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        accY.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        accY.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject accZ = Instantiate(infoTemplate);
        accZ.SetActive(true);
        try { accZ.GetComponent<Text>().text = "accZ: " + data.LoadFrame().accZ.ToString(); }
        catch { accZ.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        accZ.transform.SetParent(infoTemplate.transform.parent, true);
        accZ.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        accZ.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        accZ.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        accZ.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        accZ.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject gyrX = Instantiate(infoTemplate);
        gyrX.SetActive(true);
        try { gyrX.GetComponent<Text>().text = "gyrX: " + data.LoadFrame().gyrX.ToString(); }
        catch { gyrX.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        gyrX.transform.SetParent(infoTemplate.transform.parent, true);
        gyrX.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        gyrX.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        gyrX.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        gyrX.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        gyrX.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject gyrY = Instantiate(infoTemplate);
        gyrY.SetActive(true);
        try { gyrY.GetComponent<Text>().text = "gyrY: " + data.LoadFrame().gyrY.ToString(); }
        catch { gyrY.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        gyrY.transform.SetParent(infoTemplate.transform.parent, true);
        gyrY.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        gyrY.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        gyrY.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        gyrY.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        gyrY.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject gyrZ = Instantiate(infoTemplate);
        gyrZ.SetActive(true);
        try { gyrZ.GetComponent<Text>().text = "gyrZ: " + data.LoadFrame().gyrZ.ToString(); }
        catch { gyrZ.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        gyrZ.transform.SetParent(infoTemplate.transform.parent, true);
        gyrZ.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        gyrZ.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        gyrZ.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        gyrZ.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        gyrZ.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject angle_min = Instantiate(infoTemplate);
        angle_min.SetActive(true);
        try { angle_min.GetComponent<Text>().text = "angle min: " + data.LoadFrame().angle_min.ToString(); }
        catch { angle_min.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        angle_min.transform.SetParent(infoTemplate.transform.parent, true);
        angle_min.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        angle_min.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        angle_min.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        angle_min.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        angle_min.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject angle_max = Instantiate(infoTemplate);
        angle_max.SetActive(true);
        try { angle_max.GetComponent<Text>().text = "angle max: " + data.LoadFrame().angle_max.ToString(); }
        catch { angle_max.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        angle_max.transform.SetParent(infoTemplate.transform.parent, true);
        angle_max.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        angle_max.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        angle_max.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        angle_max.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        angle_max.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject angle_increment = Instantiate(infoTemplate);
        angle_increment.SetActive(true);
        try { angle_increment.GetComponent<Text>().text = "angle increment: " + data.LoadFrame().angle_max.ToString(); }
        catch { angle_increment.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        angle_increment.transform.SetParent(infoTemplate.transform.parent, true);
        angle_increment.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        angle_increment.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        angle_increment.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        angle_increment.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        angle_increment.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;
        
        GameObject range_min = Instantiate(infoTemplate);
        range_min.SetActive(true);
        try { range_min.GetComponent<Text>().text = "range min: " + data.LoadFrame().angle_max.ToString(); }
        catch { range_min.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        range_min.transform.SetParent(infoTemplate.transform.parent, true);
        range_min.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        range_min.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        range_min.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        range_min.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        range_min.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject range_max = Instantiate(infoTemplate);
        range_max.SetActive(true);
        try { range_max.GetComponent<Text>().text = "range max: " + data.LoadFrame().range_max.ToString(); }
        catch { range_max.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        range_max.transform.SetParent(infoTemplate.transform.parent, true);
        range_max.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        range_max.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        range_max.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        range_max.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        range_max.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject ranges = Instantiate(infoTemplate);
        ranges.SetActive(true);
        try
        {
            ranges.GetComponent<Text>().text =
                "ranges: " + "\n";
            foreach (float range in data.LoadFrame().ranges)
                ranges.GetComponent<Text>().text.Insert(ranges.GetComponent<Text>().text.Length - 1, range + "\n");
        }
        catch { ranges.GetComponent<Text>().text = "Information not found! Is this a frame file?"; }
        ranges.transform.SetParent(infoTemplate.transform.parent, true);
        ranges.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        ranges.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        ranges.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        ranges.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        ranges.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject intensities = Instantiate(infoTemplate);
        intensities.SetActive(true);
        try
        {
            intensities.GetComponent<Text>().text =
                "intensities: " + "\n";
            foreach (float intensity in data.LoadFrame().intensities)
                intensities.GetComponent<Text>().text.Insert(intensities.GetComponent<Text>().text.Length - 1, intensity + "\n");
        }
        catch { intensities.GetComponent<Text>().text = "Information not found! Is that a frame file?"; }
        intensities.transform.SetParent(infoTemplate.transform.parent, true);
        intensities.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        intensities.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        intensities.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        intensities.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        intensities.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        GameObject imgfmt = Instantiate(infoTemplate);
        imgfmt.SetActive(true);
        try { imgfmt.GetComponent<Text>().text = data.LoadFrame().imgfmt; }
        catch { imgfmt.GetComponent<Text>().text = "Information not found! Is that a frame file?"; }
        imgfmt.transform.SetParent(infoTemplate.transform.parent, true);
        imgfmt.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
        imgfmt.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
        imgfmt.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
            infoTemplate.GetComponent<RectTransform>().localPosition.y - text_y);
        text_y += text_y_increment;
        imgfmt.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
        imgfmt.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;

        img_y = text_y - 50;
        GameObject img = Instantiate(imageTemplate);
        img.SetActive(true);
        img.transform.SetParent(imageTemplate.transform.parent, true);
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

            img.GetComponent<RawImage>().texture = texture;

            ranges.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
            ranges.GetComponent<RectTransform>().anchoredPosition = imageTemplate.GetComponent<RectTransform>().anchoredPosition;
            ranges.GetComponent<RectTransform>().localPosition = new Vector3(imageTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
                imageTemplate.GetComponent<RectTransform>().localPosition.y - img_y);
            ranges.GetComponent<RectTransform>().localScale = imageTemplate.GetComponent<RectTransform>().localScale;
            gyrX.GetComponent<RectTransform>().sizeDelta = imageTemplate.GetComponent<RectTransform>().sizeDelta;

        }
        catch {
            GameObject errorImage = Instantiate(infoTemplate);
            errorImage.GetComponent<Text>().text = "Image couldn't be loaded!";
            errorImage.transform.SetParent(infoTemplate.transform.parent);
            errorImage.GetComponent<RectTransform>().SetParent(scrollView.GetComponent<RectTransform>(), true);
            errorImage.GetComponent<RectTransform>().anchoredPosition = infoTemplate.GetComponent<RectTransform>().anchoredPosition;
            errorImage.GetComponent<RectTransform>().localPosition = new Vector3(infoTemplate.GetComponent<RectTransform>().localPosition.x - text_x,
                infoTemplate.GetComponent<RectTransform>().localPosition.y - img_y);
            errorImage.GetComponent<RectTransform>().localScale = infoTemplate.GetComponent<RectTransform>().localScale;
            errorImage.GetComponent<RectTransform>().sizeDelta = infoTemplate.GetComponent<RectTransform>().sizeDelta;
        }
    }

    public void onXButtonClick()
    {
        panel.SetActive(false);
    }
    void Update()
    {
        
    }
}
