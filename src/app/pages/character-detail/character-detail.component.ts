import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters/services/characters.service';
import { CharacterItemInterface } from '../characters/model/Characters';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  public character!: CharacterItemInterface;
  constructor(private activatedRoute: ActivatedRoute, private charactersService: CharactersService) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const idCharacter = params.get('idCharacter');

      this.charactersService.getCharacter(idCharacter).subscribe((data:any) => {
        const apiResult: CharacterItemInterface = data;
        this.character = apiResult;
        console.log("character", this.character)
      })
    })
  }

}
