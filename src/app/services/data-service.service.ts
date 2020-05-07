import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "@InventoryManagement/models";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class DataServiceService {

  selectedData=[];
  returnData=[];

  constructor(private http: HttpClient) {}

  getAllData() {
    this.returnData=[];
    this.http
      .get('https://angularinventorymanagement.firebaseio.com/product.json').pipe(map(data=>{
        for(const key in data){
            this.returnData.push(data[key]);
        }
      }))
      .subscribe();
      return this.returnData
  }

  getDataById(id:number){
    this.selectedData=[];
    this.http.get(`https://angularinventorymanagement.firebaseio.com/product/${id-1}.json`).pipe(map(data=>{
      for(const key in data){
          this.selectedData.push(data[key]);
      }
    })).subscribe();
    return this.selectedData
  }

  updateDataById(id:number,data:Product){
    this.http.patch(`https://angularinventorymanagement.firebaseio.com/product/${id-1}.json`,data).subscribe();
  }

  

  onCreatePost(product: Product) {
    this.http.post('https://angularinventorymanagement.firebaseio.com/product.json',product).subscribe();
  }
}
