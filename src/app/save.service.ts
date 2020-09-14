import { Injectable } from '@angular/core';
import { AllShopItems } from './models/shop-items';

@Injectable({
  providedIn: 'root'
})

export class SaveService {
  constructor(
  ) { }

  saveShop(items: AllShopItems) {
    localStorage.setItem('shop', JSON.stringify(items));
  }

  saveCookies(cookies: number) {
    localStorage.setItem('cookies', JSON.stringify(cookies));
  }

  loadShop() {
    if (localStorage.getItem('shop')) {
      return JSON.parse(localStorage.getItem('shop'));
    } else{
      return null;
    }
  }

  loadCookies() {
    if (localStorage.getItem('cookies')) {
      return JSON.parse(localStorage.getItem('cookies'));
    } else {
      return null;
    }
  }
}
