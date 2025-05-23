import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number
  name: string
  category: string
  imageUrl: string
  description: string
  price?: string
  featured?: boolean
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  searchTerm = ""
  selectedCategory = "all"
  selectedProducts: number[] = []

  products: Product[] = [
    {
      id: 1,
      name: "Prototipo Industrial Avanzado",
      category: "industrial",
      imageUrl: "https://cdnx.jumpseller.com/3d-wid-online-store/image/57653197/resize/300/300?1732682298",
      description: "Prototipos de alta precisión para la industria manufacturera",
      price: "Desde $150.000",
      featured: true,
    },
    {
      id: 2,
      name: "Solución Empresarial Personalizada",
      category: "empresarial",
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_2X_886356-MCO81216489797_122024-T.webp",
      description: "Herramientas y componentes personalizados para empresas",
      price: "Desde $200.000",
      featured: true,
    },
    {
      id: 3,
      name: "Modelo Educativo Interactivo",
      category: "academico",
      imageUrl: "https://www.pearls-and-flakes.com/img/cms/Impacto-patron-rebanador.jpg",
      description: "Modelos didácticos para instituciones educativas",
      price: "Desde $80.000",
    },
    {
      id: 4,
      name: "Decoración Hogar Premium",
      category: "hogares",
      imageUrl: "https://www.3dnatives.com/en/wp-content/uploads/sites/2/2023/12/ai_3dprinting.jpg",
      description: "Objetos decorativos y funcionales para el hogar",
      price: "Desde $50.000",
    },
    {
      id: 5,
      name: "Componente Automotriz",
      category: "industrial",
      imageUrl: "https://cdnx.jumpseller.com/3d-wid-online-store/image/57653197/resize/300/300?1732682298",
      description: "Piezas de repuesto y componentes para la industria automotriz",
      price: "Desde $120.000",
    },
    {
      id: 6,
      name: "Kit Empresarial Completo",
      category: "empresarial",
      imageUrl: "https://http2.mlstatic.com/D_Q_NP_2X_886356-MCO81216489797_122024-T.webp",
      description: "Conjunto completo de herramientas para oficinas modernas",
      price: "Desde $300.000",
    },
    {
      id: 7,
      name: "Modelo Anatómico Médico",
      category: "academico",
      imageUrl: "https://www.pearls-and-flakes.com/img/cms/Impacto-patron-rebanador.jpg",
      description: "Réplicas anatómicas para educación médica",
      price: "Desde $180.000",
      featured: true,
    },
    {
      id: 8,
      name: "Accesorios Hogar Inteligente",
      category: "hogares",
      imageUrl: "https://www.3dnatives.com/en/wp-content/uploads/sites/2/2023/12/ai_3dprinting.jpg",
      description: "Accesorios funcionales para hogares inteligentes",
      price: "Desde $75.000",
    },
  ]

  categories = [
    { value: "all", label: "Todas las categorías", icon: "grid-3x3" },
    { value: "industrial", label: "Industrial", icon: "factory" },
    { value: "empresarial", label: "Empresarial", icon: "briefcase" },
    { value: "academico", label: "Académico", icon: "graduation-cap" },
    { value: "hogares", label: "Hogares", icon: "home" },
  ]

  // Método agregado para obtener productos destacados
  getFeaturedProducts(): Product[] {
    return this.products.filter(p => p.featured);
  }

  filteredProducts(): Product[] {
    return this.products.filter((p) => {
      const matchesCategory = this.selectedCategory === "all" || p.category === this.selectedCategory
      const matchesSearch =
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }

  toggleProductSelection(productId: number): void {
    if (this.selectedProducts.includes(productId)) {
      this.selectedProducts = this.selectedProducts.filter((id) => id !== productId)
    } else {
      this.selectedProducts.push(productId)
    }
  }

  getCategoryIcon(category: string): string {
    const categoryData = this.categories.find((c) => c.value === category)
    return categoryData?.icon || "package"
  }

  getCategoryLabel(category: string): string {
    const categoryData = this.categories.find((c) => c.value === category)
    return categoryData?.label || category
  }

  clearSelection(): void {
    this.selectedProducts = []
  }

  getSelectedCount(): number {
    return this.selectedProducts.length
  }
}