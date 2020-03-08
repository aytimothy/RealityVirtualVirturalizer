import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filesystem',
  templateUrl: './filesystem.component.html',
  styleUrls: ['./filesystem.component.scss']
})
export class FilesystemComponent implements OnInit {

  selectedFolderIndex: number;
  selectedFolderName: string;
  selectedFileIndex: number;

  files: any = [];

  folders: any = [
    {
      name: 'image_data',
      content: [
        "1x.png", "2x.png", "3x.png", "4x.png", "5x.png","1x.png", 
        "2x.png", "3x.png", "4x.png", "5x.png","1x.png", "2x.png", 
        "3x.png", "4x.png", "5x.png","1x.png", "2x.png", "3x.png", 
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
        "file1", "file2", "file3", "file4", "file5"
      ]
    },
    {
      name: 'folder 4',
      content: [
        "file1", "file2", "file3", "file4", "file5"
      ]
    },

  ]
  constructor() {}

  markFolder(index, name) {
    this.selectedFolderIndex = index;
    this.selectedFolderName = name;
    this.files = this.folders[index].content;
  }

  markFile(index) {
    this.selectedFileIndex = index;
  }

  ngOnInit(): void {
  }

}
