import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Pokemon[];

  constructor(public httpClient: HttpClient) { }

  

  public getPokemons(){
    this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon/').subscribe(
    response => {
      //console.log(response);
      console.log(response.results);
      this.pokemons = response.results;
      
      return this.pokemons;
      
    }
    
  );
  }

}
