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
export class UsersService {
  constructor() {}
  private users: Array<User> = [
    {
      name: 'Wiesław',
      lastName: 'Komander',
      phone: '223556545',
      address: '20-313 Lublin, Łęczyńska',
      email: 'test@gmail.com',
      password: 'P@ssword1',
    },
    {
      name: 'Barbara',
      lastName: 'Chmurska',
      phone: '223556545',
      address: '00025 Warszawa, Krucza',
      email: 'test2@gmail.com',
      password: 'P@ssword1',
    },
  ];

  public getUser(email: string, password: string): User | undefined {
    return this.users.find(
      (user) => user.email === email && user.password === password
    );
  }
}
