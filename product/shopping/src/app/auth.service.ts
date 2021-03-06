import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public loggein = false
  public UserInfo = { username: 'zzz', result: '', userID: '' }
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
    return this.http.post(this.IP + 'PostCart' + '/' + JSON.stringify(value.value) + '/' + JSON.stringify(value.username), {})
  }
  PostAdminIssue(value) {
    return this.http.post(this.IP + 'PostAdminIssue' + '/' + JSON.stringify(value.value) + '/' + JSON.stringify(value.username), {})
  }

  PostFile(file) {
    return this.http.post(this.IP + 'upload', file)
  }

  PostInsertProduct(value) {
    return this.http.post(this.IP + 'PostInsertProduct' + '/' + JSON.stringify(value), {})
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
          this.router.navigate(['./productlist'])
        } else {
          console.log(resp)
        }
      }
    )
  }
}
