import { Component } from "@angular/core"
import { RouterModule } from "@angular/router"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  // Imágenes para el carrusel
  carouselImages = [
    "https://intelligy.com/files/blog/2022/653/sostenibilidad-impresion3d.jpg",
    "https://intelligy.com/files/blog/2022/653/sostenibilidad-impresion3d.jpg",
    "https://http2.mlstatic.com/D_NQ_NP_884468-CBT73228940587_122023-O-broca-de-aguja-para-impresora-3d.webp",
    "./assets/images/3d-printer-1.jpg",
  ]

  currentImageIndex = 0

  // Método para cambiar a la imagen anterior
  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.carouselImages.length) % this.carouselImages.length
  }

  // Método para cambiar a la siguiente imagen
  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.carouselImages.length
  }

  // Método para ir a una imagen específica
  goToImage(index: number): void {
    this.currentImageIndex = index
  }
}
