import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {SignInComponent} from './components/sign-in/sign-in.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'sign_up', component: SignUpComponent},
  {path: 'sign_in', component: SignInComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
