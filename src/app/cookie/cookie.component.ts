import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../cookies.service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})

export class CookieComponent implements OnInit {

  constructor(
    private cookiesService: CookiesService
  ) { }

  cookieClick() {
    this.cookiesService.makeCookie();
  }

  ngOnInit(): void {
  }

}
