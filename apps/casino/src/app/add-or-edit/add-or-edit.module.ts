import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddOrEditComponent } from './add-or-edit/add-or-edit.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddOrEditComponent, DynamicFormComponent],
  exports: [AddOrEditComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  providers: [],
})
export class AddOrEditModule {}
