import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HerosModule } from './Heros/heros.module';
import { AcumulatorModule } from './Acumulator/acumulator.module';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HerosModule,
    AcumulatorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
