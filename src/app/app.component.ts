import { Component, OnInit } from "@angular/core";
import { Product } from "@InventoryManagement/models";
import { DataServiceService } from "@InventoryManagement/services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit{
  public products: Product[];
  public selectedProduct: Product;

  constructor(private service : DataServiceService) {
    this.selectedProduct = null;
  }

  ngOnInit(){
    this.products =this.service.getAllData();
  }

  public productWasSelected(product: Product) {
    this.selectedProduct = product;
    console.log(this.selectedProduct);
  }

  public addProduct() {}
}
