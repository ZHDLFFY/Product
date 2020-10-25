import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoComponent } from './product-list/product-info/product-info.component';
import { PurChaseComponent } from './pur-chase/pur-chase.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { PurInfoComponent } from './pur-chase/pur-info/pur-info.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductManagementComponent } from './product-management/product-management.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'userInfo', component: UserInfoComponent },
  { path: 'purShase', component: PurChaseComponent },
  { path: 'productInfo', component: ProductInfoComponent },
  { path: 'purInfo', component: PurInfoComponent },
  { path: 'proManage', component: ProductManagementComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ProductListComponent,
    ProductInfoComponent,
    PurChaseComponent,
    UserInfoComponent,
    PurInfoComponent,
    ProductManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
