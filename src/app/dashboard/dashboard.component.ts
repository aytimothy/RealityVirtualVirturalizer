import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { BridgeService } from '../services/rosbridge.service';
import * as ROS3D from 'ros3d';
import * as THREE from 'three/build/three';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements AfterViewInit {

  @ViewChild('canvas', { read: ElementRef, static: false }) elementView: ElementRef;
  public isConnected: boolean = false;

  private viewer: ROS3D.Viewer

  public listeningForMessages: boolean = false;
  public isCanvasDisplayed: boolean = true;
  public isImageDisplayed: boolean = false;

  private msg_listener: any;
  public frame: any;
  public imageUrl: string;

  public dashboardWidth: number;
  public dashboardHeight: number;

  constructor(
    public __BridgeService: BridgeService,
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit() {
    // retrieve the width and height of the canvas div dynamically  
    this.dashboardWidth = this.elementRef.nativeElement.offsetWidth;
    this.dashboardHeight = this.elementRef.nativeElement.offsetHeight;

    this.__BridgeService.getConnnectionStatus().subscribe(status => {
      this.isConnected = status
    });

  }

  public startListening(): void {
    this.msg_listener = this.__BridgeService.subscribeToTopic('/output', 'world_mapper/Frame')
    // listen for basic messages
    this.listeningForMessages = true;
    this.msg_listener.subscribe((frame: any) => {
      // output entire frame to console
      console.log(frame);
      // update the current frame
      this.frame = frame;
      // update the image url per frame
      this.imageUrl = 'data:image/jpeg;base64,' + frame.img;
      //this.generatePoint(frame);
    });
    this.create3DCanvas();
  }

  public stopListening(): void {
    this.msg_listener.unsubstribe();
    this.listeningForMessages = false;
    this.isCanvasDisplayed = false;
  }

  /*private generatePoint(response: any): void {
   var origin = new Vector3(response.posX, response.posY, response.posZ);
   var directions = this.generateDirections(new Vector3(response.rotX, response.rotY, response.rotZ));
   var points = []
   for (let i = 0; i < response.distances.length; i++)
       points = origin + (direction[i] * response.distances[i])
   generateBox(point, 0.0001)
  }

  private generateDirections(x, y, z): THREE.Vector3[] {
   that stupid rotational matrix thing again
  }

  private generateBox(pos, size): THREE.Object3D {
   //make points at (1, 1, 1), (1, 1, -1), (1, -1, 1), (1, -1, -1), etc.
   var 1 = pos + (0.5 * size), -1 = pos - (0.5 * size), for respective axis
   //join up three four points (or three if we have to make triangles)
  // add material
  }*/

  public onResize(event: any): void {
    /* The event will only detect window resize events, 
    Therefore we need to substract 520 pixels from the innerWidth manually 
    to take into account the two side navigation panels which are both 260*/
    this.dashboardWidth = event.target.innerWidth - 520;
    this.dashboardHeight = event.target.innerHeight - 164;

    // ensure the viewer is created before calling resizing it
    if (this.viewer != undefined) {
      this.viewer.resize(this.dashboardWidth, this.dashboardHeight);
    }
  }

  public toggleImages(): void {
    if (this.isImageDisplayed) {
      this.isImageDisplayed = false;
    }
    else {
      this.isImageDisplayed = true;
      this.isCanvasDisplayed = false;
    }
  }

  public toggleCanvas(): void {
    if (this.isCanvasDisplayed) {
      this.isCanvasDisplayed = false;
    }
    else {
      this.isImageDisplayed = false;
      this.isCanvasDisplayed = true;
    }
  }

  public create3DCanvas(): void {

    // create the main 3d viewer.
    this.viewer = new ROS3D.Viewer({
      divID: 'canvas',
      width: this.dashboardWidth,
      height: this.dashboardHeight,
      antialias: true
    });

    // create background grid in the viewer
    this.viewer.addObject(new ROS3D.Grid());
  }
}