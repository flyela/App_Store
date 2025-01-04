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
    { path: '/home', title: 'Inicio' },
    { path: '/about', title: 'Nosotros' },
    { path: '/contact', title: 'Contacto' },
    { path: '/calculator', title: 'Calculadora' },
    { path: '/store/products', title: 'Productos' }
  ];

  public StoreItems: MenuItem[] = [
    {path: '/store/cart',  title: 'Carrito'},


  ];

  public authItems: MenuItem[] = [
    { path: '/admin/login', title: 'Iniciar Sesión' },
    { path: '/admin/register', title: 'Registrarse' }
  ];

  public isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}