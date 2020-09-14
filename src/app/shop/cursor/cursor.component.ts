import { Component } from '@angular/core';
import { CookiesService } from "../../cookies.service";
import { ShopService } from 'src/app/shop.service';
import { SaveService } from 'src/app/save.service';


@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})

export class CursorComponent {

  constructor(
    public cookiesService: CookiesService,
    public shopService: ShopService,
    private saveService: SaveService
  ) { }

  isDisabled() {
    return this.cookiesService.cookies < this.shopService.allShopItems.active.price ? true : false;
  }

  buyCursor() {
    if (this.cookiesService.cookies >= this.shopService.allShopItems.active.price) {
      this.shopService.allShopItems.active.amount = this.shopService.allShopItems.active.amount + 1;
      this.cookiesService.cookies = this.cookiesService.cookies -this.shopService.allShopItems.active.price;
      this.shopService.allShopItems.active.price = Math.round(this.shopService.allShopItems.active.price * this.shopService.priceMultiplier);
      this.saveService.saveCookies(this.cookiesService.cookies);
      this.saveService.saveShop(this.shopService.allShopItems);
    }
  }
}
