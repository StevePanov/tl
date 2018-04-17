import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  types: string[] = ["Все", "Новость", "Транзакция"];

  selectedPeriod: string = "d";
  selectedType: string;

  timePeriods = [
    { type: 'all', label: 'Все' },
    { type: 'd', label: 'День' },
    { type: 'w', label: 'Неделя' },
    { type: 'M', label: 'Месяц' }
  ];
  @Output() onFilterCancel = new EventEmitter<any>();
  @Output() onFilterApply = new EventEmitter<any>();

  applyFilter() {
    // console.log(this.selectedPeriod);
    
    this.onFilterApply.emit({
      period: "this.selectedPeriod"
    });
  }
  closeFilter() {
    this.selectedPeriod = 'd';
    // this.selectedType = 'Все';
    this.onFilterCancel.emit();
  }

}
