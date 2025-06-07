import { Injectable } from '@angular/core';
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
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  // 1-Polecane, 2-Nowości, 3-Promocje
  public product: Array<Product> = [
    {
      img: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/9/pr_2023_9_12_23_10_28_236_00.jpg',
      imgAlt: 'iPhone 15',
      producent: 'Apple',
      model: 'iPhone 15',
      price: '3 499,00',
      desc: 'iPhone 15 to najnowszy flagowy smartfon firmy Apple, zaprezentowany w 2023 roku, reprezentuje połączenie nowoczesnej technologii, eleganckiego designu i wyjątkowej wydajności, co czyni go jednym z najpotężniejszych smartfonów dostępnych na rynku.',
      amount: 9,
      place: 2,
      spec: {
        color: 'Zielony',
        memory: '128GB',
        ram: '8',
        screen: '6,1',
        resolution: '2556 x 1179',
        waterproof: 'IP68',
      },
    },
    {
      img: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/9/pr_2022_9_9_10_22_7_714_02.jpg',
      imgAlt: 'iPhone 14',
      producent: 'Apple',
      model: 'iPhone 14',
      price: '3 799,00',
      desc: 'iPhone 14 to flagowy smartfon firmy Apple, zaprezentowany w 2022 roku, reprezentuje połączenie nowoczesnej technologii, eleganckiego designu i wyjątkowej wydajności, co czyni go jednym z najpotężniejszych smartfonów dostępnych na rynku.',
      amount: 3,
      place: 1,
      spec: {
        color: 'Czarny',
        memory: '256GB',
        ram: '6',
        screen: '6,1',
        resolution: '2532 x 1170',
        waterproof: 'IP68',
      },
    },
    {
      img: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2024/5/pr_2024_5_22_12_38_26_806_00.jpg',
      imgAlt: 'Pixel 8a',
      producent: 'Google',
      model: 'Pixel 8a',
      price: '3 799,00',
      desc: 'Pixel 8a to najnowszy smartfon firmy Google, zaprezentowany w 2024 roku, reprezentuje połączenie nowoczesnej technologii, eleganckiego designu i wyjątkowej wydajności, co czyni go jednym z najpotężniejszych smartfonów dostępnych na rynku.',
      amount: 4,
      place: 2,
      spec: {
        color: 'Czarny',
        memory: '128GB',
        ram: '8',
        screen: '6,1',
        resolution: '2400 x 1080',
        waterproof: 'IP68',
      },
    },
    {
      img: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/1/pr_2023_1_25_9_47_54_157_00.jpg',
      imgAlt: 'Pixel 8a',
      producent: 'Google',
      model: 'Pixel 7',
      price: '2 399,00',
      desc: 'Pixel 7 to flagowy smartfon firmy Google, zaprezentowany w 2022 roku, reprezentuje połączenie nowoczesnej technologii, eleganckiego designu i wyjątkowej wydajności, co czyni go jednym z najpotężniejszych smartfonów dostępnych na rynku.',
      amount: 4,
      place: 3,
      spec: {
        color: 'Srebrny',
        memory: '256GB',
        ram: '8',
        screen: '6,3',
        resolution: '2400 x 1080',
        waterproof: 'IP68',
      },
    },
    {
      img: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/1/pr_2023_1_25_9_47_54_157_00.jpg',
      imgAlt: 'Pixel 7',
      producent: 'Google',
      model: 'Pixel 7',
      price: '2 049,00',
      desc: 'Pixel 7 to flagowy smartfon firmy Google, zaprezentowany w 2022 roku, reprezentuje połączenie nowoczesnej technologii, eleganckiego designu i wyjątkowej wydajności, co czyni go jednym z najpotężniejszych smartfonów dostępnych na rynku.',
      amount: 4,
      place: 3,
      spec: {
        color: 'Srebrny',
        memory: '128GB',
        ram: '8',
        screen: '6,3',
        resolution: '2400 x 1080',
        waterproof: 'IP68',
      },
    },
    {
      img: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2024/5/pr_2024_5_15_7_0_50_262_05.jpg',
      imgAlt: 'Edge 50 Pro',
      producent: 'Edge 50 Pro',
      model: 'Edge 50 Pro',
      price: '2 999,00',
      desc: 'Edge 50 Pro to najnowszy flagowy smartfon firmy Motorola, zaprezentowany w 2024 roku, reprezentuje połączenie nowoczesnej technologii, eleganckiego designu i wyjątkowej wydajności, co czyni go jednym z najpotężniejszych smartfonów dostępnych na rynku.',
      amount: 12,
      place: 2,
      spec: {
        color: 'Perłowy',
        memory: '512GB',
        ram: '12',
        screen: '6,7',
        resolution: '2712 x 1220',
        waterproof: 'IP68',
      },
    },
    {
      img: 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/9/pr_2023_9_12_10_19_28_246_00.jpg',
      imgAlt: 'Edge 40 neo',
      producent: 'Edge 40 neo',
      model: 'Edge 40 neo',
      price: '1 699,00',
      desc: 'Edge 40 neo to najnowszy smartfon firmy Motorola, zaprezentowany w 2024 roku, reprezentuje połączenie nowoczesnej technologii, eleganckiego designu i wyjątkowej wydajności, co czyni go jednym z najpotężniejszych smartfonów dostępnych na rynku.',
      amount: 12,
      place: 1,
      spec: {
        color: 'Miętowy',
        memory: '256GB',
        ram: '12',
        screen: '6,55',
        resolution: '2400 x 1080',
        waterproof: 'IP68',
      },
    },
  ];
}
