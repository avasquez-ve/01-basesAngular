import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccumulatorComponent } from './Acumulator/accumulator.component';
import { HeroComponent } from './Heros/Hero/hero.component';


@NgModule({
  declarations: [
    AppComponent,
    AccumulatorComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
