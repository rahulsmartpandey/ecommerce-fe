import { LoginComponent } from '../login/login.component';
import { Routes } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { ProductComponent } from '../product/product.component';
import { CategoryComponent } from '../category/category.component';
import { AppComponent } from '../app.component';
import { CreateProductComponent } from '../create-product/create-product.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductCheckOutComponent } from '../product-checkout/product-checkout.component';

const appRoutes: Routes = [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'signup',
      component: SignupComponent
    },
    {
        path: 'products',
        component: ProductComponent
    },
    {
        path: 'categories',
        component: CategoryComponent
    },
    
    {   path: 'createproduct',
        component: CreateProductComponent
    },
    {   path: 'productdetails/:productId',
        component: ProductDetailsComponent
    },
    {   path: 'productcheckout',
        component: ProductCheckOutComponent
    },
    {   path: '',
        component: CategoryComponent
    }
  ];

  export default appRoutes;