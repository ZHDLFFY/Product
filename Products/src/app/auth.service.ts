import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggein = false
  public UserInfo: String
  // private IP = 'http://121.196.51.132:3000/login'
  private IP = 'http://localhost:3000/'
  constructor(private http: HttpClient, private router: Router) { }

  PostLogin(value) {
    return this.http.post(this.IP + 'Login' + '/' + JSON.stringify(value), {});
  }

  PostCart(value) {
    return this.http.post(this.IP + 'PostCart' + '/' + JSON.stringify(value), {})
  }

  GetUserInfo(value) {
    return this.http.get(this.IP + 'GetUserInfo' + '/' + JSON.stringify(value), {})
  }



  login(value: any, callBack: any) {
    console.log('开始登陆')
    this.PostLogin(value).subscribe(
      (resp: any) => {
        if (resp.succ) {
          console.log(resp)
          this.loggein = true;
          this.UserInfo = JSON.stringify(value)
          callBack()
        } else {
          console.log(resp)
        }
      }
    )
  }
}
