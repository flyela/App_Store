import { Routes } from "@angular/router";

export const PAGES_ROUTES: Routes = [
    {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./home/home.component')
    },
    {
        path: 'about',
        title: 'About',
        loadComponent: () => import('./about/about.component')
    },
    
    {
        path: 'contact',
        title: 'Contact',
        loadComponent: () => import('./contact/contact.component')
    },
    {
        path: 'calculator',
        title: 'Calculator',
        loadComponent: () => import('./calculator/calculator.component')
    },
    {
        path: 'cart',
        title: 'Cart',
        loadComponent: () => import('./cart/cart.component')
    },
   /* {
        path: 'store',
        title: 'Store',
        loadComponent: () => import('./store/store.component')
    },*/
   
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];