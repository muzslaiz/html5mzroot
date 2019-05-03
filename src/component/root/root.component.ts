import { Species } from './../../classes/species';
import { GlobalService } from './../../app/global.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/classes/hero';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  private newHero: Hero = new Hero();
  private newSpecies: Species = new Species();

  private actualHero: Hero = new Hero();
  private actualSpecies: Species = new Species();

  constructor(private global: GlobalService) { }

  ngOnInit() {
    this.global.getAllHeroes();
    this.global.getAllSpecies();
  }

  typeClicked(num: number) {
    this.global.switchNum = num;
    this.newHero = new Hero();
    this.newSpecies = new Species();
  }

  optionsClicked(option:string)
  {
    this.global.siteOptions = option;
  }

  addHero(){
    this.global.addHero(this.newHero);
  }

  editHero(hero: Hero) {
    this.global.siteOptions = 'edit';
    this.actualHero = hero;
  }

  deleteHero(hero: Hero) {
    this.global.deleteHero(hero.id);
  }

  addSpecies(){
    this.global.addSpecies(this.newSpecies);
  }

  editSpecies(species: Species) {
    this.global.siteOptions = 'edit';
    this.actualSpecies = species;
  }

  deleteSpecies(species: Species) {
    this.global.deleteSepecies(species.id);
  }
}
