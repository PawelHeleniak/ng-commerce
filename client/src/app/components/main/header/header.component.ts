import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [RouterModule, CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) {}
  account: boolean = false;

  public nav: string = 'Start';
  public navList: Array<string> = [
    'Start',
    'Polecane',
    'Nowości',
    'Promocje',
    'Poradniki',
  ];
  ngOnInit(): void {
    if (this.router.url === '/ulubione') this.nav = 'ulubione';
    if (this.router.url === '/panel-uzytkownika') this.nav = 'konto';
    const user = sessionStorage.getItem('account');
    if (user) this.account = true;
  }
  public handleNav(item: string): void {
    this.nav = item;
  }
  logOut() {
    sessionStorage.removeItem('account');
    this.router.navigate(['/logowanie']);
  }
}
