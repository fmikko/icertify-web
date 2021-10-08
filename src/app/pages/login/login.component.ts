import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // env

  showPassword = false;
  isLoggingin: boolean = false;
  loginForm = this.fb.group({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private sb: MatSnackBar
  ) {}

  ngOnInit(): void {}

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  login() {
    this.isLoggingin = true;
    let credentials = {
      email: this.loginForm.getRawValue().email,
      password: this.loginForm.getRawValue().password,
    };

    this.auth.login(credentials.email, credentials.password).subscribe(
      (res: any) => {
        // console.log('auth Login result: ', res)
        this.isLoggingin = false;
        this.sb.open('Success', 'Okay', {
          duration: 5000,
          panelClass: ['sucess'],
        });
      },
      (error) => {
        // console.log('login error: ' , error)
        this.isLoggingin = false;
        this.sb.open('Credentials is invalid: ', 'Okay', {
          duration: 3000,
          panelClass: ['failed'],
        });
      }
    );
  }
}
