import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { dataEvent } from '../event.model';
// import { EventService } from '../sevices/event.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent {

  // constructor(private eventsService: EventService) {
  // }
  
  @ViewChild('form') form: NgForm;
  operations = ["Приход", "Расход"];
  currencys: string[] = ["₽", "$", "€"]
  types: string[] = ["Новость", "Транзакция"];

  title: string;
  description: string;
  date: string;
  operation: string;
  sum: number;
  currency: string;
  from: string;

  type: string = this.types[0];
  // historyEvent: dataEvent[] = [];
  @Output() onAddCancel = new EventEmitter<any>();
  @Output() onAddApply = new EventEmitter<any>();

  applyAddForm() {
    this.onAddApply.emit(
      {
        type: this.type,
        title: this.title,
        description: this.description,
        date: this.date,
        operation: this.operation,
        sum: this.sum,
        currency: this.currency,
        from: this.from
      }
    )
  }
  closeAddForm() {
    this.form.reset()
    this.onAddCancel.emit();
  }

  // addEvent(type: string, title: string, description: string, date: string, operation: string, sum: number, currency: string, from: string) {
  //   this.historyEvent.push(new dataEvent(type, title, description, date, operation, sum, currency, from));
  // }
  // onSubmit(form: NgForm) {
  // let { type, title, description, date, operation, sum, currency, from } = form.value;

  // const event = new dataEvent(
  //   type, title, description, date, operation, sum, currency, from
  // );
  // console.log('event>>', event);

  // this.historyEvent.push(event);
  // this.eventsService.addEvent(event);

  //   this.form.reset();
  //   this.type = this.types[0];
  //   console.log(this.historyEvent);
  // }

}
