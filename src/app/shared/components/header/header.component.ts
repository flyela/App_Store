import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  path: string;
  title: string;
  icon?: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public PagesItems: MenuItem[] = [
    { path: '/pages/home', title: 'Inicio' },
    { path: '/pages/about', title: 'Nosotros' },
    { path: '/pages/contact', title: 'Contacto' },
   // { path: '/pages/calculator', title: 'Calculadora 3D' },
    { path: '/store/products', title: 'Productos' },
    {path: '/pages/solutions', title: 'Soluciones'},
  ];

  public StoreItems: MenuItem[] = [
    {path: '/store/cart',  title: 'Carrito'},


  ];

  public authItems: MenuItem[] = [
    { path: '/admin/auth/login', title: 'Iniciar Sesión' },
    { path: '/admin/auth/register', title: 'Registrarse' }
  ];

  public isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}