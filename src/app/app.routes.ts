import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/pages/pages.routes').then(m => m.PAGES_ROUTES),
      },
      {
        path: 'pages',
        loadChildren: () => import('./features/pages/pages.routes').then(m => m.PAGES_ROUTES),
      },
      {
        path: 'store',
        loadChildren: () => import('./features/store/store.routes').then(m => m.STORE_ROUTES),
      },
      {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES),
      }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found/not-found.component')
      .then(m => m.NotFoundComponent)
  }
];