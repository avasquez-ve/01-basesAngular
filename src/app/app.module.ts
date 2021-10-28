import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccumulatorComponent } from './Acumulator/accumulator.component';
import { HeroComponent } from './Heros/Hero/hero.component';
import { ListadoComponent } from './heros/listado/listado.component';


@NgModule({
  declarations: [
    AppComponent,
    AccumulatorComponent,
    HeroComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
