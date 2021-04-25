import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormPageComponent],
  imports: [CommonModule, FormRoutingModule, FormsModule, ReactiveFormsModule],
})
export class FormModule {}
