import { Injectable } from '@angular/core';
import { ShopService } from './shop.service';

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
    this.cookies = (this.cookies + this.cursor);
  }
}
 