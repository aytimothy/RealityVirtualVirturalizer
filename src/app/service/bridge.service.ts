import { Injectable, Input } from '@angular/core';

declare var ROSLIB: any;
import 'roslib/build/roslib.js';

@Injectable({
  providedIn: 'root'
})

export class BridgeService {

  private socket: any;
  private listener: any;
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

  onConnect(next) {
    this.socket.on('connection', (response: any) => {
      this.isConnected = true;
      this.onConnected();
      next(response)
    });
  }

  onError(next) {
    this.socket.on('error', (response: any) => {
      this.isConnected = false;
      next(response)
    });
  }

  onClose(next) {
    this.socket.on('close', (response: any) => {
      this.isConnected = false;
      next(response);
    });
  }

  onConnected() {
    this.listener = new ROSLIB.Topic({
      ros: this.socket,
      name: '/listener',
      messageType: 'std_msgs/String'
    });
  }

  onListener(next) {
    this.listener.subscribe(function (message: any) {
      console.log(message);
      console.log('Received message on ' + ': ' + message.data);
      next(message);
    });
  }

}
