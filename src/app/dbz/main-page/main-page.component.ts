import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';



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

  lstCharacters: Character[] = [
    {
      name: 'Goku',
      power: 150000
    },
    {
      name: "Vegeta",
      power: 100000
    }
  ]
  
  //methods
  addNewCharacter(character: Character){
    console.log(character);
    this.lstCharacters.push(character);
    console.log(this.lstCharacters);
  }
}
