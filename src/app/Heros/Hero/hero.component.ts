import { Component } from "@angular/core";

@Component({
    selector: "app-hero",
    templateUrl: "hero.component.html"
})
export class HeroComponent{
    //props
    public nombre: string = "Iron man";
    public edad: number = 45;

    //getters-setters
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    //Methods
    combinarNombre(): string{
        return `${this.nombre} - ${this.edad}`
    }
    cambiarNombre():void {
        this.nombre = "Spider man";
    }
    cambiarEdad():void {
        this.edad = 16;
    }
}