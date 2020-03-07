import { Component, ViewChild } from '@angular/core';
import { SidenavService } from './service/sidenav.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  browserSelected: boolean = true;

  constructor(private __SidenavService: SidenavService) { }

  ngAfterViewInit(): void {
    this.__SidenavService.setSidenav(this.sidenav);
  }

  toggleFileBrowser() {
    this.browserSelected = !this.browserSelected;
  }
}

