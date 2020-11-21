import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  myForm: FormGroup;
  name: AbstractControl;
  image: AbstractControl;
  number: AbstractControl;
  Show: number = 0
  fileData = new FormData()

  constructor(fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.myForm = fb.group({
      'name': ['', Validators.compose([Validators.required])],
      'number': ['', Validators.compose([Validators.required])],
      'image': ['', Validators.compose([Validators.required])]
    })
    this.name = this.myForm.controls['name'];
    this.number = this.myForm.controls['number'];
    this.image = this.myForm.controls['image']
  }


  ngOnInit(): void {
  }


  getfiledata(e) {
    for (var i = 0, file; file = e.target.files[i]; i++) {
      this.fileData.append('files', file)
      console.log(file)
    }
  }

  uploadFile() {
    this.auth.PostFile(this.fileData).subscribe(
      (resp: any) => {
        console.log(resp)
        this.image = resp.join(",")
      }
    );
  }




  Submit(value: any): void {
    value.image = this.image
    this.auth.PostInsertProduct(value).subscribe(
      (resp: any) => {
        console.log(123132)
      }
    )
    console.log(value)
  }

}
