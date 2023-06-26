import { Component } from '@angular/core';
import { FacadeService } from './facade.service';

@Component({
  selector: 'app-facade',
  template: `
    <h2>Facade Example</h2>
    <button (click)="processOrder()">Process Order</button>
  `
})
export class FacadeComponent {
  constructor(private facadeService: FacadeService) {}

  processOrder(): void {
    this.facadeService.processOrder();
  }
}
