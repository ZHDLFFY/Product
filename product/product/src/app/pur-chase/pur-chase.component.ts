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
  public UserInfo = { username: '', result: '', userID: '' }
  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.GetUseCart()
    this.UserInfo = this.auth.UserInfo;
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
    // console.log(this.auth.UserInfo.result)
    if (this.auth.UserInfo.result != "admin") {
      this.ResultNotAdmin()
    }
    else {
      this.ResultAdmin()
    }
  }

  ResultAdmin() {
    this.auth.GetUseCart(this.auth.UserInfo.username).subscribe(
      (resp: any) => {
        console.log(resp)
        for (let item of resp) {
          if (item.status == "unfinish") {
            this.unfinishList.push(item)
          } else {
            this.finishedList.push(item)
          }
        }
      }
    )
  }
  ResultNotAdmin() {
    this.auth.GetUseCart(this.auth.UserInfo.username).subscribe(
      (resp: any) => {
        console.log(resp)
        for (let item of resp) {
          if (item.status == 'ready') {
            this.unfinishList.push(item)
          } else {
            this.finishedList.push(item)
          }
        }
      }
    )
  }

  PurSubmit() {
    if (this.auth.UserInfo.result != "admin") {
      for (let item of this.unfinishList) {
        let e = { value: item, username: this.auth.UserInfo.username }
        this.auth.PostCartUserID(e).subscribe(
          (resp: any) => {
            if (resp.succ == true) {
              console.log(resp.msg)
              this.GetUseCart()
            }
          }
        )
      }
    } else {
      for (let item of this.unfinishList) {
        let e = { value: item, username: this.auth.UserInfo.username }
        this.auth.PostAdminIssue(e).subscribe(
          (resp: any) => {
            if (resp.succ == true) {
              console.log(resp.msg)
              this.GetUseCart()
            }
          }
        )
      }
    }
  }
}
