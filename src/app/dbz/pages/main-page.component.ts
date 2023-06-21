import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService: DbzService) { }


  public get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacterById(id: string) {
    this.dbzService.onDeleteCharacterById(id);
  }

  saveCharacter(character: Character) {
    this.dbzService.saveCharacter(character)
  }

}
