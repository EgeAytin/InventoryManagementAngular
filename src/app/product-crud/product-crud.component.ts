import {Component, Input, OnInit} from '@angular/core';
import { DataServiceService } from '@InventoryManagement/services';
import {Product} from '@InventoryManagement/models';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
  @Input() selectedProduct: Product;
   editProduct: Product;
   products: Product[];
   product = {
        department: null,
        id: null,
        imageUrl: null,
        name: null,
        price: null,
        sku: null,
        stock: null
  };
  constructor(private service: DataServiceService) {
  }

  ngOnInit() {
     this.products = this.service.getAllData();
     console.log(this.products);

    if (localStorage.getItem('buttonType') === 'edit') {
      this.product = {
        department: this.selectedProduct.department,
        id: this.selectedProduct.id,
        imageUrl: this.selectedProduct.imageUrl,
        name: this.selectedProduct.name,
        price: this.selectedProduct.price,
        sku: this.selectedProduct.sku,
        stock: this.selectedProduct.stock
      };
    }
  }
  buttonAdd() {
    if (localStorage.getItem('buttonType') === 'add') {
      return true;
    } else {
      return false;
    }
  }
  buttonEdit() {
    if (localStorage.getItem('buttonType') === 'edit') {
      return true;
    } else {
      return false;
    }
  }
  productAdd() {
    localStorage.setItem('crudFlag', 'false');
    this.product.id = (this.products.length + 1).toString();
    this.product.department = this.product.department.split(',');
    console.log(this.product.department);
    this.service.onCreatePost(this.product);
  }
  productEdit() {
    localStorage.setItem('crudFlag', 'false');

    this.product.department = this.product.department.split(',');
    this.editProduct = {
      department: this.product.department,
      id: this.product.id,
      imageUrl: this.product.imageUrl,
      name: this.product.name,
      price: this.product.price,
      sku: this.product.sku,
      stock: this.product.stock
    };
    console.log(this.editProduct);
    this.service.updateDataById(this.product.id, this.editProduct);
  }
  back() {
    localStorage.setItem('crudFlag', 'false');
  }

}
