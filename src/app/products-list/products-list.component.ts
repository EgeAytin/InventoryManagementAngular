import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';
import { Product } from '@InventoryManagement/models';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

/**
* @ProductsList: A component for rendering all ProductRows and
* storing the currently selected Product
*/

export class ProductsListComponent implements OnInit {


  @Input() productList: Product[];


  @Output() onProductSelected: EventEmitter<Product> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  public clicked(product: Product) {
    this.onProductSelected.emit(product);
  }


}
