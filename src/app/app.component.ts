import { Component, OnInit } from '@angular/core';
import { Product } from '@InventoryManagement/models';
import { DataServiceService } from '@InventoryManagement/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public products: Product[];
  public selectedProduct: Product;

  testProd: Product = {
    department: ['1', '1', '2'],
    id: '2',
    imageUrl: '',
    name: 'test',
    price: 222,
    sku: 'aa',
    stock: 666
  };

  constructor(private service: DataServiceService) {
    localStorage.setItem('crudFlag', 'false');
  }

  ngOnInit() {
    this.products = this.service.getAllData();
    console.log(this.products);
    // this.service.updateDataById(2,this.testProd);
    // this.service.onCreatePost(this.testProd);
  }
  crudFlag() {
    if (localStorage.getItem('crudFlag') === 'true') {
      return true;
    } else {
      return false;
    }
  }

  public productWasSelected(product: Product) {
    localStorage.setItem('crudFlag', 'true');
    this.selectedProduct = product;
    console.log(this.selectedProduct);
  }

  public addProduct() {
    localStorage.setItem('crudFlag', 'true');
    localStorage.setItem('buttonType', 'add');
  }


}
