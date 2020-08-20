import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../product.service';

const API_BASE_URL = 'https://rp-ecommerce.herokuapp.com';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  
  productQty:any="";
  selectedProduct:any={};
  constructor(private route:ActivatedRoute, private router :Router ,private http : HttpClient, private productService:ProductService) { }

  ngOnInit(): void {
    //debugger;
    let pId = this.route.snapshot.params['productId'];
    this.getProductDetails(pId);
  }

  proceedToBuy(){
    //debugger;
    let orderDetailsTemp:any={};
    orderDetailsTemp.product=this.selectedProduct;
    orderDetailsTemp.quantity=this.productQty;
   // orderDetailsTemp.userId=selectedProduct.user.userName
    this.productService.setOrderDetails(orderDetailsTemp);
    this.router.navigate(['/productcheckout']);
  }
  
  getProductDetails(id){
    
    //debugger;
    this.http.get(API_BASE_URL +'/api/products/'+ id).subscribe(data=>{
      this.selectedProduct=data;
      
    })
  }
}
