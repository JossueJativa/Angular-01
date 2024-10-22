import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'Iron Man';
  public age:number = 45;

  changeName( ):void {
    this.name = 'Spiderman';
  }

  changeAge( ):void {
    this.age = 30;
  }

  resetForm(): void {
    this.name = 'Iron Man';
    this.age = 45;
  }

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }
}