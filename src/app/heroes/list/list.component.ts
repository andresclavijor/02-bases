import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public heroesNames: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Star lord',
  ];

  public deletedHero?: string;

  removeLastHero() {
    this.deletedHero = this.heroesNames.pop();
  }
}
