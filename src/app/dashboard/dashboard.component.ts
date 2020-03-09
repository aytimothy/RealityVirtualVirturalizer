import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../services/bridge.service';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  listening: boolean = false;
  messages = [];
  constructor(
    public __BridgeService: BridgeService,
    private __DialogService: DialogService,
  ) { }

  ngOnInit() { }

  startListening() {
    this.listening = true;
    this.__BridgeService.onMessage((response: any) => {
      this.__DialogService.openConfirmDialog("Output: " + response.data).afterClosed().subscribe(confirm => {
        this.messages.push(response.data);
      });
    });
  }
}
