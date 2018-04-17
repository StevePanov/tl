import { Component, OnInit } from '@angular/core';
import { dataEvent } from './event.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isAddVisible = false;
  isFilterVisible: boolean = false;

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

  // private toggleAddVisibility(dir: boolean) {
  //   this.isAddVisible = dir;
  //   console.log('add>>', dir);
  // }

  private toggleFilterVisibility(dir: boolean) {
    this.isFilterVisible = dir;
    console.log('filter>>', dir);
  }

  onFilterCancel() {
    this.toggleFilterVisibility(false);
  }

  onFilterApply(f) {
    console.log('filterData', f);
  }

  openFilter() {
    this.toggleFilterVisibility(true);
  }

  // openAddForm() {
  //   this.toggleAddVisibility(true);
  // }

  // onAddApply(eventData) {
  //   this.historyEvent.push(eventData);
  //   this.toggleAddVisibility(false);
  // }

  // onAddCancel() {
  //   this.toggleAddVisibility(false);
  // }
}
