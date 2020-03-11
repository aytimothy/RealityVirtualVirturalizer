import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../services/rosbridge.service';
import * as ROS3D from 'ros3d'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  private viewer: ROS3D.Viewer

  private gridClient: ROS3D.OccupancyGridClient;

  public listeningForMessages: boolean = false;
  public isCanvasDisplayed: boolean = false;
  private msg_listener: any;
  public messages = [];

  constructor(
    public __BridgeService: BridgeService
  ) { }

  ngOnInit() { }

  startListening(): void {
    this.msg_listener = this.__BridgeService.subscribeToTopic('/listener', 'std_msgs/String')
    // listen for basic messages
    this.listeningForMessages = true;
    this.msg_listener.subscribe((response: any) => {
      this.messages.push(response.data);
    });
  }

  create3DCanvas() {
    this.isCanvasDisplayed = true;
    // create the main 3d viewer.
    this.viewer = new ROS3D.Viewer({
      divID: 'map',
      width: 800,
      height: 600,
      antialias: true
    });
    // create background grid in the viewer
    this.viewer.addObject(new ROS3D.Grid());

    // setup the map client.
    this.gridClient = new ROS3D.OccupancyGridClient({
      ros: this.__BridgeService.socket,
      rootObject: this.viewer.scene
    });
    console.log(this.gridClient);
  }

  remove3DCanvas(): void {
    this.viewer = undefined;
    this.gridClient = undefined;
  }
}
