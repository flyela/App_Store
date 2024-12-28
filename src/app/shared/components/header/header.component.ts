import { Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public headerItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes(':'));

  // Variable para controlar el menú móvil
  public isMenuOpen = false;

  // Método para alternar el menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
