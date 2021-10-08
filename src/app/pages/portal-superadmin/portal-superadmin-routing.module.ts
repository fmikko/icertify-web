import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from '../login/login.component
import { PortalSuperadminComponent } from './portal-superadmin.component';

const routes: Routes = [
  {
    path: '',
    component: PortalSuperadminComponent,
  },
  {
    path: 'add-user',
    loadChildren: () =>
      import('./pages/add-user/add-user.module').then((o) => o.AddUserModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalSuperadminRoutingModule {}
