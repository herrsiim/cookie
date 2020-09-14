import { Injectable } from '@angular/core';
import { ShopService } from './shop.service';
import { ShopItem } from './models/shop-items';

@Injectable({
  providedIn: 'root'
})

export class CookiesService {
  public cookies: number = 0;
  public cursor: number = 1;
  public cursorPrice: number = 10;

  constructor(
    public shopService: ShopService
  ) { }

  makeCookie() {
    this.cookies = (this.cookies + this.cursor) + 100;
  }

  calculatePassiveProduction(items: ShopItem[]) {
    let producedCookies: number = 0;
    for (let shopItem of items) {
      if (shopItem.amount !== 0) {
        producedCookies = producedCookies + (shopItem.amount * shopItem.productivity)
      }
    }
    this.cookies = this.cookies + producedCookies;
  }

  makePassiveCookies() {
    setInterval(() => {
      this.calculatePassiveProduction(this.shopService.passiveShopItems);
    }, 1000);
  }
}
