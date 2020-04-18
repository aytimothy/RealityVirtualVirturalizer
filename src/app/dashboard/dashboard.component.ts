import { Component, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';
import { BridgeService } from '../services/rosbridge.service';
import * as THREE from 'three/build/three';
import *  as  data from '../../assets/Points.json';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements AfterViewInit {

  @ViewChild('canvas', { read: ElementRef, static: false }) elementView: ElementRef;
  @Input() material: THREE.PointsMaterial;
  @Input() geometry: THREE.Geometry;

  private points = [];
  public isConnected: boolean = false;
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
    data.points.forEach(element => {
      this.points.push(new THREE.Vector3(element.x, element.y, element.z));
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

  /*private generatePoint(frame: any): void {
    var origin = new THREE.Vector3(frame.posX, frame.posY, frame.posZ);
    var rotation = new THREE.Vector3(frame.rotX, frame.rotY, frame.rotZ);
    var directions = this.generateDirections(rotation);
    this.points = [];
    for (let i = 0; i < frame.distances.length; i++)
      this.points = origin + (directions[i] * frame.distances[i])
    this.generateBox(this.points, 0.0001)
  }

  private generateDirections(rotation: THREE.Vector3) {
    // Yaw
    var cosa = Math.cos(rotation.z);
    var sina = Math.sin(rotation.z);

    // Pitch
    var cosb = Math.cos(rotation.y);
    var sinb = Math.sin(rotation.y);

    // Roll
    var cosc = Math.cos(rotation.x);
    var sinc = Math.sin(rotation.x);

    var Axx = cosa * cosb;
    var Axy = cosa * sinb * sinc - sina * cosc;
    var Axz = cosa * sinb * cosc + sina * sinc;

    var Ayx = sina * cosb;
    var Ayy = sina * sinb * sinc + cosa * cosc;
    var Ayz = sina * sinb * cosc - cosa * sinc;

    var Azx = -sinb;
    var Azy = cosb * sinc;
    var Azz = cosb * cosc;

    for (var i = 0; i < this.points.length; i++) {
      var px = this.points[i].x;
      var py = this.points[i].y;
      var pz = this.points[i].z;
      this.points[i].x = Axx * px + Axy * py + Axz * pz;
      this.points[i].y = Ayx * px + Ayy * py + Ayz * pz;
      this.points[i].z = Azx * px + Azy * py + Azz * pz;
    }
  }

  private generateBox(points, size): THREE.Object3D {
    //make points at (1, 1, 1), (1, 1, -1), (1, -1, 1), (1, -1, -1), etc.
    //var l = pos + (0.5 * size) - 1 = pos - (0.5 * size), //for respective axis
    //join up three four points (or three if we have to make triangles)
    // add material
    // MATERIAL
  }*/

  public onResize(event: any): void {
    /* The event will only detect window resize events, 
    Therefore we need to substract 520 pixels from the innerWidth manually 
    to take into account the two side navigation panels which are both 260*/
    this.dashboardWidth = event.target.innerWidth - 520;
    this.dashboardHeight = event.target.innerHeight - 164;
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

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    camera.position.z = 15;
    camera.position.y = 5;

    var renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setClearColor('#00000');
    renderer.setSize(this.dashboardWidth, this.dashboardHeight);

    this.elementView.nativeElement.appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
      renderer.setSize(this.dashboardWidth, this.dashboardHeight);
      camera.aspect = this.dashboardWidth / this.dashboardHeight;
      camera.updateProjectionMatrix();
    });

    // LIGHTS
    var light = new THREE.PointLight(0xFFFFFF, 1, 500);
    light.position.set(10, 0, 25);
    scene.add(light);

    // MATERIAL
    this.material = new THREE.PointsMaterial({ size: 1, sizeAttenuation: false });

    // GEOMETRY
    this.geometry = new THREE.Geometry();

    this.points.forEach(element => {
      this.geometry.vertices.push(element)
    });

    var mesh = new THREE.Points(this.geometry, this.material);
    scene.add(mesh);

    var controls = new OrbitControls(camera, renderer.domElement);

    controls.update();

    var render = function () {
      requestAnimationFrame(render);
      controls.update();
      renderer.render(scene, camera)
    }

    render();
  }
}