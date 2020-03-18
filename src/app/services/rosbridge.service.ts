import { Injectable } from '@angular/core';
import * as ROSLIB from 'roslib';

@Injectable({
  providedIn: 'root'
})

export class BridgeService {

  public isConnected: boolean = false;
  public socket: any;

  constructor() { }

  estabishConnection(config: any): boolean {
    if (this.isConnected) { // check if there is already a connection
      console.log("connected:", this.isConnected);
      return this.isConnected;
    }

    if (this.socket) {
      this.socket.close(); // Close old connection
      this.socket = false;
      return;
    }
    // establish a new ws connection
    this.socket = new ROSLIB.Ros({ url: `ws://${config.host}:${config.port}` });
  }

  onConnect(next): void { // if the websocket connection is sucessfull
    this.socket.on('connection', (response: any) => {
      this.isConnected = true;
      next(response)
    });
  }

  onError(next): void { // if the websocket connection failed
    this.socket.on('error', (response: any) => {
      this.isConnected = false;
      next(response)
    });
  }

  onClose(next): void { // if the websocket connection closes
    this.socket.on('close', (response: any) => {
      this.isConnected = false;
      next(response);
    });
  }

  subscribeToTopic(name: string, messageType: string): ROSLIB.Topic { // subscribe to a custom ros topic
    return new ROSLIB.Topic({
      ros: this.socket,
      name: name,
      messageType: messageType
    });
  }
}
