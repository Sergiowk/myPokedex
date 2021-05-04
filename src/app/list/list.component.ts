import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pokemons: Pokemon[];
  constructor(public httpClient: HttpClient) { }


  ngOnInit(): void {
    this.getPokemons();
  }

  public getPokemons(){
    this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon/').subscribe(
    response => {
      //console.log(response);
      console.log(response.results);
      this.pokemons = response.results;  
    }
    
  );
  }
}
