import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../services/rosbridge.service';
import * as ROS3D from 'ros3d';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  private viewer: ROS3D.Viewer

  public listeningForMessages: boolean = false;

  public isCanvasDisplayed: boolean = false;

  public isImageDisplayed: boolean = false;

  private msg_listener: any;

  public messages = [];

  public frame: any;

  constructor(
    public __BridgeService: BridgeService
  ) { }

  ngOnInit() { }

  startListening(): void {
    this.msg_listener = this.__BridgeService.subscribeToTopic('/output', 'world_mapper/Frame')
    // listen for basic messages
    this.listeningForMessages = true;
    this.msg_listener.subscribe((frame: any) => {
      // output entire frame to console
      console.log(frame);
      // update the current frame
      this.frame = frame;
    });
  }

  stopListening(): void {
    this.msg_listener.unsubstribe();
    this.listeningForMessages = false;
  }

  create3DCanvas() {
    this.isImageDisplayed = false;
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
  }

  remove3DCanvas(): void {
    this.viewer = undefined;
    this.isCanvasDisplayed = false;
  }
}
