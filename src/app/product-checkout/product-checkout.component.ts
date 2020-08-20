import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';

const API_BASE_URL = 'https://rp-ecommerce.herokuapp.com';

@Component({
  selector: 'app-product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.css']
})



export class ProductCheckOutComponent implements OnInit {

  selectedProductToBuy:any={};
  checkedOutProduct:any={};
  address:any={};
  
  constructor(private route:ActivatedRoute, private http:HttpClient, private productService:ProductService) { }

  ngOnInit(): void {
    this.checkedOutProduct = this.productService.getOrderDetails();
  }

  placeOrder(){
    console.log(this.address);
    debugger;
    let orderDto:any={};
    orderDto.productId=this.checkedOutProduct.product.id;
    orderDto.userId=1;
    orderDto.quantity=this.checkedOutProduct.quantity;
    orderDto.address=this.address;
  
    this.http.post('http://localhost:8080/api/createorder',orderDto).subscribe(data=>{
      console.log("order created successfully");
      
    })
  }
  
getProductForCheckOut(){
  //debugger;

}
}
