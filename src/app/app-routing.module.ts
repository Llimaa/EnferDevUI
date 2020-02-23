import { NursePageComponent } from './pages/nurse-page/nurse-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalDetailsPageComponent } from './pages/home-page/hospital-details-page/hospital-details-page.component';
import { NurseDetailPageComponent } from './pages/nurse-page/nurse-detail-page/nurse-detail-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: '', component: HomePageComponent },
    ]
  },
  { path: 'detalhes-hospital', component: HospitalDetailsPageComponent },
  { path: 'hospital/enfermeiros', component: NursePageComponent },
  { path: 'hospital/enfermeiro/detalhes', component: NurseDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
