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
  product = {
        department: [],
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
    console.log(this.selectedProduct.id);
    if (localStorage.getItem('buttonType') === 'edit'){
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
    console.log(this.product);
    localStorage.setItem('crudFlag', 'false');
    this.service.onCreatePost(this.product);
  }
  productEdit() {
    localStorage.setItem('crudFlag', 'false');
    this.service.updateDataById(this.product.id, this.product);
  }
  back() {
    localStorage.setItem('crudFlag', 'false');
  }

}
