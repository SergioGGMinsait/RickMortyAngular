import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailRoutingModule } from './character-detail-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CharacterDetailRoutingModule,
    HttpClientModule,
  ]
})
export class CharacterDetailModule { }
