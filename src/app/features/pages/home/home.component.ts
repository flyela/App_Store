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
    "/assets/3d-printer.jpg",
    "/assets/3d-printer-2.jpg",
    "/assets/3d-printer-3.jpg",
    "/assets/3d-printer-4.jpg",
    "/assets/3d-printer-5.jpg",
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
