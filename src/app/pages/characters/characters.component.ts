import { CharactersService } from './services/characters.service';
import { Component, OnInit } from '@angular/core';
import {
  CharacterItemInterface,
  CharactersInterface,
} from './model/Characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  public favoriteCharacter = '';

  public characters: CharacterItemInterface[] = [];
  public countResults = 0;
  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService
      .getAllCharacters()
      .subscribe((data: CharactersInterface) => {
        const countResults: number = data.info.count;
        console.log(countResults);
        const charactersResults: CharacterItemInterface[] = data.results;
        console.log('data.results ---> , ', data.results);

        // const formattedCount = apiResults.info.map(({ count }) => ({
        //   count,
        // }));
        const formattedCharacters = charactersResults.map(
          ({ id, name, image, status, species, gender, location }) => ({
            id,
            name,
            image,
            status,
            species,
            gender,
            location,
          })
        );
        this.characters = formattedCharacters;
        this.countResults = countResults;
        console.log('characters ---> , ', this.characters);
      });


  }


  handleFavorite(pepito: CharacterItemInterface) {
    console.log(pepito);
    this.favoriteCharacter = pepito.name;

  }
}
