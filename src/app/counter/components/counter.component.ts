import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter {{ counter }}</h3>

        <button (click)="sum( 1 )">+1</button>
        <button (click)="reset()">Reset</button>
        <button (click)="sum( -1 )">-1</button>
    `
})

export class CounterComponent {
    public counter:number = 0;

    sum( value: number ): void {
        this.counter += value;
    }

    reset(): void {
        this.counter = 0;
    }
}