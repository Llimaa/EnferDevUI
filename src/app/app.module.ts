import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageModule } from './pages/home-page/home.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { HospitalDetailPageModule } from './pages/home-page/hospital-details-page/hospital-detail.module';
import { NursePageModule } from './pages/nurse-page/nurse.module';
import { NurseDetailPageModule } from './pages/nurse-page/nurse-detail-page/nurse-detail.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomePageModule,
    HospitalDetailPageModule,
    NursePageModule,
    HospitalDetailPageModule,
    NurseDetailPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
