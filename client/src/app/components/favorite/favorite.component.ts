import { Component } from '@angular/core';

type Product = {
  name: string;
  price: string;
  img: string;
  desc: string;
};
@Component({
    selector: 'app-favorite',
    imports: [],
    templateUrl: './favorite.component.html',
    styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {
  public products: Array<Product> = [
    {
      name: 'Motorola Edge 50 Pro',
      price: '2 999,00',
      img: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2024/5/pr_2024_5_15_7_0_50_262_05.jpg',
      desc: '',
    },
    {
      name: 'Google Pixel 8a',
      price: '3 799,00',
      img: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2024/5/pr_2024_5_22_12_38_26_806_00.jpg',
      desc: '',
    },
    {
      name: 'Apple iPhone 14',
      price: '3 799,00',
      img: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_10_22_7_714_02.jpg',
      desc: '',
    },
  ];
}
