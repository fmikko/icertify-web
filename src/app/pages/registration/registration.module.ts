import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ComponentModule } from 'src/app/shared/modules/component/component.module';
@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ComponentModule,
    MaterialModule,
  ],
})
export class RegistrationModule {}
