import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-pur-info',
  templateUrl: './pur-info.component.html',
  styleUrls: ['./pur-info.component.css']
})
export class PurInfoComponent implements OnInit {

  public order = []
  image = "/assets/images/2.jpg"
  constructor(private router: Router, private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (resp: any) => {
        // this.order = JSON.parse(resp.idList)
        let list = JSON.parse(resp.item).idList.split(",")
        console.log(list)
        for (let item of list) {
          this.GetProduct(item)
        }
      }
    );
  }
  goProductInfo(e) {
    this.router.navigate(['productInfo'],
      {
        queryParams:
        {
          item: JSON.stringify(e)
        }
      });
  }

  GetProduct(value) {
    console.log(value)
    this.auth.GetProductByID(value).subscribe(
      (resp: any) => {
        if (resp.succ) {
          console.log(resp)
          this.order.push(resp.result[0])
        } else {
          console.log(resp.msg)
        }
      }
    )
  }

}
