import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  discount: number = 0;

  constructor() { }

  calc(iage: HTMLInputElement, iaymc: HTMLInputElement, itrain: HTMLSelectElement) {
    let age: number = parseInt(iage.value);
    let aymc: boolean = iaymc.checked;
    let train: string = itrain.value;

    //kek - 20%, balaton - 30%, szemely - 50%
    if (train == 'kek') {
      this.discount = 20;
    }
    else if (train == 'balaton') {
      this.discount = 30;
    }
    else {
      this.discount = 50;
    }

    this.discount += age / 10;

    if (aymc == true) {
      this.discount = 100;
    }
  }

  ngOnInit(): void {
  }

}
