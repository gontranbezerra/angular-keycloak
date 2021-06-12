import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { FullComponent } from './layouts/full/full.component';

// const routes: Routes = [
//   { path: '', component: ContentComponent, canActivate: [AuthGuard] },
//   { path: '**', redirectTo: '' },
// ];

const appRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'lobby',
        pathMatch: 'full',
      },
      {
        path: 'lobby',
        loadChildren: () =>
          import('src/app/pages/lobby/lobby.module').then(
            (mod) => mod.LobbyModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// const appRoutes: Routes = [
//   {
//     path: 'contacts',
//     loadChildren: 'app/contacts/contacts.module#ContactsModule',
//     canActivate: [AuthGuard],
//   },
//   {
//     path: '',
//     pathMatch: 'full',
//     component: HomeComponent,
//     canActivate: [AuthGuard],
//   },
//   { path: 'signin', component: SigninComponent },
//   { path: 'not-found', component: NotFoundComponent },
//   { path: '**', redirectTo: 'not-found' },
// ];

// const routes: Routes = [
//   {
//     path: 'dashboard',
//     pathMatch: 'full',
//     canActivate: [AuthGuard],
//     component: DashboardPageComponent,
//   },
//   {
//     path: 'typography',
//     pathMatch: 'full',
//     canActivate: [AuthGuard],
//     loadChildren: () =>
//       import('./pages/typography/typography.module').then(
//         (m) => m.TypographyModule
//       ),
//   },
//   {
//     path: 'tables',
//     pathMatch: 'full',
//     canActivate: [AuthGuard],
//     loadChildren: () =>
//       import('./pages/tables/tables.module').then((m) => m.TablesModule),
//   },
//   {
//     path: 'notification',
//     pathMatch: 'full',
//     canActivate: [AuthGuard],
//     loadChildren: () =>
//       import('./pages/notification/notification.module').then(
//         (m) => m.NotificationModule
//       ),
//   },
//   {
//     path: 'ui',
//     canActivate: [AuthGuard],
//     loadChildren: () =>
//       import('./pages/ui-elements/ui-elements.module').then(
//         (m) => m.UiElementsModule
//       ),
//   },
//   {
//     path: '404',
//     component: NotFoundComponent,
//   },
//   {
//     path: 'login',
//     loadChildren: () =>
//       import('./pages/auth/auth.module').then((m) => m.AuthModule),
//   },
//   {
//     path: '**',
//     redirectTo: '404',
//   },
// ];
