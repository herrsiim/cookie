export interface ShopItem {
    name: string; 
    price: number;
    amount: number;
    img: string;
    productivity: number;
}

export interface AllShopItems {
    active: ShopItem,
    passive: ShopItem[]
}