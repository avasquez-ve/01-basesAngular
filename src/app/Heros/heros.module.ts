import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from './Hero/hero.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroComponent,
        ListadoComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ListadoComponent
    ]
})
export class HerosModule{}