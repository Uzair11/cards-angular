import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatementDetailComponent } from './statement-detail/statement-detail.component';
import { CofDetailComponent } from './cof-detail/cof-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    StatementDetailComponent,
    CofDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
