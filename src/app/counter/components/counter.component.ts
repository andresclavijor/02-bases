import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button class="btn btn-primary mx-2" (click)="increaseBy(+1)">+1</button>
    <button class="btn btn-primary mx-2" (click)="reset()">reset</button>
    <button class="btn btn-primary mx-2" (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent implements OnInit {
  public counter: number = 10;

  constructor() {}

  ngOnInit() {}

  increaseBy(value: number): void {
    this.counter += value;
  }
  reset() {
    this.counter = 10;
  }
}
