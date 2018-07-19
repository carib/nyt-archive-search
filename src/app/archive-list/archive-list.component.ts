import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ArchiveResult } from '../archive-result';
import { ArchiveService } from '../archive.service';
import { FormDate } from '../form-date';


@Component({
  selector: "app-archive-list",
  templateUrl: './archive-list.component.html',
  styleUrls: ["./archive-list.component.css"]
})
export class ArchiveListComponent implements OnInit {
  archiveResults: ArchiveResult[];
  date: FormDate;
  sub: any;
  constructor(
    private archiveService: ArchiveService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.date = new FormDate();
    this.sub = this.route.params.subscribe(params => {
      this.date.day = Number.parseInt(params["day"]);
      this.date.month = Number.parseInt(params["month"]);
      this.date.year = Number.parseInt(params["year"]);
      this.searchArchive();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goToDateSelection() {
    window.history.back();
  }

  searchArchive() {
    let day;
    let month;
    if (this.date.day < 10) {
      day = `0${this.date.day}`;
    } else {
      day = this.date.day;
    }
    if (this.date.month < 10) {
      month = `0${this.date.month}`;
    } else {
      month = this.date.month;
    }
    const date = `${this.date.year}-${month}-${day}`;
    console.log('DATE:', date);

    this.archiveService
      .getAll(date)
      .subscribe(a => this.archiveResults = a);
  }
}
