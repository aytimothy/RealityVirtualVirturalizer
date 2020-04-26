using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using System.IO;

public class ProjectFileBrowserButton : MonoBehaviour
{
    public File_button _Button;
    public TextMeshProUGUI elementName;
    public GameObject fileInfo;
    public GameObject fileImage;

    public void initializeButton(string name)
    {
        elementName.text = name;
    }

    public void ShowFileInfo()
    {
        foreach (GameObject element in ProjectImportFileBrowserPanel.currentDirectoryElements.Values)
            Destroy(element);
        fileInfo.SetActive(true);
        fileImage.SetActive(true);

        FileInfo file = ProjectImportFileBrowserPanel.
                     currentDirectoryElements[elementName.text].
                     GetComponent<ProjectFileBrowserButton>().
                     _Button.associatedFile;
        FrameData data = new FrameData(file.FullName);

        fileInfo.GetComponent<TextMeshProUGUI>().text =
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
        foreach (float range in data.LoadFrame().ranges)
            fileInfo.GetComponent<TextMeshProUGUI>().text.Insert(fileInfo.GetComponent<TextMeshProUGUI>().text.Length - 1, range + "\n");
        foreach (float intensity in data.LoadFrame().intensities)
            fileInfo.GetComponent<TextMeshProUGUI>().text.Insert(fileInfo.GetComponent<TextMeshProUGUI>().text.Length - 1, intensity + "\n");

        fileInfo.GetComponent<TextMeshProUGUI>().text.Insert(fileInfo.GetComponent<TextMeshProUGUI>().text.Length - 1, data.LoadFrame().imgfmt);

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

            fileImage.GetComponent<RawImage>().texture = texture;
        }
        catch { }
        }
    public void OnClick()
    {
        switch(_Button.isFile)
        {
            case false:
                ProjectImportFileBrowserPanel.currentDirectory = 
                    ProjectImportFileBrowserPanel.
                    currentDirectoryElements[elementName.text].
                    GetComponent<ProjectFileBrowserButton>().
                    _Button.associatedDirectory;
                File_button.changeDirectory = true;
                break;
            case true:
                ProjectImportFileBrowserPanel.fileView = true;
                ProjectImportFileBrowserPanel.currentFile = ProjectImportFileBrowserPanel.
                     currentDirectoryElements[elementName.text].
                     GetComponent<ProjectFileBrowserButton>().
                     _Button.associatedFile;
                ShowFileInfo();
                break;
        }
    }
}
