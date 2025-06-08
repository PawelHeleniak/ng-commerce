import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-footer',
    imports: [RouterModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  account: boolean = false;
  ngOnInit() {
    const user = sessionStorage.getItem('account');
    if (user) this.account = true;
  }
}
