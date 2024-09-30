import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  shops: Array<any> = [
    {
      address: "c/ luján pérez",
      telephone: "928454545"
    },{
      address: "c/ josé vélez",
      telephone: "928454545"
    },{
      address: "c/ juan rejón",
      telephone: "928454545"
    },
  ]

  constructor(private router:Router) {}

  goToShopList(){
    this.router.navigateByUrl("/shop-list");
  }

}
