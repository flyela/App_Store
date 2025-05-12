import { Routes } from "@angular/router";
import { authGuard } from '../../core/guards/auth.guard';
import { AdminComponent } from './admin.component';

export const ADMIN_ROUTES: Routes = [
  // Rutas públicas (login y register)
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent)
      }
    ]
  },

  // Rutas protegidas bajo el componente AdminComponent
  {
    path: '',
    component: AdminComponent,
    canActivate: [authGuard],
    children: [
      // Aquí puedes poner rutas internas del panel admin
      {
        path: 'usuarios',
        loadComponent: () => import('./auth/users/users.component').then(m => m.UsersComponent)
      }
    ]
  }
];
