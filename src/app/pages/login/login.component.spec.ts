import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [BrowserAnimationsModule,ReactiveFormsModule,HttpClientTestingModule,MaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle showPassword', () => {
    expect(component.showPassword).toBeFalsy();
    component.toggleShowPassword();
    expect(component.showPassword).toBeTruthy();
  });

  // TBA

  // Should not be able to enter characters more than the specified range in each field

  // Form should be valid before enabling
});
