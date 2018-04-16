import { Component, OnInit } from '@angular/core';
import { dataEvent } from './event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isAddVisible = false;
  historyEvent = [
    {
      type: "Новость",
      title: "Первое событие",
      description: "Алекс собирается купить новый телефон",
      date: "2018-04-06"
    },
    {
      type: "Транзакция",
      description: "Покупка ноутбука",
      date: "2016-02-11",
      operation: "Расход",
      sum: 1121,
      currency: "$",
      from: "Саша"
    }
  ];

  private toggleAddVisibility(dir: boolean) {
    this.isAddVisible = dir;
    console.log(dir);
  }

  openAddForm() {
    this.toggleAddVisibility(true);
  }

  onAddApply(eventData) {
    this.historyEvent.push(eventData);
    this.toggleAddVisibility(false);
    console.log('eventData>>', eventData);
    console.log('hist>>', this.historyEvent);
  }

  onAddCancel() {
    this.toggleAddVisibility(false);
  }
}
