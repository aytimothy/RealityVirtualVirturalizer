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
      this.scanService = this.__BridgeService.createService('/switch', 'world_mapper/string');
    }

    const request = new ROSLIB.ServiceRequest({ request: "status" });
    this.scanService.callService(request, (res: any) => {
      console.log("Scanner Status Message:\n", res);
      if (res.response == 'on') {
        this.updateScannerStatus(true);
      }
      if (res.response === 'off') {
        this.updateScannerStatus(false);
      }
    });
  }

  public toggleScanner(status: boolean): void {

    if (status) {
      const request = new ROSLIB.ServiceRequest({ request: "stop" });
      this.scanService.callService(request, (res: any) => {
        console.log("Sent Scanner Stop:\n", res);
        this.requestScannerStatus(); // update the scanner status
      });
    }
    if (!status) {
      const request = new ROSLIB.ServiceRequest({ request: "start" });
      this.scanService.callService(request, (res: any) => {
        console.log("Sent Scanner Start:\n", res);
        this.requestScannerStatus(); // update the scanner status
      });
    }
  }
}
