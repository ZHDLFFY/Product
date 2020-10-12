import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  UserInfo: String

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    // this.auth.GetUserInfo(this.auth.UserInfo).subscribe(
    //   (resp: any) => {
    //     this.UserInfo = resp[0]
    //   }
    // )
    this.UserInfo = this.auth.UserInfo;
    console.log(this.auth.UserInfo)
  }

}
