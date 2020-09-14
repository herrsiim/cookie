import { Component } from '@angular/core';
import { CookiesService } from "../../cookies.service";
import { ShopService } from 'src/app/shop.service';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})

export class CursorComponent {

  constructor(
    public cookiesService: CookiesService,
    private shopService: ShopService
  ) { }

  isDisabled() {
    return this.cookiesService.cookies < this.cookiesService.cursorPrice ? true : false;
  }

  buyCursor() {
    if (this.cookiesService.cookies >= this.cookiesService.cursorPrice) {
      this.cookiesService.cursor = this.cookiesService.cursor + 1;
      this.cookiesService.cookies = this.cookiesService.cookies - this.cookiesService.cursorPrice;
      this.cookiesService.cursorPrice = Math.round(this.cookiesService.cursorPrice * this.shopService.priceMultiplier);
    }
  }
}
