import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterItemListComponent } from './character-item-list.component';

describe('CharacterItemListComponent', () => {
  let component: CharacterItemListComponent;
  let fixture: ComponentFixture<CharacterItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterItemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
