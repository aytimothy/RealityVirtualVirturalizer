import { Injectable, Input } from '@angular/core';
import { DialogService } from '../services/dialog.service';
import * as ROSLIB from 'roslib';
import * as ROS3D from 'ros3d'

@Injectable({
  providedIn: 'root'
})

export class BridgeService {

  public socket: any;
  private msg_listener: any;
  private viewer: any;
  private gridClient: any;
  public isConnected: boolean = false;
  constructor(private __DialogService: DialogService) { }

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
    this.msg_listener = new ROSLIB.Topic({
      ros: this.socket,
      name: '/listener',
      messageType: 'std_msgs/String'
    });
  }

  onMessage(next): void {
    this.msg_listener.subscribe(function (message: any) {
      next(message);
    });
  }
}
