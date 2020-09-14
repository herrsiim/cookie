import { Component, OnInit } from '@angular/core';
import { CookiesService } from 'src/app/cookies.service';
@Component({
  selector: 'app-granny',
  templateUrl: './granny.component.html',
  styleUrls: ['./granny.component.scss']
})

export class GrannyComponent implements OnInit {

  constructor(
    private cookiesService: CookiesService
  ) { }

  ngOnInit(): void {
  }
  
  isDisabled() {
    return this.cookiesService.cookies < 11 ? true : false;
  }

  buyCursor() {
    if (this.cookiesService.cookies >= this.cookiesService.cursorPrice) {
      this.cookiesService.cursor = this.cookiesService.cursor + 1;
      this.cookiesService.cookies = this.cookiesService.cookies - this.cookiesService.cursorPrice;
    }
  }
}
