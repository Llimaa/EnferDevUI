import { NurseFormslModule } from 'src/app/components/nurse-forms/nurse-forms.module';
import { DateFormatPipeModule } from 'src/app/shared/pipes/date-pipe.module';
import { NgModule } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NurseDetailPageComponent } from './nurse-detail-page.component';
import { NurseService } from 'src/app/services/nurse.service';

@NgModule({
  declarations: [
    NurseDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateFormatPipeModule,
    CommonModule,
    NurseFormslModule,
  ],
  providers: [NurseService],
  bootstrap: [AppComponent],

})
export class NurseDetailPageModule { }
