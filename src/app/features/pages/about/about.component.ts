import { Component } from '@angular/core';


interface TeamMember {
  name: string
  position: string
  image: string
  bio?: string
  social?: {
    linkedin?: string
    email?: string
    instagram?: string
  }
}


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  teamMembers: TeamMember[] = [
    {
      name: "Fabio Yela",
      position: "Ingeniero en Sistemas",
      image: "/assets/Images/Fabio.jpg",
      bio: "Fundador y líder técnico con más de 10 años de experiencia en desarrollo de soluciones tecnológicas y sistemas 3D avanzados.",
      social: {
        linkedin: "https://linkedin.com/in/fabioyela",
        email: "fabio@fysistem3d.com",
      },
    },
    {
      name: "Cristian Melo",
      position: "Ingeniero Eléctrico",
      image: "https://via.placeholder.com/150",
      bio: "Especialista en automatización y sistemas eléctricos para equipos de impresión 3D industrial. Lidera el departamento de innovación.",
      social: {
        linkedin: "https://linkedin.com/in/cristianmelo",
        email: "cristian@fysistem3d.com",
      },
    },
    {
      name: "Tatiana Pineda",
      position: "Directora de Marketing",
      image: "https://via.placeholder.com/150",
      bio: "Experta en estrategias de marketing digital y comunicación. Responsable de la presencia de marca y relaciones con clientes.",
      social: {
        linkedin: "https://linkedin.com/in/tatianapineda",
        instagram: "https://instagram.com/tatianapineda",
      },
    },
    {
      name: "Carlos Ramírez",
      position: "Diseñador 3D Senior",
      image: "https://via.placeholder.com/150",
      bio: "Artista y diseñador con experiencia en modelado 3D para diversos sectores. Especializado en diseños de alta complejidad y precisión.",
    },
    {
      name: "Laura Gómez",
      position: "Especialista en Prototipado",
      image: "https://via.placeholder.com/150",
      bio: "Ingeniera mecánica con enfoque en desarrollo de prototipos funcionales. Experta en materiales y técnicas de impresión avanzadas.",
    },
  ]
}
