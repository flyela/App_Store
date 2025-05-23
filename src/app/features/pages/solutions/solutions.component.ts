import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
portfolioProjects = [
    {
      title: "Prototipo de Drone Industrial",
      description: "Desarrollo de componentes especializados para drones de inspección",
      category: "Industrial",
    },
    {
      title: "Maqueta Residencial",
      description: "Modelo arquitectónico detallado de complejo residencial",
      category: "Arquitectura",
    },
    {
      title: "Modelo Anatómico",
      description: "Réplica de órganos para educación médica",
      category: "Médico",
    },
    {
      title: "Herramienta Personalizada",
      description: "Diseño de herramienta específica para línea de producción",
      category: "Industrial",
    },
    {
      title: "Joyería Artística",
      description: "Piezas únicas de joyería con diseños complejos",
      category: "Arte",
    },
    {
      title: "Componente Automotriz",
      description: "Prototipo de pieza para la industria automotriz",
      category: "Automotriz",
    },
  ]
}
