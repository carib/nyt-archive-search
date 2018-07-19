import { Component, Input, OnInit } from '@angular/core';
import { Date } from '../date';
import { ArchiveService } from '../archive.service';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.css']
})
export class DateFormComponent implements OnInit {
  constructor(private archiveService: ArchiveService) { }

  ngOnInit() {

  }

  searchArchive() {
    let day = this.date.day;
    let month = this.date.month;
    if (this.date.day < 10) {
      day = `0${this.date.day}`;
    }
    if (this.date.month < 10) {
      month = `0${this.date.month}`;
    }
    const date = `${this.date.year}-${month}-${day}`;

    this.archiveService.getAll(date);
  }
}
