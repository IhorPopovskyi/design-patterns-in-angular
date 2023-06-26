import { Component, OnInit } from "@angular/core";
import { EventService } from "./event.service";

@Component({
  selector: 'app-event-two',
  template: `
    <h2>Component Two</h2>
    <p>Count: {{ receivedEvent }}</p>
  `
})
export class EventTwoComponent implements OnInit {
  receivedEvent: number;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvent().subscribe((event: number) => {
      this.receivedEvent = event;
    });
  }
}
