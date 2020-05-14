import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../services/rosbridge.service';
import { SidenavService } from '../services/sidenav.service';
import { ScannerService } from '../services/scanner.service';

@Component({
  selector: 'app-statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.scss']
})
export class StatusbarComponent implements OnInit {

  // status icons
  bridge_status_icon: string = "phonelink";
  scan_status_icon: string = 'close'

  // status messages
  bridge_status_msg: string = "Connecting...";
  scan_status_msg: string = "Disabled";

  loading: boolean = true;
  isScanning: boolean = false;

  constructor(
    private __BridgeService: BridgeService,
    private __SidenavService: SidenavService,
    public __ScannerService: ScannerService
  ) { }

  public ngOnInit(): void {
    // connect to rosbridge
    this.__BridgeService.estabishConnection((response: any) => {
      if (response.type == "open") {
        this.bridge_status_msg = "Connected";
        this.bridge_status_icon = 'phonelink';
        this.loading = false;
      }
      if (response.type == 'close') {
        this.bridge_status_msg = 'Connection Closed';
        this.bridge_status_icon = 'close';
        this.loading = false;
      }
      if (response.type == 'error') {
        this.bridge_status_msg = "Connection Failed";
        this.bridge_status_icon = 'error';
        this.loading = false;
      }
    });

    // subscribe to scanner status
    this.__ScannerService.getScannerStatus().subscribe(isScanning => {
      if (isScanning) {
        this.scan_status_msg = 'Enabled';
        this.scan_status_icon = 'cast';
      }
      if (!isScanning) {
        this.scan_status_msg = 'Disabled';
        this.scan_status_icon = 'close';
      }
    });
  }

  // open/close left side navigation pane
  public toggleLSideNav(): void {
    this.__SidenavService.toggleLeft();
  }

  // open/close right side navigation pane
  public toggleRSideNav(): void {
    this.__SidenavService.toggleRight();
  }
}
