import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  public characters: Character[] = [
    {
      name: 'Trunks',
      power: 10,
      id: ''
    }
  ]

  @Output() onDelete = new EventEmitter<string>();

  onDeleteCharacter(id: string): void {
    this.onDelete.emit(id);
  }
}
