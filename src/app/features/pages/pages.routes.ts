import { Routes } from "@angular/router";

export const PAGES_ROUTES: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    title: 'About',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contact',
    title: 'Contact',
    loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'calculator',
    title: 'Calculator',
    loadComponent: () => import('./calculator/calculator.component').then(m => m.CalculatorComponent)
  },
  {
    path: 'cart',
    title: 'Cart',
    loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent)
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];