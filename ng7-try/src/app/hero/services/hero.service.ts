import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroesComponent } from '../components/heroes/heroes.component';

@Injectable()
export class HeroService {

  private HEROES: Hero[] = [
    { Id: 11, Name: 'Mr. Nice' },
    { Id: 12, Name: 'Narco' },
    { Id: 13, Name: 'Bombasto' },
    { Id: 14, Name: 'Celeritas' },
    { Id: 15, Name: 'Magneta' },
    { Id: 16, Name: 'RubberMan' },
    { Id: 17, Name: 'Dynama' },
    { Id: 18, Name: 'Dr IQ' },
    { Id: 19, Name: 'Magma' },
    { Id: 20, Name: 'Tornado' }
  ];

constructor() { }

public getHeroes() {
  return this.HEROES;
}

}