import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

  images = [
    {
      src: 'https://img.freepik.com/foto-gratis/tecnologia-equipamiento-laboratorio-azul-generado-ia_188544-19546.jpg',
      alt: 'Imagen1'
    },
    {
      src: 'https://images.pexels.com/photos/19871842/pexels-photo-19871842.jpeg?cs=srgb&dl=pexels-jakubzerdzicki-19871842.jpg&fm=jpg',
      alt: 'Imagen2'
    },
    {
      src: 'https://www.stampa3dservizi.com/wp-content/uploads/2023/08/stampa-3d.webp',
      alt: 'Imagen3'
    },
    {
      src: 'https://e1.pxfuel.com/desktop-wallpaper/689/1023/desktop-wallpaper-3d-printing-start-3d-printer.jpg',
      alt: 'Imagen4'
    },
    {
      src: 'https://fbi.cults3d.com/uploads/blog/image/image/2173/visuel-impression-meilleurs-services-ligne-2021.jpg',
      alt: 'Imagen5'
    },
    {
      src: 'https://png.pngtree.com/thumb_back/fw800/background/20231009/pngtree-close-up-of-a-functional-3d-printer-in-action-image_13599549.png',
      alt: 'Imagen6'
    },
     {
      src: 'https://img.channelpartner.es/wp-content/uploads/2023/07/20113143/IMPRESION-3D-5.jpg.webp',
      alt: 'Imagen7'
    }
  ];

  currentIndex = 0;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.nextImage();
    }, 5000); // Change image every 5 seconds
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }

  previousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
