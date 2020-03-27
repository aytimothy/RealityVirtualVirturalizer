import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-file-dialog',
  templateUrl: './file-dialog.component.html',
  styleUrls: ['./file-dialog.component.scss']
})
export class FileDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public __DialogRef: MatDialogRef<FileDialogComponent>) { }


  onDismiss(): void {
    this.__DialogRef.close(false);
  }
}
