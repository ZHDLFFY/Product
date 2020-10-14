import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggein = false
  public UserInfo = { username: '', result: '', userID: '' }
  // ProListLnegth: String
  // private IP = 'http://121.196.51.132:3000/login'
  private IP = 'http://localhost:3000/'
  constructor(private http: HttpClient, private router: Router) { }

  PostLogin(value) {
    return this.http.post(this.IP + 'Login' + '/' + JSON.stringify(value), {});
  }

  PostRegister(value) {
    return this.http.post(this.IP + 'Register' + '/' + JSON.stringify(value), {});
  }

  PostCart(value) {
    return this.http.post(this.IP + 'PostCart' + '/' + JSON.stringify(value), {})
  }

  PostCartUserID(value) {
    return this.http.post(this.IP + 'PostCart' + '/' + JSON.stringify(value.list) + '/' + JSON.stringify(value.username), {})
  }

  GetUserInfo(value) {
    return this.http.get(this.IP + 'GetUserInfo' + '/' + JSON.stringify(value), {})
  }

  GetUseCart(value) {
    return this.http.get(this.IP + 'GetUseCart' + '/' + JSON.stringify(value), {})
  }

  GetUseTable(value) {
    return this.http.get(this.IP + 'GetUseCart' + '/' + JSON.stringify(value) + '/' + JSON.stringify(value), {})
  }

  GetCart() {
    return this.http.get(this.IP + 'GetCart', {})
  }

  GetProductByID(value) {
    return this.http.get(this.IP + 'GetProductByID' + '/' + JSON.stringify(value), {})
  }


  login(value: any) {
    this.PostLogin(value).subscribe(
      (resp: any) => {
        if (resp.succ) {
          console.log(resp)
          this.loggein = true;
          this.UserInfo = { username: resp.username, result: resp.result, userID: resp.userID }
          this.router.navigate(['./productList'])
        } else {
          console.log(resp)
        }
      }
    )
  }
  // getUseCart() {
  //   this.GetUseCart(this.UserInfo).subscribe(
  //     (resp: any) => {
  //       this.ProListLnegth = resp.length
  //     }
  //   )
  // }
}
