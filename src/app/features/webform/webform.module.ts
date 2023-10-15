import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';

import { WebformRoutingModule } from './webform-routing.module';
import { WebformListComponent } from './webform-list/webform-list.component';
import { WebformDetailComponent } from './webform-detail/webform-detail.component';
import { WebformControlsTrayComponent } from './webform-controls-tray/webform-controls-tray.component';
import { WebformControlPropertiesTrayComponent } from './webform-control-properties-tray/webform-control-properties-tray.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    WebformListComponent,
    WebformDetailComponent,
    WebformControlsTrayComponent,
    WebformControlPropertiesTrayComponent,
  ],
  imports: [
    CommonModule,
    WebformRoutingModule,
    MatSidenavModule,
    MatExpansionModule,
    MatButtonModule,
    MatListModule,
  ],
})
export class WebformModule {}
