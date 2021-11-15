import { Injectable } from "@angular/core";

import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DbzServices{
    
    //Se hace private para que nadie manipule este arreglo desde afuera
    private _lstCharacters: Character[] = [
        {
            name: 'Goku',
            power: 150000
        },
        {
            name: "Vegeta",
            power: 100000
        }
    ]
    
    get character(): Character[] {
        return [...this._lstCharacters]
    }
    
    constructor(){}

    addCharacter(character: Character){
        this._lstCharacters.push(character)
    }

    //methods
    // addNewCharacter(character: Character){
    //     this.lstCharacters.push(character);
    // }
}