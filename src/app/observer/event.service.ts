import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private subject = new Subject<number>();

  emitEvent(event: number): void {
    this.subject.next(event);
  }

  getEvent(): Observable<number> {
    return this.subject.asObservable();
  }
}
