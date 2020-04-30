import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
/* The code below was copied from stackexchange which adds the ability
    to toggle the sidenav from a seperate component 
    https://stackoverflow.com/questions/48073057/open-close-sidenav-from-another-component
*/
export class SidenavService {
  private left: MatSidenav;
  private right: MatSidenav;
  private leftOpen: Boolean;
  private rightOpen: Boolean;

  constructor() { }

  public setSidenav(left: MatSidenav, right: MatSidenav): void {
    this.left = left;
    this.right = right;
    this.leftOpen = this.left.opened;
    this.rightOpen = this.right.opened;
  }

  public enableFullScreen() {
    if (this.leftOpen && this.rightOpen) {
      this.toggleRight();
      this.toggleLeft();
    }
    if (this.leftOpen && !this.rightOpen) {
      this.toggleLeft();
    }
    if (!this.leftOpen && this.rightOpen) {
      this.toggleRight();
    }
  }

  public disableFullScreen() {
    if (!this.leftOpen && !this.rightOpen) {
      this.toggleRight();
      this.toggleLeft();
    }
    if (this.leftOpen && !this.rightOpen) {
      this.toggleRight();
    }
    if (!this.leftOpen && this.rightOpen) {
      this.toggleLeft();
    }
  }

  public toggleRight(): void {
    this.right.toggle();
    this.rightOpen = this.right.opened;
  }

  public toggleLeft(): void {
    this.left.toggle();
    this.leftOpen = this.left.opened;
  }
}
