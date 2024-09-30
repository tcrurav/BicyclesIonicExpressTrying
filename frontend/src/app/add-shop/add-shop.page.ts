import { Component, OnInit } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.page.html',
  styleUrls: ['./add-shop.page.scss'],
})
export class AddShopPage implements OnInit {

  shopForm: FormGroup;

  constructor(private shopService: ShopService,
    public formBuilder: FormBuilder,
  ) {
    this.shopForm = this.formBuilder.group([{
      address: ['', Validators.compose([Validators.required])],
      telephone: ['', Validators.compose([Validators.required])]
    }])
  }

  ngOnInit() {
  }

  createShop() {
    if (!this.shopForm.valid) {
      console.log("No es válido")
      return
    }

    console.log(this.shopForm.value);

    const address = this.shopForm.value.address;
    const telephone = this.shopForm.value.telephone;

    this.shopService.create(address, telephone).subscribe((response) => {
      console.log("se creó la tienda")
    });

  }

  getFormControl(field: string){
    return this.shopForm.get(field);
  }

  // createShop(address: string, telephone:string){
  //   this.shopService.create(address, telephone).subscribe((response) => {
  //     console.log("se creó la tienda")
  //   });
  // }

}
