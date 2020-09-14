import { Injectable } from '@angular/core';
import { ShopItem } from './models/shop-items'

@Injectable({
  providedIn: 'root'
})

/**
 * This service contains all the passive production items
 * which are available for buying in the shop. 
 * 
 * It is being updated asynchronusly and it's always being used
 */

export class ShopService {
  priceMultiplyer: number = 1.1;
  passiveShopItems: ShopItem[] = [
    {
      name: "Grandma",
      price: 50,
      amount: 0,
      productivity: 2,
      img: "granny.png"
    },
    {
      name: "Farm",
      price: 100,
      amount: 0,
      productivity: 5,
      img: "farm.png"
    },
    {
      name: "Mine",
      price: 250,
      amount: 0,
      productivity: 10,
      img: "mine.png"
    },
    {
      name: "Factory",
      price: 500,
      amount: 0,
      productivity: 25,
      img: "factory.png"
    },
    {
      name: "Bank",
      price: 1000,
      amount: 0,
      productivity: 50,
      img: "bank.png"
    },
    {
      name: "Temple",
      price: 1500,
      amount: 0,
      productivity: 100,
      img: "temple.png"
    },
    {
      name: "Wizard tower",
      price: 5000,
      amount: 0,
      productivity: 250,
      img: "wizard.png"
    },
    {
      name: "Shipment",
      price: 10000,
      amount: 0,
      productivity: 500,
      img: "shipment.png"
    },
    {
      name: "Alchemy",
      price: 100000,
      amount: 0,
      productivity: 1500,
      img: "alchemy.png"
    },
  ]

  constructor() { }
}
