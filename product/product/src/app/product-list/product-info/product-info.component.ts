import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  // @Input() product: string
  information = {
    ProductName: '',
    Date: '',
    ProductNumber: '',
    HaveNumber: ''
  }

  constructor(private router: Router, private auth: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (resp: any) => {
        let value = JSON.parse(resp.item)
        this.GetProduct(value.ProductId)
      }
    );
  }

  GetProduct(value) {
    this.auth.GetProductByID(value).subscribe(
      (resp: any) => {
        if (resp.succ) {
          console.log(resp)
          this.information = resp.result[0]
        } else {
          console.log(resp.msg)
        }
      }
    )
  }
  Increase(e, method) {
    if (method == '-') {
      e.HaveNumber = Number(e.HaveNumber) - 1
    } else if (method == '+') {
      e.HaveNumber = Number(e.HaveNumber) + 1
    }
    e.username = this.auth.UserInfo.username
    console.log(e)
    this.auth.PostCart(e).subscribe(
      (resp: any) => {
        if (resp.succ == true) {
          console.log(resp.msg)
        } else {
          e.HaveNumber = Number(e.HaveNumber) - 1
          console.log(resp)
        }
      }
    )
  }
}
