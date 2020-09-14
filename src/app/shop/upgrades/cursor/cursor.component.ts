import { Component, OnInit } from '@angular/core';
import { CookiesService } from "../../../cookies.service";

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements OnInit {

  constructor(
    public cookiesService: CookiesService
  ) { }

  isDisabled() {
    return this.cookiesService.cookies < 11 ? true : false;
  }

  buyCursor() {
    if (this.cookiesService.cookies >= this.cookiesService.cursorPrice) {
      this.cookiesService.cursor = this.cookiesService.cursor + 1;
      this.cookiesService.cookies = this.cookiesService.cookies - this.cookiesService.cursorPrice;
    }
  }

  ngOnInit(): void {
  }

}
