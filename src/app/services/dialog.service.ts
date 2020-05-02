import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../dialogs/confirm-dialog/confirm-dialog.component';
import { RosconfigDialogComponent } from '../dialogs/rosconfig-dialog/rosconfig-dialog.component';
import { FileDialogComponent } from '../dialogs/file-dialog/file-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openConfirmDialog(msg: string, title: string, ico: string) {
    return this.dialog.open(ConfirmDialogComponent, {
      width: '30%',
      disableClose: true,
      data: {
        title: title,
        message: msg,
        icon: ico
      }
    });
  }

  openFileDialog(file: any) {
    return this.dialog.open(FileDialogComponent, {
      width: '50%',
      disableClose: true,
      data: {
        name: file.name,
        data: file.data,
        ext: file.ext
      }
    });
  }

  openRosconfigDialog() {
    return this.dialog.open(RosconfigDialogComponent, {
      width: '40%',
      disableClose: true,
    })
  }
}
