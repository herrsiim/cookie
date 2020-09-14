import { Component, OnInit } from '@angular/core';
import { CookiesService } from './cookies.service';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  constructor(
    public cookiesService: CookiesService,
    private shopService: ShopService
  ) {}
  
  ngOnInit() {
    this.cookiesService.loadCookies();
    this.shopService.loadShop();
  }
}
