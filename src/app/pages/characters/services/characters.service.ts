import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharactersInterface } from '../model/Characters';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  public charactersURL = "https://rickandmortyapi.com/api/character" as const;
  constructor(private httpClient: HttpClient) {}
  public getAllCharacters(): Observable<CharactersInterface> {
    return this.httpClient.get<CharactersInterface>(this.charactersURL);
  }
  public getCharacter(idCharacter: any){
    return this.httpClient.get(`${this.charactersURL}/${idCharacter}`)
  }
}
