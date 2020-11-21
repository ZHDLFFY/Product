import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {


  // @Input() product: string
  public imglist = ['/assets/images/3.jpg', '/assets/images/4.jpg', '/assets/images/1.jpg', '/assets/images/5.jpg']
  public imgSrc = "https://static.runoob.com/images/mix/img_avatar.png"
  public information = {
    ProductName: '',
    Date: '',
    ProductNumber: '',
    HaveNumber: '',
    ProductId: '',
    image: ''
  }
  private proInfo: {
    Date: string
    HaveNumber: number
    ProductId: number
    ProductName: string
    ProductNumber: number
    Remaining: number
    id: number
    username: ""
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
    this.proInfo = e

  }

  Submit() {
    console.log(this.proInfo)
    if (this.proInfo.HaveNumber < 0) {
      alert("数值不能小于0")
    } else {
      // this.auth.PostCart(this.proInfo).subscribe(
      //   (resp: any) => {
      //     if (resp.succ == true) {
      //       console.log(resp.msg)
      //     } else {
      //       console.log(resp)
      //     }
      //   }
      // )
    }
  }

  imgClick1(e) {
    this.imgSrc = e

  }
}
