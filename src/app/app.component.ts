import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public products: Product[];
  public selectedProduct: Product;


  constructor() {

    this.products =
      [
        new Product(
          'MYSHOES',
          'Black Running Shoes',
          '/assets/images/products/black-shoes.jpg',
          ['Men', 'Shoes', 'Shoes'],
          109.99,
          5
        ),
        new Product(
          'NEATOJACKET',
          'Blue Jacket',
          '/assets/images/products/blue-jacket.jpg',
          ['Women', 'Apparel', 'Jackets & Vests'],
          238.99,
          3
        ),
        new Product(
          'NICEHAT',
          'A Nice Black Hat',
          '/assets/images/products/black-hat.jpg',
          ['Men', 'Accessories', 'Hats'],
          29.99,
          15
        )
      ];

      this.selectedProduct = null;

  }

  public productWasSelected(product: Product) {
    this.selectedProduct = product;
    console.log(this.selectedProduct);
  }

  public addProduct() {

  }

}
