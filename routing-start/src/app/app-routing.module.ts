import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {AuthGuard} from './auth-guard.service';
import {canDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {ErrorMessageComponent} from './error-message/error-message.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ServerResolver} from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ]},
  { path: 'servers',
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [canDeactivateGuard] },
    ]},
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorMessageComponent, data: {message: 'Page not found'} },
  { path: '**', redirectTo: '/not-found'  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
