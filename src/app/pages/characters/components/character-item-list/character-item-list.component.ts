import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CharacterItemInterface } from '../../model/Characters';

@Component({
  selector: 'app-character-item-list',
  templateUrl: './character-item-list.component.html',
  styleUrls: ['./character-item-list.component.scss'],
})
export class CharacterItemListComponent implements OnInit {


    @Input() character!: CharacterItemInterface;

    @Output() public setFavorite = new EventEmitter<CharacterItemInterface>();

  ngOnInit(): void {
    console.log('character --->', this.character);

  }


  handleClick() {
    console.log('click');
    this.setFavorite.emit(this.character);
  }
}
