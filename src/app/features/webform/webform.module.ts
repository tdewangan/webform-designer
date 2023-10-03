import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebformRoutingModule } from './webform-routing.module';
import { WebformListComponent } from './webform-list/webform-list.component';
import { WebformDetailComponent } from './webform-detail/webform-detail.component';

@NgModule({
  declarations: [
    WebformListComponent,
    WebformDetailComponent
  ],
  imports: [CommonModule, WebformRoutingModule],
})
export class WebformModule {}
