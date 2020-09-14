import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { CookiesService } from '../cookies.service';


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

  buildImageUrl(imgName: string) {
    return `../../../../assets/img/${imgName}`;
  }

  isDisabled(item) {
    return this.cookiesService.cookies < item.price ? true : false;
  }

  buy(item) {
    if (this.cookiesService.cookies >= item.price) {
      this.cookiesService.cookies = this.cookiesService.cookies - item.price;
      item.amount = item.amount + 1;
    }
  }

  ngOnInit(): void {
  }

}
