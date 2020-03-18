import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../services/rosbridge.service';
import { SidenavService } from '../services/sidenav.service';

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

  constructor(
    private __BridgeService: BridgeService, 
    private __SidenavService: SidenavService) { }

  ngOnInit(): void {
    // connect to rosbridge
    this.__BridgeService.estabishConnection({host: '127.0.0.1', port: '9090'});

    // if connected we change the message and icon
    this.__BridgeService.onConnect((response: any) => {
      this.bridge_status_msg = "Connected";
      this.bridge_status_icon = 'phonelink';
      this.loading = false;
    })

    // if and error occurs we change the message and icon
    this.__BridgeService.onError((response: any) => {
      this.bridge_status_msg = "Connection Failed";
      this.bridge_status_icon = 'error';
      this.loading = false;

    })

    // if the connection closes we change the message and icon
    this.__BridgeService.onClose((response: any) => {
      this.bridge_status_msg = 'Connection Closed';
      this.bridge_status_icon = 'close';
      this.loading = false;
    });
  }

  // open/close left side navigation pane
  toggleLSideNav(): void {
    this.__SidenavService.toggleLeft();
  }

  // open/close right side navigation pane
  toggleRSideNav(): void {
    this.__SidenavService.toggleRight();
  }
}
