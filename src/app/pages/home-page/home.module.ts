import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './home-page.component';
import { CNPJPipeModule } from 'src/app/shared/pipes/cnpj-pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HospitalFormslModule } from 'src/app/components/hospital-forms/hospital-forms.module';
import { HospitalService } from 'src/app/services/hospital.service';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CNPJPipeModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HospitalFormslModule
  ],
  providers: [HospitalService],
  bootstrap: [AppComponent],

})
export class HomePageModule { }
