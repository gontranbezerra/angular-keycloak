import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { Menu, MenuItems } from '../../../shared/services/menu-items';
import { PRIMARY_OUTLET, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [],
})
export class SidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  menu: Menu[];

  private mobileQueryListener: () => void;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private menuItems: MenuItems,
    private router: Router
  ) {
    this.mobileQuery = this.media.matchMedia('(min-width: 768px)');
    this.mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
    this.menu = [];

    this.handleMenu();
  }

  handleMenu() {
    const path: string = this.router.parseUrl(this.router.url).root.children[
      PRIMARY_OUTLET
    ].segments[0].path;

    this.menu = this.menuItems
      .getMenuitem()
      .filter((menu) => menu.module === path);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }
}
