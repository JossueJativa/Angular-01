import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title:string = 'Hola Mundo';
  public counter:number = 0;

  sum( value: number ): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 0;
  }
}
