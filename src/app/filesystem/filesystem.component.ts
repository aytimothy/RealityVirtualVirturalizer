import { Component } from '@angular/core';

@Component({
  selector: 'app-filesystem',
  templateUrl: './filesystem.component.html',
  styleUrls: ['./filesystem.component.scss']
})
export class FilesystemComponent {

  selectedFolderIndex: number;
  selectedFolderName: string;
  selectedFileIndex: number;

  files: any = [];

  folders: any = [
    {
      name: 'image_data',
      content: [
        "1x.png", "2x.png", "3x.png", "4x.png", "5x.png", "1x.png",
        "2x.png", "3x.png", "4x.png", "5x.png", "1x.png", "2x.png",
        "3x.png", "4x.png", "5x.png", "1x.png", "2x.png", "3x.png",
      ]
    },
    {
      name: 'sensor_msgs',
      content: [
        "log1.txt", "log2.txt", "log3.txt", "log4.txt", "log5.txt"
      ]
    },
    {
      name: 'positioning',
      content: [
        "x_pos.txt", "y_pos.txt", "z__pos.txt",
        "x_pos.txt", "y_pos.txt", "z__pos.txt",
        "x_pos.txt", "y_pos.txt", "z__pos.txt",
      ]
    },
    {
      name: 'accelerometer',
      content: [
        "xspeed.txt", "yspeed.txt", "zspeed.txt",
        "xspeed.txt", "yspeed.txt", "zspeed.txt",
        "xspeed.txt", "yspeed.txt", "zspeed.txt",
      ]
    },

  ]
  constructor() { }

  showFolders(): void {
    this.selectedFolderIndex = null;
    this.selectedFolderName = null;
    this.files = [];
  }

  markFolder(index: number, name: string): void {
    this.selectedFolderIndex = index;
    this.selectedFolderName = name;
    this.files = this.folders[index].content;
  }

  markFile(index: number): void {
    this.selectedFileIndex = index;
  }

}
