import { Component, OnInit } from '@angular/core';
import { newArray } from '@angular/compiler/src/util';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

const API_BASE_URL = 'https://rp-ecommerce.herokuapp.com';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  selectedCategory:any = {};
  categoryList : any =[];
  productList : any = [];
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    /**this.categoryList.push({id:1,name:'Electronics'});
    this.categoryList.push({id:2,name:'Home Appliances'});
    this.categoryList.push({id:3,name:'Cloths'});
    this.categoryList.push({id:4,name:'Toys'});*/
    this.getAllCategories();
    
  
  }

  getAllCategories() {
    
    this.http.get(API_BASE_URL + '/api/categories').subscribe(data=>{
      this.categoryList=data;
      this.getProductsByCategoryId(this.categoryList[0]);
    });

  }

  getProductsByCategoryId(category){
    this.selectedCategory=category;
    this.http.get(API_BASE_URL + '/api/categories/'+ category.id +'/products').subscribe(data=>{
      this.productList=data;
      //debugger;

    });

  }
  
  

}
