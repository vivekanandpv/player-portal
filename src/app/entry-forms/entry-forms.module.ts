import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryFormsRoutingModule } from './entry-forms-routing.module';
import { TFormComponent } from './components/t-form/t-form.component';
import { RFormComponent } from './components/r-form/r-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TFormComponent, RFormComponent],
  imports: [
    CommonModule,
    EntryFormsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class EntryFormsModule {}
