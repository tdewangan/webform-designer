import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebformListComponent } from './webform-list/webform-list.component';
import { WebformDetailComponent } from './webform-detail/webform-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'prefix',
  },
  {
    path: 'list',
    component: WebformListComponent,
    pathMatch: 'prefix',
  },
  {
    path: 'detail',
    component: WebformDetailComponent,
    pathMatch: 'prefix',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebformRoutingModule {}
