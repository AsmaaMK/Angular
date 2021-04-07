import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function()
    {
      let body = <HTMLDivElement> document.body;
      let script = document.createElement('script');
      script.innerHTML = '';
      script.src = '../assets/js/script.js';
      script.async = true;
      script.defer = true;
      body.appendChild(script);
    });
  }

  products: Array<ITodaysDealProducts> = [
    { productID: 1, productName: 'cat 1', price: 2000, img: 'http://placekitten.com/210/268' },
    { productID: 2, productName: 'cat 2', price: 1000, img: 'http://placekitten.com/210/268' },
    { productID: 3, productName: 'cat 3', price: 2000, img: 'http://placekitten.com/210/268' },
    { productID: 4, productName: 'cat 4', price: 400, img: 'http://placekitten.com/210/268' },
    { productID: 5, productName: 'cat 5', price: 2000, img: 'http://placekitten.com/210/268' },
    { productID: 6, productName: 'cat 6', price: 3000, img: 'http://placekitten.com/210/268' },
    { productID: 7, productName: 'cat 7', price: 100, img: 'http://placekitten.com/210/268' },
    { productID: 8, productName: 'cat 1', price: 2000, img: 'http://placekitten.com/210/268' },
    { productID: 9, productName: 'cat 2', price: 1000, img: 'http://placekitten.com/210/268' },
    { productID: 10, productName: 'cat 3', price: 2000, img: 'http://placekitten.com/210/268' },
    { productID: 11, productName: 'cat 4', price: 400, img: 'http://placekitten.com/210/268' },
    { productID: 12, productName: 'cat 5', price: 2000, img: 'http://placekitten.com/210/268' }
  ]

}


interface ITodaysDealProducts {
  productID: Number;
  productName: String;
  price: Number;
  img: String;
}