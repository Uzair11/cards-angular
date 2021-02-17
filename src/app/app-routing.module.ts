import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatementDetailComponent} from './statement-detail/statement-detail.component';

const routes: Routes = [
  {
    path:'test',
    component:StatementDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
