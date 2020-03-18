import { Component } from '@angular/core';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  constructor(private __DialogService: DialogService) { }

  configureRosBridge() {
    this.__DialogService.openRosconfigDialog().afterClosed().subscribe()
  }
}
