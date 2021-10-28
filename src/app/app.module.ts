import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HerosModule } from './Heros/heros.module';
import { AcumulatorModule } from './Acumulator/acumulator.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HerosModule,
    AcumulatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
