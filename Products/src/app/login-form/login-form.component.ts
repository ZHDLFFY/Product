import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
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

  constructor(fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.myForm = fb.group({
      'username': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required, Validators.min(100000), Validators.max(999999999999)])]
    })
    this.username = this.myForm.controls['username'];
    this.password = this.myForm.controls['password']
  }

  ngOnInit(): void {
  }

  onSubmit(value: any): void {
    console.log('submit: ' + value.username, value.password)
    this.auth.login(value, function () {
      this.router.navigate(['./productList'])
    }.bind(this))
  }


}
