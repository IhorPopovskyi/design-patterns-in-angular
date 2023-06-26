import { Component, OnInit } from "@angular/core";
import { CounterService } from "./counter.service";

@Component({
  selector: 'app-counter-two',
  template: `
    <h2>Counter Two</h2>
    <p>Count: {{ count }}</p>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
  `
})
export class CounterTwoComponent implements OnInit {
  count: number;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.count = this.counterService.getCount();
  }

  increment(): void {
    this.counterService.increment();
    this.count = this.counterService.getCount();
  }

  decrement(): void {
    this.counterService.decrement();
    this.count = this.counterService.getCount();
  }
}
