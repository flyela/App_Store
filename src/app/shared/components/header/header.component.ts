import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface MenuItem {
  path: string;
  title: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public headerItems: MenuItem[] = [
    { path: '/home', title: 'Inicio' },
    { path: '/about', title: 'Nosotros' },
    { path: '/contact', title: 'Contacto' },
    { path: '/calculator', title: 'Calculadora' }
  ];

  public isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}