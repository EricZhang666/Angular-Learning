import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-individual',
  templateUrl: './hero-individual.component.html',
  styleUrls: ['./hero-individual.component.css']
})
export class HeroIndividualComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
