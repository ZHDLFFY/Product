import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pur-shase',
  templateUrl: './pur-shase.component.html',
  styleUrls: ['./pur-shase.component.css']
})
export class PurShaseComponent implements OnInit {
  public orderList = [
    { name: '猎灵师', Level: 120, date: '2020-01-05', image: '/assets/image/1.jpg' },
    { name: '玉林师', Level: 110, date: '2020-02-05', image: '/assets/image/2.jpg' },
    { name: '案例师', Level: 100, date: '2020-03-05', image: '/assets/image/3.jpg' },
    { name: '裂开师', Level: 220, date: '2020-07-05', image: '/assets/image/4.jpg' },
    { name: '阿斯顿师', Level: 20, date: '2020-01-25', image: '/assets/image/5.jpg' },
    { name: '电焊工', Level: 230, date: '2020-09-05', image: '/assets/image/6.jpg' },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goPurInfo(e) {
    this.router.navigate(['./purInfo'], { queryParams: e })
  }
}
