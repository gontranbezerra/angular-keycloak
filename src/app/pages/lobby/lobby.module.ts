import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

import { LobbyComponent } from './lobby.component';
import { CustomerByUraComponent } from './customer-by-ura/customer-by-ura.component';
import { FindCustomerComponent } from './find-customer/find-customer.component';

import { LobbyRoutesModule } from './lobby.routing.module';

@NgModule({
  declarations: [
    LobbyComponent,
    CustomerByUraComponent,
    FindCustomerComponent],
  imports: [
    CommonModule,
    LobbyRoutesModule,
  ],
})
export class LobbyModule {}
