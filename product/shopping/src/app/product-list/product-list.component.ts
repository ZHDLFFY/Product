import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
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
    this.router.navigate(['productinfo'],
      {
        queryParams:
        {
          item: JSON.stringify(item)
        }
      });
  }
}
