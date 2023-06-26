import { Component } from "@angular/core";
import { EventService } from "./event.service";

@Component({
  selector: 'app-event-one',
  template: `
    <h2>Component One</h2>
    <button (click)="emitEvent()">Emit Event</button>
  `
})
export class EventOneComponent {
  count: number = 0;

  constructor(private eventService: EventService) {}

  emitEvent(): void {
    this.eventService.emitEvent(this.count++);
  }
}
