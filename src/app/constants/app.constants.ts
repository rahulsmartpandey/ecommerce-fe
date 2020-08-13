import { LoginComponent } from '../login/login.component';
import { Routes } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { ProductComponent } from '../product/product.component';
import { CategoryComponent } from '../category/category.component';
import { AppComponent } from '../app.component';
import { CreateProductComponent } from '../create-product/create-product.component';


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
    {   path: '',
        component: CategoryComponent
    }
  ];

  export default appRoutes;