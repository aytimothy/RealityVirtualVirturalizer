import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data, public __DialogRef: MatDialogRef<ConfirmDialogComponent>) { }

  onDismiss(): void {
    this.__DialogRef.close(false);
  }
  onConfirm(): void {
    this.__DialogRef.close(true);
  }
}