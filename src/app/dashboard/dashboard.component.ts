import { Component } from '@angular/core';
import { Product } from '../core/interfaces/product.interface';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../core/services/product-service.service';
enum SHIPPING {
  STANDARD = 'standard extra 10 day shipping',
  EXPRESS = 'express',
}

interface Options {
  isWireless: boolean;
  hasWarranty: boolean;
  shippingMethod: SHIPPING;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  imports: [CardComponent, CommonModule, FormsModule],
})
export class DashboardComponent {
  userName: string = 'johnDoe_123';

  products: Product[] = [];
  category: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.loadProducts(this.category);
  }

  ngOnChanges(): void {
    console.log(this.category);
    this.products = this.loadProducts(this.category);
  }

  loadProducts(c: string) {
    return this.productService.getProducts(c);
  }

  reset() {
    this.category = '';
    this.loadCategory();
  }

  loadCategory() {
    this.products = this.loadProducts(this.category);
  }
}
