import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { JwelleryComponent } from './jwellery/jwellery.component';
import { KidsComponent } from './kids/kids.component';
import { LoginComponent } from './login/login.component';
import { MensComponent } from './mens/mens.component';
import { OthersComponent } from './others/others.component';
import { WomensComponent } from './womens/womens.component';

const routes: Routes = [
   {path:"",component:HomeComponent},
  {path:"kids",component:KidsComponent},
  {path:"mens",component:MensComponent},
  {path:"womens",component:WomensComponent},
  {path:"jwellery",component:JwelleryComponent},
  {path:"others",component:OthersComponent},
  {path:"login",component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
