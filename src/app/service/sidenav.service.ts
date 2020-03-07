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
  private sidenav: MatSidenav;
  constructor() { }

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  public open() {
    return this.sidenav.open();
  }


  public close() {
    return this.sidenav.close();
  }

  public toggle(): void {
    this.sidenav.toggle();
  }
}
