import { Component } from '@angular/core';
import { ArchiveService } from './archive.service';
import { Date } from './date';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArchiveService],
})

export class AppComponent {
  title = 'NYT Archive Search';
}
