import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatementDetailComponent} from './statement-detail/statement-detail.component';
import {BussinessCardComponent} from "./bussiness-card/bussiness-card.component";


const routes: Routes = [
  {
    path:'card',
    component:BussinessCardComponent
  },
  {
    path:'statement-detail',
    component:StatementDetailComponent
  },
  {
    path:''
  }
   





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
