import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponentComponent } from './admin/login-component/login-component.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { guardGuard } from './Guard/guard.guard';


export const routes: Routes = [
    {path: '', component: HomeComponentComponent},
    {path: 'product-detail/:id', component: ProductDetailComponent},
    {path: 'login', component: LoginComponentComponent},
    {path: 'dashboard', component: DashboardComponent, canActivate: [guardGuard]}

];
