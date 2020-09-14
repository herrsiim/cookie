import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(
    public shopService: ShopService
  ) { }

  buildImageUrl(imgName: string) {
    return `../../../../assets/img/${imgName}`;
  }

  ngOnInit(): void {
  }

}
