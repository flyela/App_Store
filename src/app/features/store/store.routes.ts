import { Routes } from "@angular/router";

export const STORE_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'products',
        loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent)
      },
      {
        path: 'cart',
        loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent)
      }
    ]
  }
];