import { NgModule } from "@angular/core";
import { AccumulatorComponent } from './Acumulator/accumulator.component';

@NgModule({
    declarations: [
        AccumulatorComponent
    ],
    exports: [
        AccumulatorComponent
    ]
})
export class AcumulatorModule{}