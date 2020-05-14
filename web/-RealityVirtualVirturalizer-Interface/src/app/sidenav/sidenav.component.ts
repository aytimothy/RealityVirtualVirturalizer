import { Component, OnInit } from '@angular/core';
import { DialogService } from '../services/dialog.service';
import { BridgeService } from '../services/rosbridge.service';
import { ScannerService } from '../services/scanner.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  isScanning: boolean = false;
  isConnected: boolean = false;

  constructor(
    private __DialogService: DialogService,
    public __BridgeService: BridgeService,
    public __ScannerService: ScannerService
  ) { }

  public ngOnInit() {
    // subscribe to connection status
    this.__BridgeService.getConnnectionStatus().subscribe(status => {
      this.isConnected = status; // update status in local component when changes
      if (this.isConnected) {
        this.__ScannerService.requestScannerStatus();
      }
    });
    // subscribe to scanner status
    this.__ScannerService.getScannerStatus().subscribe(status => {
      this.isScanning = status;
    });
  }

  public configureRosBridge(): void {
    this.__DialogService.openRosconfigDialog().afterClosed().subscribe();
  }


  public toggleScanner(): void {
    this.__ScannerService.toggleScanner(this.isScanning);
  }
}