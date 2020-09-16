import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public PList = [
    { name: '猎灵师', Level: 120, number: 0 },
    { name: '玉林师', Level: 110, number: 0 },
    { name: '案例师', Level: 100, number: 0 },
    { name: '裂开师', Level: 220, number: 0 },
    { name: '阿斯顿师', Level: 20, number: 0 },
    { name: '电焊工', Level: 230, number: 0 },
  ]
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  goPoductInfo(item) {
    this.router.navigate(['productInfo'])
  }

  Increase(e) {
    e.number = Number(e.number) + 1
    this.auth.PostCart(e).subscribe(
      (resp: any) => {
        if (resp.succ == true) {
          console.log(resp.msg)
        } else {
          e.number = Number(e.number) - 1
          console.log(resp)
        }
      }
    )
  }

  reduce(e) {
    e.number = Number(e.number) - 1
    // this.auth.PostCart(e).subscribe(
    //   (resp: any) => {
    //     console.log(resp)
    //   }
    // )
  }
}
