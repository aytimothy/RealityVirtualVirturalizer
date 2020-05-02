import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-file-dialog',
  templateUrl: './file-dialog.component.html',
  styleUrls: ['./file-dialog.component.scss']
})
export class FileDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public __DialogRef: MatDialogRef<FileDialogComponent>) { }
  public isRawFormat: boolean = true;
  public isExpandFormat: boolean = false;

  onDismiss(): void {
    this.__DialogRef.close(false);
  }

  public rawFormat() {
    this.isExpandFormat = false;
    this.isRawFormat = true;
  }

  public expandFormat() {
    this.isExpandFormat = true;
    this.isRawFormat = false;
  }
  showContent(key, value) {
    console.log(key);
    console.log(value);
  }
}
