import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../../cookies.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(
    public cookiesService: CookiesService
  ) { }

  numberWithCommas(number: number) {
    if(number === 0) {
      return 0;
    } else {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }

  ngOnInit(): void {
  }

}
