import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  orderDetails:any={};
  constructor(private http:HttpClient) { }

  setOrderDetails(order){
    this.orderDetails=order;
  }

  getOrderDetails(){
    return this.orderDetails;
  }
  
}
