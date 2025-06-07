import { Component } from '@angular/core';

import { ProductsService } from '../../core/services/products.service';

type Product = {
  img: string;
  imgAlt: string;
  producent: string;
  model: string;
  price: string;
  desc: string;
  amount: number;
  spec: ProductSpec;
  place: number;
};
type ProductSpec = {
  color: string;
  memory: string;
  ram: string;
  screen: string;
  resolution: string;
  waterproof: string;
};

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}
  public products: Array<Product> = [];
  ngOnInit() {
    this.products = this.productsService.product;
  }
}
