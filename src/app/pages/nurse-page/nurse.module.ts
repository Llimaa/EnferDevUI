import { NurseService } from './../../services/nurse.service';
import { NursePageComponent } from './nurse-page.component';
import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NurseFormslModule } from 'src/app/components/nurse-forms/nurse-forms.module';

@NgModule({
  declarations: [
    NursePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NurseFormslModule
  ],
  providers: [NurseService],
  bootstrap: [AppComponent],

})
export class NursePageModule { }
