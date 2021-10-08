import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalSuperadminRoutingModule } from './portal-superadmin-routing.module';
import { PortalSuperadminComponent } from './portal-superadmin.component';
import { ComponentModule } from 'src/app/shared/modules/component/component.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
@NgModule({
  declarations: [PortalSuperadminComponent],
  imports: [
    CommonModule,
    PortalSuperadminRoutingModule,
    ComponentModule,
    MaterialModule,
  ],
})
export class PortalSuperadminModule {}
