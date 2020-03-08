import { Injectable, Input } from '@angular/core';

declare var ROSLIB: any;
import 'roslib/build/roslib.js';

declare var ROS3D: any;
import 'ros3d/build/ros3d.js';

@Injectable({
  providedIn: 'root'
})

export class BridgeService {

  private socket: any;
  private listener: any;
  private viewer: any;
  private gridClient: any;
  public isConnected: boolean = false;
  constructor() { }

  newRosConnection(): boolean {
    if (this.isConnected) {
      console.log("connected:", this.isConnected);
      return this.isConnected;
    }

    if (this.socket) {
      this.socket.close(); // Close old connection
      this.socket = false;
      return;
    }

    this.socket = new ROSLIB.Ros({ url: `ws://127.0.0.1:9090` });
  }

  onConnect(next): void {
    this.socket.on('connection', (response: any) => {
      this.isConnected = true;
      this.onConnected();
      next(response)
    });
  }

  onError(next): void {
    this.socket.on('error', (response: any) => {
      this.isConnected = false;
      next(response)
    });
  }

  onClose(next): void {
    this.socket.on('close', (response: any) => {
      this.isConnected = false;
      next(response);
    });
  }

  onConnected(): void {
    // create a basic ros topic that listens for incoming messages
    this.listener = new ROSLIB.Topic({
      ros: this.socket,
      name: '/listener',
      messageType: 'std_msgs/String'
    });

    // create the main 3d viewer.
    /*this.viewer = new ROS3D.Viewer({
      divID: 'map',
      width: 800,
      height: 600,
      antialias: true
    });

    //Setup the map client.
    this.gridClient = new ROS3D.OccupancyGridClient({
      ros: this.socket,
      rootObject: this.viewer.scene
    });*/
  }

  onListener(next): void {
    this.listener.subscribe(function (message: any) {
      console.log('Received message: ' + message.data);
      next(message);
    });
  }

}
