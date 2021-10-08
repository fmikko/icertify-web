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
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  // env
  checkPasswords: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let passConfirm = group.get('passwordConfirm')?.value;
    return pass === passConfirm ? null : { notSame: true };
  };

  showPassword: boolean = false;
  registerForm = this.fb.group(
    {
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      middleName: new FormControl(''),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl(''),
      mobileNumber: new FormControl('', [Validators.required]),
    },
    { validator: this.checkPasswords }
  );

  constructor(private sb: MatSnackBar, private fb: FormBuilder) {}

  ngOnInit(): void {}

  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  //fn

  register() {}

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
