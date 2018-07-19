import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { ArchiveResult } from '../archive-result';
import { ArchiveService } from '../archive.service';

@Component({
  selector: "app-archive-list",
  template: `
    <div *ngFor='let result of archiveResults | async' class='archive-result'>
      <img src="{{ result.img_url }}">
      <a href="{{ result.web_url }}">{{ result.headline }}</a>
      <p>{{ result.snippet }}</p>
    </div>
  `,
  styleUrls: ["./archive-list.component.css"]
})
export class ArchiveListComponent implements OnInit {
  archiveResults: Observable<ArchiveResult[]>;
  constructor(private archiveService: ArchiveService) {}

  ngOnInit() {
    this.archiveResults = this.archiveService.getAll("1984-05-11");
  }
}
