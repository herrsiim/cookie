import { Injectable } from '@angular/core';
import { ShopItem } from './models/shop-items'

@Injectable({
  providedIn: 'root'
})

export class ShopService {
  passiveShopItems: ShopItem[] = [
    {
      name: "Grandma",
      price: 50,
      amount: 0,
      img: "granny.png"
    },
    {
      name: "Farm",
      price: 100,
      amount: 0,
      img: "farm.png"
    },
    {
      name: "Mine",
      price: 250,
      amount: 0,
      img: "mine.png"
    },
    {
      name: "Factory",
      price: 500,
      amount: 0,
      img: "factory.png"
    }
  ]

  constructor() { }
}
