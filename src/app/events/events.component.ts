import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  @Input() event;

  colorBg: boolean = false;
  visibility: boolean = true;

  openForm() {
    this.visibility = !this.visibility;
  }

  changeColor() {
    this.colorBg = !this.colorBg;
  }
}
