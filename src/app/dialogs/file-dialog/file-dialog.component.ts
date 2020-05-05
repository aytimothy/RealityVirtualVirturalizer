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

  public onDismiss(): void {
    this.__DialogRef.close(false);
  }

  public rawFormat(): void {
    this.isExpandFormat = false;
    this.isRawFormat = true;
  }

  public expandFormat(): void {
    this.isExpandFormat = true;
    this.isRawFormat = false;
  }
}
