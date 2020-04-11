import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as ROSLIB from 'roslib';

@Injectable({
  providedIn: 'root'
})

export class BridgeService {

  // set default host and port values
  private host: string = window.location.hostname;
  private port: string = "9090";

  // websocket connection
  public socket: ROSLIB.Ros;

  // connection status
  public isConnected: BehaviorSubject<boolean>

  constructor() {
    this.isConnected = new BehaviorSubject<boolean>(false);
  }

  public getConnnectionStatus(): Observable<boolean> {
    return this.isConnected.asObservable();
  }

  private updateConnectionStatus(status: boolean): void {
    this.isConnected.next(status);
  }

  public setCustomAddress(config: any) {
    this.host = config.host;
    this.port = config.port;

    // if already connected close old connection
    if (this.isConnected && this.socket) {
      this.socket.close();
      this.socket = null;
      this.updateConnectionStatus(false);
    }

    // establish a new connection after changes
    this.estabishConnection((response) => {
      console.log(response);
    });
  }

  public estabishConnection(next): void {
    if (this.isConnected) { // check if there is already a connection
        return;
    }

    // establish a new ws connection
    this.socket = new ROSLIB.Ros({
      url: `ws://${this.host}:${this.port}`
    });

    this.socket.on('connection', (response: any) => { // if the websocket connection is sucessfull
      this.updateConnectionStatus(true);
      console.log(`Success! Connected to rosbridge on: ${this.host}:${this.port}`);
      next(response);
    });

    this.socket.on('error', (response: any) => { // if the websocket connection failed
      this.updateConnectionStatus(false);
      console.log(`Error! Failed to connect to rosbridge on: ${this.host}:${this.port}`);
      next(response);
    });

    this.socket.on('close', (response: any) => { // if the websocket connection closes
      this.updateConnectionStatus(false);
      console.log(`Closed rosbridge connection on: ${this.host}:${this.port}`);
      next(response);
    });
  }

  public subscribeToTopic(name: string, messageType: string): ROSLIB.Topic { // subscribe to a custom ros topic
    return new ROSLIB.Topic({
      ros: this.socket,
      name: name,
      messageType: messageType
    });
  }

  public createService(name: String, serviceType: String): ROSLIB.Service { // create a custom ros service
    return new ROSLIB.Service({
      ros: this.socket,
      name: name,
      serviceType: serviceType
    });
  }
}
