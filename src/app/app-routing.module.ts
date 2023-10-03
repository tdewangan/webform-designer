import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'webform',
    pathMatch: 'full',
  },
  {
    path: 'webform',
    loadChildren: () =>
      import('./features/webform/webform.module').then((m) => m.WebformModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
