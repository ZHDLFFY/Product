import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PRODUCT } from '../../project';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pur-chase',
  templateUrl: './pur-chase.component.html',
  styleUrls: ['./pur-chase.component.css']
})
export class PurChaseComponent implements OnInit {

  public unfinishList = []
  public finishedList = []
  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.GetUseCart()
  }

  goPurInfo(e) {
    this.router.navigate(['./purInfo'], {
      queryParams:
      {
        item: JSON.stringify(e)
      }
    })
  }

  goPoductInfo(item) {
    console.log(item)
    this.router.navigate(['productInfo'],
      {
        queryParams:
        {
          item: JSON.stringify(item)
        }
      });
  }

  GetUseCart() {
    this.unfinishList = []
    this.finishedList = []
    this.auth.GetUseCart(this.auth.UserInfo.username).subscribe(
      (resp: any) => {
        for (let item of resp) {
          if (item.status == 'unfinish') {
            this.unfinishList.push(item)
          }
        }
      }
    )
    this.auth.GetUseTable(this.auth.UserInfo.username).subscribe(
      (resp: any) => {
        for (let item of resp) {
          this.finishedList.push(item)
        }
      }
    )
  }

  PurSubmit() {
    console.log(JSON.stringify(this.unfinishList))
    let e = { list: this.unfinishList, username: this.auth.UserInfo.username }
    this.auth.PostCartUserID(e).subscribe(
      (resp: any) => {
        if (resp.succ == true) {
          console.log(resp.msg)
          this.GetUseCart()
        }
      }
    )
  }

}
