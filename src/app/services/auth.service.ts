import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    if (email === 'admin@exma.cloud' && password === 'Misko2017?') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Michal Pajunk', email: 'admin@exma.cloud' });
    }
    return throwError(new Error('Failed to login'));
  }
}
