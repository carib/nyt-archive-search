import { Component, Input, OnInit } from '@angular/core';
import { FormDate } from '../form-date';
import { ArchiveService } from '../archive.service';

@Component({
  selector: 'app-date-form',
  template: `
    <h3>Enter a date after Sept. 18, 1851 (YYYY/MM/DD)</h3>
    <form #dateForm="ngForm">
      <div>
        <label for="day">Day (DD):</label>
        <input type="number" name='day' [(ngModel)]="date.day" #day="ngModel">
      </div>
      <div>
        <label for="month">Month (MM):</label>
        <input type="number" name='month' [(ngModel)]="date.month" #month="ngModel">
      </div>
      <div>
        <label for="year">Year (YYYY):</label>
        <input type="number" name='year'  [(ngModel)]="date.year" #year="ngModel">
      </div>
      <button [routerLink]="['/archive', date.day, date.month, date.year]">Search</button>
    </form>
  `,
  styleUrls: ["./date-form.component.css"]
})
export class DateFormComponent implements OnInit {
  @Input() date: FormDate;
  constructor(private archiveService: ArchiveService) {}

  ngOnInit() {
    this.date = new FormDate();
  }
}
