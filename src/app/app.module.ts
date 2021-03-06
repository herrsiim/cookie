import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CookieComponent } from './cookie/cookie.component';
import { ShopComponent } from './shop/shop.component';
import { CounterComponent } from './cookie/counter/counter.component';
import { CursorComponent } from './shop/cursor/cursor.component';

@NgModule({
  declarations: [
    AppComponent,
    CookieComponent,
    ShopComponent,
    CounterComponent,
    CursorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
