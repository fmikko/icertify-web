import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from 'src/app/config/url';
import { RegisterForm } from '../../models/register.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = URL;
  constructor(private http: HttpClient) {}

  setHeaders() {
    let session_token = localStorage.getItem('SESSION_CSURF_TOKEN');

    let headers = new HttpHeaders({
      'csrf-token': session_token || '',
    });
    console.log(headers);
    return { headers };
  }

  getHeaders() {
    return {
      withCredentials: true,
      ...this.setHeaders(),
    };
  }

  login(email: string, password: string) {
    return this.http.post(
      this.url + '/auth/login',
      { email, password },
      this.getHeaders()
    );
  }

  register(body: RegisterForm) {
    return this.http.post(this.url + '/user/user', body);
  }
}
