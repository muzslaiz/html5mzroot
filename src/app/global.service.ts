import { Species } from './../classes/species';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from 'src/classes/hero';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public heroes: Array<Hero> = [];
  public species: Array<Species> = [];

  public siteOptions = 'showall';
  public switchNum = 0;

  private serviceURL = 'http://81.2.241.234:8080/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  };

  constructor(private http: HttpClient) { }

  public getAllHeroes(): void {
    const url = this.serviceURL + 'hero';
    this.http.get<Array<Hero>>(url).subscribe((res) => {
      this.heroes = res;
    });
  }

  public getAllSpecies(): void {
    const url = this.serviceURL + 'species';
    this.http.get<Array<Species>>(url).subscribe((res) => {
      this.species = res;
    });
  }

  public getHero(id: number): void {
    const url = this.serviceURL + 'hero/' + id;
    this.http.get<Hero>(url).subscribe((res) => {
      console.log(res);
    });
  }

  public getSpecies(id: number): void {
    const url = this.serviceURL + 'species/' + id;
    this.http.get<Hero>(url).subscribe((res) => {
      console.log(res);
    });
  }

  public addHero(obj: Hero) {
    const url = this.serviceURL + 'hero';

    const request = new XMLHttpRequest();
    // POST to httpbin which returns the POST data as JSON
    request.open('POST', url, true);

    const formData = new FormData();
    formData.append('name', obj.name);
    formData.append('desc', obj.description);

    request.send(formData);
    console.log(request.response);

    // this.http.post(url, formData).subscribe((res) => {
    //   console.log(res);
    // });
  }

  public addSpecies(obj: Species) {
    const url = this.serviceURL + 'species';
    this.http.post(url, JSON.stringify( { name: obj.name, desc: obj.description} )).subscribe((res) => {
      console.log(res);
    });
  }

  public modifyHero(obj: Hero) {
    const url = this.serviceURL + 'hero/' + obj.id;
    this.http.put(url, JSON.stringify( { id: obj.id, name: obj.name, desc: obj.description} )).subscribe((res) => {
      console.log(res);
    });
  }

  public modifySpecies(obj: Hero) {
    const url = this.serviceURL + 'species/' + obj.id;
    this.http.put(url, JSON.stringify( { id: obj.id, name: obj.name, desc: obj.description} )).subscribe((res) => {
      console.log(res);
    });
  }

  public deleteHero(id: number){
    const url = this.serviceURL + 'hero/' + id;
    this.http.delete(url).subscribe((res) => {
      console.log(res);
    });
  }

  public deleteSepecies(id: number){
    const url = this.serviceURL + 'species/' + id;
    this.http.delete(url).subscribe((res) => {
      console.log(res);
    });
  }
}
