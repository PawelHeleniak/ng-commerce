import { Routes } from '@angular/router';
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { MainComponent } from '../components/main/main.component';

import { FavoriteComponent } from '../components/favorite/favorite.component';
import { HomeComponent } from '../components/home/home.component';
import { AccountPanelComponent } from '../components/account-panel/account-panel.component';

// CanActive
import { AuthService } from './guard/auth.service';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
  // { path: '', redirectTo: 'logowanie', pathMatch: 'full' },
  { path: 'logowanie', component: LoginComponent },
  { path: 'rejestracja', component: RegisterComponent },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'ulubione',
        component: FavoriteComponent,
      },
      {
        path: 'panel-uzytkownika',
        component: AccountPanelComponent,
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
