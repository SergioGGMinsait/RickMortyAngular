import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharacterItemListComponent } from './components/character-item-list/character-item-list.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterItemListComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule,

  ]
})
export class CharactersModule { }
