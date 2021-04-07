import { Component, Input, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      let body = <HTMLDivElement>document.body;
      let script = document.createElement('script');
      script.innerHTML = '';
      script.src = '../../assets/js/script.js';
      script.async = true;
      script.defer = true;
      body.appendChild(script);
    });
  }

  @Input()
    Prod!: ITodaysDealProducts;

}
interface ITodaysDealProducts {
  productID: Number;
  productName: String;
  price: Number;
  img: String;
}
