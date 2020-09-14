import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {
  public cookies: number = 0;
  public cursor: number = 1;
  public cursorPrice: number = 10;
  public grandma: number = 1;
  public grandmaPrice: number = 50;

  constructor() { }
  
  addCookie() {
    this.cookies = (this.cookies + this.cursor);
  }
}
 