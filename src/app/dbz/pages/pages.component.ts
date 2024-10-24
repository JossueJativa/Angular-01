import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {
  public characters: Character[] = [{
    name: 'Goku',
    power: 15000
  }, {
    name: 'Vegeta',
    power: 14000
  },{
    name: 'Trunks',
    power: 7000
  }];


}
