import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HospitalFormsComponent } from './hospital-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaskDirective } from 'src/app/directives/mask.directive';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HospitalFormsComponent,
    MaskDirective
  ],
  exports: [
    HospitalFormsComponent
  ],

  entryComponents: [
    HospitalFormsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HospitalFormslModule { }
