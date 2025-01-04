import { Routes } from "@angular/router";
import { authGuard } from '../../core/guards/auth.guard';

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        canActivate: [authGuard],
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
    }
];