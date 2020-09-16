import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  private UserInfo = {}

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.GetUserInfo(this.auth.UserInfo).subscribe(
      (resp: any) => {
        this.UserInfo = resp[0]
      }
    )
  }





}
