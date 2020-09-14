import { Component } from '@angular/core';
import { CookiesService } from './cookies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(
    public cookiesService: CookiesService
  ) {}
  
  title = 'cookie';
}
