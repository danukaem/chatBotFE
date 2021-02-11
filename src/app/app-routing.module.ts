import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {ItemComponent} from './components/item/item.component';
import {CartComponent} from './components/cart/cart.component';
import {ItemListComponent} from './components/item/item-list/item-list.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'sign_up', component: SignUpComponent},
  {path: 'sign_in', component: SignInComponent},
  {path: 'item', component: ItemComponent},
  {path: 'itemList', component: ItemListComponent},
  {path: 'cart', component: CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
