import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RFormComponent } from './components/r-form/r-form.component';
import { TFormComponent } from './components/t-form/t-form.component';

const routes: Routes = [
  {
    path: 't-form',
    component: TFormComponent,
  },
  {
    path: 'r-form',
    component: RFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntryFormsRoutingModule {}
