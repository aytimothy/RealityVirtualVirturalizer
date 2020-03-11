import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../services/rosbridge.service';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.scss']
})
export class StatusbarComponent implements OnInit {

  bridge_status_icon: string = "phonelink";
  bridge_status_msg: string = "Connecting...";
  scan_status_msg: string = "Disabled";
  scan_status_icon: string = 'close'
  loading: boolean = true;

  constructor(private __BridgeService: BridgeService, private __SidenavService: SidenavService) { }

  ngOnInit(): void {
    // connect to rosbridge
    this.__BridgeService.estabishConnection();

    this.__BridgeService.onConnect((response: any) => {
      this.bridge_status_msg = "Connected";
      this.bridge_status_icon = 'phonelink';
      this.loading = false;
    })
    this.__BridgeService.onError((response: any) => {
      this.bridge_status_msg = "Connection Failed";
      this.bridge_status_icon = 'error';
      this.loading = false;

    })
    this.__BridgeService.onClose((response: any) => {
      this.bridge_status_msg = 'Connection Closed';
      this.bridge_status_icon = 'close';
      this.loading = false;


    });
  }

  toggleLSideNav(): void {
    this.__SidenavService.toggleLeft();
  }

  toggleRSideNav(): void {
    this.__SidenavService.toggleRight();
  }
}
