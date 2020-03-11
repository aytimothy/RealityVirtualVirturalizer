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
  constructor() { }

  public setSidenav(left: MatSidenav, right: MatSidenav): void {
    this.left = left;
    this.right = right;
  }

  public toggleRight(): void {
    this.right.toggle();
  }

  public toggleLeft(): void {
    this.left.toggle();
  }
}
