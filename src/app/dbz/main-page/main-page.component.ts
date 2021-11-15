import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.services';



@Component({
  selector: 'app-mainPage',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  //global var
  character: Character = {
    name:"Bulma",
    power: 50
  } 
  
  constructor( private dbzService: DbzServices){}
}
