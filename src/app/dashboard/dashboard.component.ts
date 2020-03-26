import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../services/rosbridge.service';
import * as ROS3D from 'ros3d';
import * as ROSLIB from 'roslib';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  private viewer: ROS3D.Viewer

  private gridClient: ROS3D.OccupancyGridClient;
  private tfClient: ROSLIB.TFClient;
  private cloudClient: ROS3D.PointCloud2;

  public listeningForMessages: boolean = false;
  public isCanvasDisplayed: boolean = false;
  private msg_listener: any;
  public messages = [];

  constructor(
    public __BridgeService: BridgeService
  ) { }

  ngOnInit() { }

  startListening(): void {
    this.msg_listener = this.__BridgeService.subscribeToTopic('/output', 'world_mapper/Frame')
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

    // Setup a client to listen to TFs.
    this.tfClient = new ROSLIB.TFClient({
      ros: this.__BridgeService.socket,
      angularThres: 0.01,
      transThres: 0.01,
      rate: 10.0,
      fixedFrame: '/camera_link'
    });

    this.cloudClient = new ROS3D.PointCloud2({
      ros: this.__BridgeService.socket,
      tfClient: this.tfClient,
      rootObject: this.viewer.scene,
      topic: '/camera/depth_registered/points',
      material: { size: 0.05, color: 0xff00ff }
    });
  }

  remove3DCanvas(): void {
    this.viewer = undefined;
    this.gridClient = undefined;
  }
}
