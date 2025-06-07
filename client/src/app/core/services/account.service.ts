import { Injectable } from '@angular/core';
type User = {
  name: string;
  lastName: string;
  phone: string;
  address: string;
  email: string;
  password: string;
};
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor() {}
  private user: User = {
    name: '',
    lastName: '',
    phone: '',
    address: '',
    email: '',
    password: '',
  };
  handleAccount(user: User) {
    sessionStorage.setItem('account', 'login');
    sessionStorage.setItem('name', user.name.toString());
    sessionStorage.setItem('lastName', user.lastName.toString());
    sessionStorage.setItem('phone', user.phone.toString());
    sessionStorage.setItem('address', user.address.toString());
    sessionStorage.setItem('email', user.email.toString());
    sessionStorage.setItem('password', user.password.toString());
    this.addUser();
  }
  addUser() {
    this.user.name = sessionStorage.getItem('name') ?? '';
    this.user.lastName = sessionStorage.getItem('lastName') ?? '';
    this.user.phone = sessionStorage.getItem('phone') ?? '';
    this.user.address = sessionStorage.getItem('address') ?? '';
    this.user.email = sessionStorage.getItem('email') ?? '';
    this.user.password = sessionStorage.getItem('password') ?? '';
  }
  getUser(): User {
    this.addUser();
    return {
      name: sessionStorage.getItem('name') ?? '',
      lastName: sessionStorage.getItem('lastName') ?? '',
      phone: sessionStorage.getItem('phone') ?? '',
      address: sessionStorage.getItem('address') ?? '',
      email: sessionStorage.getItem('email') ?? '',
      password: sessionStorage.getItem('password') ?? '',
    };
  }
}
