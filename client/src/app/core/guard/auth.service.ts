import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  isAuthenticated() {
    const user = sessionStorage.getItem('account');
    return user ? true : false;
  }
}
