import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'login', component: LoginFormComponent },
  // { path: 'productList', component: ProductListComponent },
  // { path: 'userInfo', component: UserInfoComponent },
  // { path: 'purShase', component: PurChaseComponent },
  // { path: 'productInfo', component: ProductInfoComponent },
  // { path: 'purInfo', component: PurInfoComponent },
  // { path: 'proManage', component: ProductManagementComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    // LoginFormComponent,
    // ProductListComponent,
    // UserInfoComponent,
    // PurChaseComponent,
    // ProductInfoComponent,
    // PurInfoComponent,
    // ProductManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
