import { Component } from "@angular/core";

@Component({
    selector: "app-accumulator",
    template: `
        <h1>{{title}}</h1>
        <h3>The base of accumulator is: {{base}}</h3>

        <button (click)="accumulate(-base)">-</button>

        <span> {{counter}} </span>

        <button (click)="accumulate(base)">+</button>
    `
})

export class AccumulatorComponent {
    title: string = 'Accumulator web application';
    counter: number = 0;
    base: number = 5;

    //Methods
    accumulate(value: number){
    this.counter += value;
    }
}