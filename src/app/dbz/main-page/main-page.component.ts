import { Component } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-mainPage',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  
  //global var
  character: Character = {
    name: 'Trunks',
    power: 18000
  }

  //Methods
  addDataToCharacter(): void{
    console.log(this.character);
  }
}
