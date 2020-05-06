import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "@InventoryManagement/models";
import { map } from 'rxjs/operators';
import { AngularFirestore } from "@angular/fire/firestore/firestore";

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
      .get("https://angularinventorymanagement.firebaseio.com/product.json").pipe(map(data=>{
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

  putData(){
    // this.http.patch()
  }

  onCreatePost(product: Product) {}
}
