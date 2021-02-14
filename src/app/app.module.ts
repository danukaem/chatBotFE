import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {ChatBotComponent} from './components/chat-bot/chat-bot.component';
import {ItemComponent} from './components/item/item.component';
import {CartComponent} from './components/cart/cart.component';
import {ItemListComponent} from './components/item/item-list/item-list.component';
import { ShopItemComponent } from './components/item/item-list/shop-item/shop-item.component';
import { ProductType1Component } from './components/cart/product-type1/product-type1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpComponent,
    SignInComponent,
    ChatBotComponent,
    ItemComponent,
    CartComponent,
    ItemListComponent,
    ShopItemComponent,
    ProductType1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
