import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public pokemonService:PokemonService) { }


  ngOnInit(): void {
    this.getFullList();
  }

  getFullList(){
    this.pokemonService.getPokemons();
  }
}
