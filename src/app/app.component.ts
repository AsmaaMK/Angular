import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MarketPlace';

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
    { productName: 'cat 1', price: 2000, img: 'http://placekitten.com/210/268' },
    { productName: 'cat 2', price: 1000, img: 'http://placekitten.com/210/268' },
    { productName: 'cat 3', price: 2000, img: 'http://placekitten.com/210/268' },
    { productName: 'cat 4', price: 400, img: 'http://placekitten.com/210/268' },
    { productName: 'cat 5', price: 2000, img: 'http://placekitten.com/210/268' },
    { productName: 'cat 6', price: 3000, img: 'http://placekitten.com/210/268' },
    { productName: 'cat 7', price: 100, img: 'http://placekitten.com/210/268' },
    { productName: 'cat 1', price: 2000, img: 'http://placekitten.com/210/268' },
    { productName: 'cat 2', price: 1000, img: 'http://placekitten.com/210/268' },
    { productName: 'cat 3', price: 2000, img: 'http://placekitten.com/210/268' },
    { productName: 'cat 4', price: 400, img: 'http://placekitten.com/210/268' },
    { productName: 'cat 5', price: 2000, img: 'http://placekitten.com/210/268' }
  ]
}

interface ITodaysDealProducts {
  productName: String;
  price: Number;
  img: String;
}