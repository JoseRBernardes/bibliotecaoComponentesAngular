import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardInterativoComponent } from './Components/card-interativo/card-interativo.component';
import { CalendaryComponent } from './Components/calendary/calendary.component';

@NgModule({
  declarations: [
    AppComponent,
    CardInterativoComponent,
    CalendaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
