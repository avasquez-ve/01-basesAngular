import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-mainPage',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  
  //global var
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

  character: Character = {
    name: '',
    power: 0
  }

  //Methods
  addDataToCharacter(): void{
    if (this.character.name.trim().length == 0) {
      return;
    }

    this.lstCharacters.push(this.character)
    this.character = {
      name: '',
      power: 0
    }
  }
}
