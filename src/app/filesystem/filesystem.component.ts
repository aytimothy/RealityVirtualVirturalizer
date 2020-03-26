import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-filesystem',
  templateUrl: './filesystem.component.html',
  styleUrls: ['./filesystem.component.scss']
})
export class FilesystemComponent implements OnInit {

  selectedFolderIndex: number;
  selectedFolderName: string;
  selectedItemIndex: number;

  directoryList: any = [];

  constructor(
    private __DataService: DataService,
    private __DialogService: DialogService
  ) { }

  ngOnInit() {
    // get root directory listing on page initialisation
    this.directoryListing();
  }

  public directoryListing() {
    // reset any values in template
    this.selectedFolderIndex = null;
    this.selectedFolderName = null;
    // request to get the items in the root directory
    this.__DataService.requestRootDirectory().subscribe((rootDirectoryListing: any) => {
      this.directoryList = rootDirectoryListing;
    });
  }

  public navigateFileSystem(index: number, item: any): void {
    // check if the item is a directory
    if (item.isDir) {
      // assign folder values for template
      this.selectedFolderIndex = index;
      this.selectedFolderName = item.name;
      // further navigate through the filesystem
      this.__DataService.navigateDirectory(item).subscribe((list: any) => {
        this.directoryList = list;
      });
    }
    else {
      // send a request to get the data for the file
      this.__DataService.requestReadFile(item).subscribe((data: any) => {
        // output the data in a dialog
        this.__DialogService.openConfirmDialog(JSON.stringify(data), item.name, 'file_copy')
          .afterClosed()
          .subscribe()
      });
    }
  }

}
