import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { HttpClientModule } from '@angular/common/http';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';

// const firebase= {
//   apiKey: "AIzaSyBtmo3vWMxywP_NyB_MH-xc3WMiXm9JUfE",
//   authDomain: "angularinventorymanagement.firebaseapp.com",
//   databaseURL: "https://angularinventorymanagement.firebaseio.com",
//   projectId: "angularinventorymanagement",
//   storageBucket: "angularinventorymanagement.appspot.com",
//   messagingSenderId: "907889021479",
//   appId: "1:907889021479:web:e7891ca35bf7b19d5db402",
//   measurementId: "G-KBWSRFTYXL"
// };


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    // AngularFireModule.initializeApp(firebase),
    // AngularFirestoreModule, // firestore
    // AngularFireAuthModule, // auth
    // AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
