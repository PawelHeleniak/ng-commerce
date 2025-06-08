import { Routes } from '@angular/router';
// Auth
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';

// User
import { MainComponent } from '../components/users/main/main.component';
import { HomeComponent } from '../components/users/home/home.component';
import { FavoriteComponent } from '../components/users/favorite/favorite.component';
import { AccountPanelComponent } from '../components/users/account-panel/account-panel.component';

// Admin
import { OrdersComponent } from '../components/admin/orders/orders.component';
import { ProductsComponent } from '../components/admin/products/products.component';
import { AppearanceComponent } from '../components/admin/appearance/appearance.component';
import { AdminLayoutComponent } from '../components/admin/admin-layout/admin-layout.component';
// CanActive
import { AuthService } from './guard/auth.service';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
  // Ścieżki ogólnodostępne
  { path: 'logowanie', component: LoginComponent },
  { path: 'rejestracja', component: RegisterComponent },

  // Część użytkownika
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'ulubione', component: FavoriteComponent },
      { path: 'konto', component: AccountPanelComponent },
    ],
  },

  // Panel administratora
  {
    path: 'admin',
    children: [
      { path: 'logowanie', component: LoginComponent },
      {
        path: '',
        component: AdminLayoutComponent,
        // canActivate: [AuthGuard],
        children: [
          { path: '', redirectTo: 'zamowienia', pathMatch: 'full' },
          { path: 'zamowienia', component: OrdersComponent },
          { path: 'produkty', component: ProductsComponent },
          { path: 'wyglad', component: AppearanceComponent },
        ],
      },
    ],
  },

  // Fallback
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
