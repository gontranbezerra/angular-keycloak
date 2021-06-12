import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { PageNotFoundComponent } from './';
import { LobbyComponent } from './lobby.component';
import { CustomerByUraComponent } from './customer-by-ura/customer-by-ura.component';
import { FindCustomerComponent } from './find-customer/find-customer.component';

const lobbyRoutes: Routes = [
  {
    path: '',
    component: LobbyComponent,
    children: [
      {
        path: '',
        redirectTo: 'customer-by-ura',
        pathMatch: 'full',
      },
      { path: 'customer-by-ura', component: CustomerByUraComponent },
      { path: 'find-customer', component: FindCustomerComponent },
    ],
  },

  // { path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(lobbyRoutes)],
  exports: [RouterModule],
})
export class LobbyRoutesModule {}
