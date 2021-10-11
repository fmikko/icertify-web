import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterForm } from 'src/app/shared/models/register.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  // env

  showPassword: boolean = false;
  registerForm = this.fb.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    // middleName: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
    passwordConfirm: new FormControl(''),
    mobileNumber: new FormControl('', [Validators.required]),
  });

  constructor(
    private sb: MatSnackBar,
    private fb: FormBuilder,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  //fn

  register() {
    // set body
    let body: RegisterForm = {
      firstName: this.registerForm.getRawValue().firstName,
      lastName: this.registerForm.getRawValue().lastName,
      email: this.registerForm.getRawValue().email,
      password: this.registerForm.getRawValue().password,
      passwordConfirm: this.registerForm.getRawValue().passwordConfirm,
      mobileNumber: this.registerForm.getRawValue().number,
    };

    // check both passwords
    if (
      !(
        this.registerForm.getRawValue().password ===
        this.registerForm.getRawValue().passwordConfirm
      )
    ) {
      this.sb.open('Password did not match!', 'Okay!', {
        duration: 5000,
        panelClass: ['failed'],
      });
    } else {
      this.auth.register(body).subscribe(
        (res: any) => {
          this.sb.open('Success', 'Okay', {
            duration: 5000,
            panelClass: ['success'],
          });
        },
        (error) => {
          this.sb.open('Please input correct value', 'Okay', {
            duration: 3000,
            panelClass: ['failed'],
          });
        }
      );
    }
  }

  // utils
  numberInputOnly(event: any) {
    return (
      // backspace
      (event.charCode > 7 && event.charCode < 9) ||
      // period ('.')
      (event.charCode > 45 && event.charCode < 47) ||
      // 0-9
      (event.charCode > 47 && event.charCode < 58) ||
      // delete
      (event.charCode > 126 && event.charCode < 128)
    );
  }
}
