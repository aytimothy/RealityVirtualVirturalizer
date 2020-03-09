import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../services/bridge.service';
import { DialogService } from '../services/dialog.service';
import * as ROS3D from 'ros3d'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  gridClient: any;
  listening: boolean = false;
  messages = [];
  private viewer: ROS3D.Viewer
  constructor(
    public __BridgeService: BridgeService,
    private __DialogService: DialogService
  ) { }

  ngOnInit() { }

  startListening() {
    this.listening = true;
    this.__BridgeService.onMessage((response: any) => {
      this.messages.push(response.data);
    });
  }

  createCanvas() {
    // create the main 3d viewer.
    /*this.viewer = new ROS3D.Viewer({
      divID: 'map',
      width: 800,
      height: 600,
      antialias: true
    });

    //Setup the map client.
    this.gridClient = new ROS3D.OccupancyGridClient({
      ros: this.__BridgeService.socket,
      rootObject: this.viewer.scene
    });*/
  }
}
