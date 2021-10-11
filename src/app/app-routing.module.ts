import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((o) => o.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/registration/registration.module').then(
        (o) => o.RegistrationModule
      ),
  },
  {
    path: 'portal-superadmin',
    loadChildren: () =>
      import('./pages/portal-superadmin/portal-superadmin.module').then(
        (o) => o.PortalSuperadminModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
