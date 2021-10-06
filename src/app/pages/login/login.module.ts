import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { ComponentModule } from 'src/app/shared/modules/component/component.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, ComponentModule, MaterialModule],
})
export class LoginModule {}
