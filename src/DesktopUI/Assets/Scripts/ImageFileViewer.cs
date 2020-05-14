using System.IO;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;

public class ImageFileViewer : MonoBehaviour
{
    public FrameFileViewer FrameViewer;
    public TextFileViewer TextViewer;
    public TMP_Text FileName;
    public Image ImageContent;
    public void Show(string filePath)
    {
        // Ensure that the frame and text viewer gameobjects are not active
        TextViewer.gameObject.SetActive(false);
        FrameViewer.gameObject.SetActive(false);
        gameObject.SetActive(true);
        FileName.text = "<color=#FFFF00> File: </color>" + Path.GetFileName(filePath);
        ImageContent.sprite = LoadNewSprite(filePath);
    }
    // The below solution was copied from https://forum.unity.com/threads/generating-sprites-dynamically-from-png-or-jpeg-files-in-c.343735/#post-3177001
    public static Sprite LoadNewSprite(string FilePath, float PixelsPerUnit = 100.0f, SpriteMeshType spriteType = SpriteMeshType.Tight)
    {

        // Load a PNG or JPG image from disk to a Texture2D, assign this texture to a new sprite and return its reference
        Texture2D SpriteTexture = LoadTexture(FilePath);
        Sprite NewSprite = Sprite.Create(SpriteTexture, new Rect(0, 0, SpriteTexture.width, SpriteTexture.height), new Vector2(0, 0), PixelsPerUnit, 0, spriteType);
        return NewSprite;
    }

    public static Sprite ConvertTextureToSprite(Texture2D texture, float PixelsPerUnit = 100.0f, SpriteMeshType spriteType = SpriteMeshType.Tight)
    {
        // Converts a Texture2D to a sprite, assign this texture to a new sprite and return its reference
        Sprite NewSprite = Sprite.Create(texture, new Rect(0, 0, texture.width, texture.height), new Vector2(0, 0), PixelsPerUnit, 0, spriteType);
        return NewSprite;
    }

    public static Texture2D LoadTexture(string FilePath)
    {

        // Load a PNG or JPG file from disk to a Texture2D
        // Returns null if load fails

        Texture2D Tex2D;
        byte[] FileData;

        if (File.Exists(FilePath))
        {
            FileData = File.ReadAllBytes(FilePath);
            Tex2D = new Texture2D(2, 2); // Create new "empty" texture
            if (Tex2D.LoadImage(FileData))  // Load the imagedata into the texture (size is set automatically)
                return Tex2D; // If data = readable -> return texture
        }
        return null; // Return null if load failed
    }
}
