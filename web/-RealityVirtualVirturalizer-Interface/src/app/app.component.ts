import { Component, ViewChild } from '@angular/core';
import { SidenavService } from './services/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild('left') public left: MatSidenav;
  @ViewChild('right') public right: MatSidenav;

  constructor(
    private __SidenavService: SidenavService
  ) { }

  ngAfterViewInit(): void {
    this.__SidenavService.setSidenav(this.left, this.right);
  }
}

