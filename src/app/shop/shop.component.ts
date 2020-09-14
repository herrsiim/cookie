import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { CookiesService } from '../cookies.service';
import { ShopItem } from '../models/shop-items';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {

  constructor(
    public shopService: ShopService,
    private cookiesService: CookiesService
  ) { }

  /**
   * We need to start the passive cookie maker once and only once.
   */
  ngOnInit(): void {
    this.cookiesService.makePassiveCookies();
  }
  /**
   * It will calculate the new price and round it
   * @param item shopItem
   */
  calculateNewPrice(item: ShopItem): number {
    if (item.amount !== 0) {
      return Math.round((item.amount * this.shopService.priceMultiplyer) + item.price);
    } else {
      return item.price;
    }
  }

  /**
   * We need to build the image URL to display the image from an array
   * @param imgName image name from the shopItems list
   */
  buildImageUrl(imgName: string) {
    return `../../../../assets/img/${imgName}`;
  }
  /**
   * Will check if user has enough cookies to buy the shop item
   * If not, the HTML element will be disabled
   * @param item shopItem
   */
  isDisabled(item: ShopItem) {
    return this.cookiesService.cookies < item.price ? true : false;
  }

  /**
   * It will buy the clicked shop item. It will 
   * update the values from the shop service.
   * It will also calculate a new price for currently bought item
   * @param item shopItem
   */
  buy(item: ShopItem) {
    if (this.cookiesService.cookies >= item.price) {
      this.cookiesService.cookies = this.cookiesService.cookies - item.price;
      item.amount = item.amount + 1;
      item.price = Math.round(item.price * this.shopService.priceMultiplyer);
    }
  }
}
