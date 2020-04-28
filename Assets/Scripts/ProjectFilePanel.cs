using Application = UnityEngine.Application;
using System.Collections.Generic;
using System.IO;
using System.Windows.Forms;
using UnityEngine;
using UnityEngine.SceneManagement;

public class ProjectFilePanel : MonoBehaviour {
    public ProjectScene projectManager;

    public string DefaultDirectory {
        get { return Application.persistentDataPath; }
    }
    public string LastUsedDirectory {
        get { return PlayerPrefs.GetString("LastUsedDirectory", DefaultDirectory); }
        set { PlayerPrefs.SetString("LastUsedDirectory", value); }
    }

    public void OpenProjectButton_OnClick() {
        /* OpenFileDialog openFileDialog = new OpenFileDialog();
        openFileDialog.Filter = "JSON Frame|manifest.json";
        openFileDialog.InitialDirectory = LastUsedDirectory;
        DialogResult dialogResult = openFileDialog.ShowDialog();
        if (dialogResult == DialogResult.OK) {
            string directory = Path.GetDirectoryName(openFileDialog.FileName);
            LastUsedDirectory = directory;
            projectManager.LoadProject(directory);
        } */
        DialogResult dialogResult = MessageBox.Show("Not Implemented.\nPlease re-open a project by closing and returning to the main menu.");
    }

    public void SaveProjectButton_OnClick() {
        projectManager.SaveProject();
    }

    public void CloseProjectButton_OnClick() {
        // todo: Prompt do you want to save?
        SceneManager.LoadScene("Top Scene");
    }

    public void QuitButton_OnClick() {
        // todo: Prompt do you want to save?
        Application.Quit();
    }
}
