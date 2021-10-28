import { Component } from '@angular/core';

//ng g c heros/listado --> Genera componente automatico

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  //props
  public heros: string[] = ["Iron Man", "Spider Man", "Thor", "Dr. Strange", "Black Widow", "Hawkeye"];
  public deletedHeros: string[] = [];

  //methods
  deleteRandomHero():void {
    let arrLength:number = this.heros.length + 1;
    let itemToRemove:number = Math.floor(Math.random() *  this.heros.length);
    let deletedHeros:string[] = this.heros.splice(itemToRemove, 1);

    if (deletedHeros[0] != undefined) {
      this.deletedHeros.push(deletedHeros[0]);
    }
  }
}
