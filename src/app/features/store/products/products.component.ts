import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  searchTerm: string = '';
  selectedCategory: string = 'all';
  selectedProducts: number[] = [];

  products: Product[] = [
    { id: 1, name: 'Producto Industrial', category: 'industrial', imageUrl: 'https://cdnx.jumpseller.com/3d-wid-online-store/image/57653197/resize/300/300?1732682298' },
    { id: 2, name: 'Producto Empresarial', category: 'empresarial', imageUrl: 'https://http2.mlstatic.com/D_Q_NP_2X_886356-MCO81216489797_122024-T.webp' },
    { id: 3, name: 'Producto Académico', category: 'academico', imageUrl: 'https://www.pearls-and-flakes.com/img/cms/Impacto-patron-rebanador.jpg' },
    { id: 4, name: 'Producto Hogar', category: 'hogares', imageUrl: 'https://www.3dnatives.com/en/wp-content/uploads/sites/2/2023/12/ai_3dprinting.jpg' }
  ];

  filteredProducts(): Product[] {
    return this.products.filter(p => {
      const matchesCategory = this.selectedCategory === 'all' || p.category === this.selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  toggleProductSelection(productId: number): void {
    if (this.selectedProducts.includes(productId)) {
      this.selectedProducts = this.selectedProducts.filter(id => id !== productId);
    } else {
      this.selectedProducts.push(productId);
    }
  }
}
