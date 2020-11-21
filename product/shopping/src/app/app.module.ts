import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoComponent } from './product-list/product-info/product-info.component';
import { PurChaseComponent } from './pur-chase/pur-chase.component';
import { PurInfoComponent } from './pur-chase/pur-info/pur-info.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


var routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: 'productinfo', component: ProductInfoComponent },
  { path: 'purchase', component: PurChaseComponent },
  { path: 'purinfo', component: PurInfoComponent },
  { path: 'productmanagement', component: ProductManagementComponent },
  { path: 'userinfo', component: UserInfoComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ProductListComponent,
    ProductInfoComponent,
    PurChaseComponent,
    PurInfoComponent,
    UserInfoComponent,
    ProductManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
