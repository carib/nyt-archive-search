import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchiveListComponent } from './archive-list/archive-list.component';
import { DateFormComponent } from './date-form/date-form.component';


const routes: Routes = [
  {
    path: 'archive',
    component: DateFormComponent,
  },
  {
    path: 'archive/:month/:day/:year',
    component: ArchiveListComponent,
  },
  {
    path: '',
    redirectTo: '/archive',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
