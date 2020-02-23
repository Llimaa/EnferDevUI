import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NurseFormsComponent } from './nurse-forms.component';
import { NurseService } from 'src/app/services/nurse.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NurseFormsComponent
  ],
  exports: [
    NurseFormsComponent
  ],

  entryComponents: [
    NurseFormsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [NurseService]
})
export class NurseFormslModule { }
