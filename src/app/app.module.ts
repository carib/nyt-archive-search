import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchiveListComponent } from './archive-list/archive-list.component';
import { ArchiveService } from './archive.service';
import { DateFormComponent } from './date-form/date-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ArchiveListComponent,
    DateFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ArchiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
