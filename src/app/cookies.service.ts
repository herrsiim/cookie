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
  public specialEventActivated: boolean = false;
  private specialEventDuration: number = 20; // Seconds
  private specialEventTimeout: number = 5; // Minutes

  constructor(
    public shopService: ShopService
  ) { }

  /**
   * Clicking on a cookie will make cookies
   */
  makeCookie() {
    if (this.specialEventActivated) {
      this.cookies = this.cookies + (this.cursor * 2);
    } else {
      this.cookies = this.cookies + this.cursor;
    }
  }

  /**
   * This will calculate the passive cookie production.
   * The for loop will go through all the items in the passiveShopItems 
   * and will calculate full production by calculating (amount * productivity) 
   * for all the items in the array.
   * @param items passiveShopItems a.k.a items from the shop service 
   */
  calculatePassiveProduction(items: ShopItem[]) {
    let producedCookies: number = 0;

    for (let shopItem of items) {
      if (shopItem.amount !== 0) {
        producedCookies = producedCookies + (shopItem.amount * shopItem.productivity);
        if (this.specialEventActivated) producedCookies = producedCookies * 2;
      }
    }
    this.cookies = this.cookies + producedCookies;
  }

  /**
   * This is the intervall for passive production of the cookies.
   * It's being always run on app startup, even if the productivity is 0 for all items
   */
  makePassiveCookies() {
    setInterval(() => {
      this.calculatePassiveProduction(this.shopService.passiveShopItems);
    }, 1000);
  }

  /**
   * Special event activated for X amount of seconds
   */
  activateSpecialEvent() {
    this.specialEventActivated = true;
    setTimeout(() => {
      this.startSpecialEventTimeout();
    }, 1000 * this.specialEventDuration);
  }
  
  /**
   * Special event timeout
   * It will be run once every X amount of minutes
   */
  startSpecialEventTimeout() {
    this.specialEventActivated = false;
    setTimeout(() => {
      this.activateSpecialEvent();
    }, 1000 * 60 * this.specialEventTimeout);
  }
}
