import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product';

  fileData = new FormData()
  list: string

  constructor(private router: Router, private http: HttpClient) {
  }
  getfiledata(e) {
    for (var i = 0, file; file = e.target.files[i]; i++) {
      this.fileData.append('files', file)
      console.log(file)
    }
  }

  uploadFile() {
    this.http.post("http://127.0.0.1:3000/" + 'upload', this.fileData).subscribe();
    console.log('1213213')
    // this.auth.PostFile(this.fileData).subscribe()
  }
}
