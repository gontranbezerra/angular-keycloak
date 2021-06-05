import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  isLoggedIn: boolean;
  userProfile?: KeycloakProfile | null;
  showMenu: boolean;

  constructor(
    private readonly keycloak: KeycloakService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.isLoggedIn = false;
    this.userProfile = null;
    this.showMenu = true;

    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((state: BreakpointState) => {
        if (
          state.breakpoints[Breakpoints.XSmall] ||
          state.breakpoints[Breakpoints.Small]
        ) {
          this.showMenu = false;
        } else {
          this.showMenu = true;
        }
      });


  }

  async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();
    console.log('ngOnInit.isLoggedIn:', this.isLoggedIn);

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
      console.log('ngOnInit.userProfile:', this.userProfile);
    } else {
      this.login();
    }

  }

  async login() {
    await this.keycloak.login();
  }

  logout() {
    this.keycloak.logout();
  }

  openSidenav() {
    this.sidenav.open();
  }

  closeSidenav() {
    this.sidenav.close();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.breakpointObserver.ngOnDestroy();
  }
}
