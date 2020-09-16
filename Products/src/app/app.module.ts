import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProductListComponent } from './product-list/product-list.component';
import { from } from 'rxjs';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { PurShaseComponent } from './pur-shase/pur-shase.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductInfoComponent } from './product-list/product-info/product-info.component';
import { PurInfoComponent } from './pur-shase/pur-info/pur-info.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'userInfo', component: UserInfoComponent },
  { path: 'purShase', component: PurShaseComponent },
  { path: 'productInfo', component: ProductInfoComponent },
  { path: 'purInfo', component: PurInfoComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    LoginFormComponent,
    UserInfoComponent,
    PurShaseComponent,
    ProductInfoComponent,
    PurInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
