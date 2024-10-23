import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public lastHero?: string;
  public heroesNames: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Captain America'];

  deleteHero(): void {
    this.lastHero = this.heroesNames.pop();
  }
}
