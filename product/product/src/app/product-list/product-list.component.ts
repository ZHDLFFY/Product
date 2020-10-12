import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // public currentItem = '1212331'
  PList = []
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.getCart()      //获取所有货物
  }

  getCart() {
    this.auth.GetCart().subscribe(
      (resp: any) => {
        this.PList = resp
      }
    )
  }

  goPoductInfo(item) {
    this.router.navigate(['productInfo'],
      {
        queryParams:
        {
          item: JSON.stringify(item)
        }
      });
  }



}
