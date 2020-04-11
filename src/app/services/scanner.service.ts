import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BridgeService } from '../services/rosbridge.service';
import * as ROSLIB from 'roslib';


@Injectable({
  providedIn: 'root'
})
export class ScannerService {
  // scanning status
  public isScanning: BehaviorSubject<boolean>

  // ros scan service
  private scanService: ROSLIB.Service;

  constructor(public __BridgeService: BridgeService) {
    this.isScanning = new BehaviorSubject<boolean>(false);
  }

  public getScannerStatus(): Observable<boolean> {
    return this.isScanning.asObservable();
  }

  private updateScannerStatus(status: boolean): void {
    this.isScanning.next(status);
  }

  public requestScannerStatus() {
    if (!this.scanService) {  // ensure the scanner service has been created
      this.scanService = this.__BridgeService.createService('/scanner', 'std_msgs/String');
    }

    const statusRequest = new ROSLIB.ServiceRequest('status');

    this.scanService.callService(statusRequest, (status: any) => {
      if (status == 'on') {
        this.updateScannerStatus(true);
      }
      if (status === 'off') {
        this.updateScannerStatus(false);
      }
    });
  }

  public toggleScanner(status: boolean): void {
    if (status) {
      var stopRequest = new ROSLIB.ServiceRequest('stop');
      this.scanService.callService(stopRequest)
      this.requestScannerStatus() // update the scanner status
    }
    if (!status) {
      var startRequest = new ROSLIB.ServiceRequest('start');
      this.scanService.callService(startRequest);
      this.requestScannerStatus() // update the scanner status
    }
  }
}
