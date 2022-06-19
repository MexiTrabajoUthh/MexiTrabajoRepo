import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OutputService {
  @Output() outputParams: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
