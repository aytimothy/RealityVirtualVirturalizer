import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../service/bridge.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  message: string;
  constructor(public __BridgeService: BridgeService) { }

  ngOnInit() {
  }

  test() {
    this.__BridgeService.onListener((response: any) => {
      this.message = response.data;
    });
  }
}
