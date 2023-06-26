import { Component } from "@angular/core";
import { ConsoleLog } from './console-log.decorator';

@Component({
  selector: 'app-decorator',
  template: `
    <h2>Decorator Example</h2>
    <label> First number: </label>
    <input type="number" [(ngModel)]="firstNumber" placeholder="Enter number"/>
    <label> Second number: </label>
    <input type="number" [(ngModel)]="secondNumber" placeholder="Enter number"/>
    <button (click)="sum(firstNumber, secondNumber)">Sum</button>
  `
})
export class DecoratorComponent {
  firstNumber: number;
  secondNumber: number;

  @ConsoleLog
  sum(a: number, b: number): number {
    return a + b;
  }
}
