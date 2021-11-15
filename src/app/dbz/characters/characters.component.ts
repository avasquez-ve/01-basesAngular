import { Component, Input } from '@angular/core';
import { DbzServices } from '../services/dbz.services';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent{
  // @Input() lstCharacters: Character[] = [];
  constructor(private dbzServices: DbzServices){}

  get lstCharacters(){
    return this.dbzServices.character;
  }
}
