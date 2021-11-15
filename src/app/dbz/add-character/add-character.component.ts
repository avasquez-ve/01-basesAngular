import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html'
})
export class AddCharacterComponent{

  //Works to send data from children to father component. Need to have a event in the component tag to execute an function that send the event with the data
  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  //Works to receive data from father to children componente. Needs to have a tag in the html component
  @Input() character: Character = {
    name: '',
    power: 0
  }

  constructor(private dbzService: DbzServices){}

  //Methods
  addDataToCharacter(): void{
    if (this.character.name.trim().length == 0) {
      return;
    }

    this.dbzService.addCharacter(this.character);
    // this.onNewCharacter.emit(this.character);

    this.character = {
      name: '',
      power: 0
    }
  }
}
