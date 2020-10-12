import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  myForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  phone: AbstractControl;
  Show: number = 0

  constructor(fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.myForm = fb.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required, Validators.min(100000), Validators.max(999999999999)])],
      'phone': ['', Validators.compose([Validators.required, Validators.min(10000000000), Validators.max(99999999999)])]
    })
    this.username = this.myForm.controls['username'];
    this.password = this.myForm.controls['password'];
    this.phone = this.myForm.controls['phone']
  }

  ngOnInit(): void {
    // var player = videojs('myvideo', {}, function () { console.log('videojs播放器初始化成功') })
    // player.play();

  }

  Submit(value: any) {
    if (this.Show == 1) {
      this.onRegister(value);
    } else if (this.Show == 0) {
      this.onSubmit(value)
    } else {
      alert('提交数据失败')
    }
  }

  onSubmit(value: any): void {
    console.log('submit: ' + value.username, value.password)
    this.auth.login(value, function () {
      this.router.navigate(['./productList'])
    }.bind(this))
  }

  onRegister(value: any): void {
    this.auth.PostRegister(value).subscribe(
      (resp: any) => {
        if (resp.succ == true) {
          console.log(resp.msg)
        }
      }
    )
  }

  SwitchRegister() {
    this.Show = 1
  }

  SwitchLogin() {
    this.Show = 0
  }

}
