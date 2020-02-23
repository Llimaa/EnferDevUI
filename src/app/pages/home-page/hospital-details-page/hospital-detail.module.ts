import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HospitalService } from 'src/app/services/hospital.service';
import { CNPJPipeModule } from 'src/app/shared/pipes/cnpj-pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HospitalFormslModule } from 'src/app/components/hospital-forms/hospital-forms.module';
import { HospitalDetailsPageComponent } from './hospital-details-page.component';
import { DateFormatPipeModule } from 'src/app/shared/pipes/date-pipe.module';

@NgModule({
  declarations: [
    HospitalDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CNPJPipeModule,
    CommonModule,
    HospitalFormslModule,
    DateFormatPipeModule
  ],
  providers: [HospitalService],
  bootstrap: [AppComponent],

})
export class HospitalDetailPageModule { }
