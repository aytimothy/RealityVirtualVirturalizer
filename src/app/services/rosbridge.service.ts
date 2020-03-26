import { Injectable } from '@angular/core';
import * as ROSLIB from 'roslib';

@Injectable({
  providedIn: 'root'
})

export class BridgeService {

  // set default host and port values
  private host: string = "0.0.0.0";
  private port: string = "9090";

  // websocket connection
  public socket: ROSLIB.Ros;

  // connection status
  public isConnected: boolean = false;

  constructor() { }

  public setCustomAddress(config: any) {
    this.host = config.host;
    this.port = config.port;

    // if already connected close old connection
    if (this.isConnected && this.socket) {
      this.socket.close();
      this.socket = null;
      this.isConnected = false;
    }

    // establish a new connection after changes
    this.estabishConnection((response) => {
      console.log(response);
    });
  }

  public estabishConnection(next): boolean {
    if (this.isConnected) { // check if there is already a connection
      return this.isConnected;
    }

    // establish a new ws connection
    this.socket = new ROSLIB.Ros({
      url: `ws://${this.host}:${this.port}`
    });

    this.socket.on('connection', (response: any) => { // if the websocket connection is sucessfull
      this.isConnected = true;
      next(response)
    });

    this.socket.on('error', (response: any) => { // if the websocket connection failed
      this.isConnected = false;
      next(response)
    });

    this.socket.on('close', (response: any) => { // if the websocket connection closes
      this.isConnected = false;
      next(response)
    });
  }

  public subscribeToTopic(name: string, messageType: string): ROSLIB.Topic { // subscribe to a custom ros topic
    return new ROSLIB.Topic({
      ros: this.socket,
      name: name,
      messageType: messageType
    });
  }
}
