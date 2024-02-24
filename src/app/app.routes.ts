import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponentComponent } from './admin/login-component/login-component.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { guardGuard } from './Guard/guard.guard';
import { ProductComponent } from './admin/product/product.component';
import { CategoryComponent } from './admin/category/category.component';
import { ProductEditComponent } from './admin/product/product-edit/product-edit.component';
import { CartComponent } from './user/cart/cart.component';
import { CheckoutComponent } from './user/checkout/checkout.component';


export const routes: Routes = [
    {path: '', component: HomeComponentComponent},
    {path: 'product-detail/:id', component: ProductDetailComponent},
    {path: 'login', component: LoginComponentComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'dashboard', component: DashboardComponent,canActivate: [guardGuard],
        children:[
            {path:'add-product', component:ProductComponent},
            {path:'add-category', component: CategoryComponent},
            {path:'edit-product/:id', component: ProductEditComponent},
        ]
    }


];
