import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { BridgeService } from '../../services/rosbridge.service';

@Component({
  selector: 'app-rosconfig-dialog',
  templateUrl: './rosconfig-dialog.component.html',
  styleUrls: ['./rosconfig-dialog.component.scss']
})
export class RosconfigDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public __DialogRef: MatDialogRef<RosconfigDialogComponent>,
    private __BridgeService: BridgeService
  ) { }

  configForm = new FormGroup({
    host: new FormControl('', [Validators.required]),
    port: new FormControl('', [Validators.required]),
  });

  get host(): any { return this.configForm.get('host'); }
  get port(): any { return this.configForm.get('port'); }

  onCancel(): void {
    this.__DialogRef.close(false);
  }
  
  onSet(): void {
    if (this.configForm.valid) {
      this.__BridgeService.setCustomAddress(this.configForm.getRawValue())
      this.__DialogRef.close(true);
    }
  }

}
