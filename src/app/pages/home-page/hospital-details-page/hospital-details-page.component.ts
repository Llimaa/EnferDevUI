import { Hospital } from './../../../models/hospital';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavegacaoTool } from 'src/app/components/navegacao/navegacao.tool';
import { EventsService } from 'src/app/services/events.service';
import { EVENT_PASSED_HOSPITAL } from 'src/app/shared/events.constants';
import * as UIkit from 'uikit';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-hospital-details-page',
  templateUrl: './hospital-details-page.component.html',
  styleUrls: ['./hospital-details-page.component.css']
})
export class HospitalDetailsPageComponent extends NavegacaoTool implements OnInit {

  public hospital: Hospital;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    private readonly hospitalService: HospitalService
  ) {
    super(route, router)
    this.hospital = this.buscarParametros();

    this.setActive();
  }

  ngOnInit(): void {
  }

  public async setActive() {
    if (this.hospital)
      if (this.hospital.active) {
        this.hospital.activeString = 'Sim';
      } else {
        this.hospital.activeString = 'Não';
      }
  }

  openModel(hospital?: Hospital) {
    if (!hospital)
      hospital = new Hospital();
    EventsService.get(EVENT_PASSED_HOSPITAL).emit(hospital);
    UIkit.modal("#modal").show();
  }

  public resultForms(event: any) {
    console.log('event: ', event.data.data);
    this.hospital = event.data.data;
  }

  public enfermeiros(hospital: Hospital) {
    this.irPara(['hospital/enfermeiros'], hospital);
  }

  public async ativarHospital() {
    this.hospitalService.active({ id: this.hospital.id }).subscribe((res: any) => {
      this.hospital.active = res.data.active;
      this.setActive();
    }, (error) => {
      console.log('erro ao ativar hospital : ', error);
    });
  }

  public async desativarHospital() {
    this.hospitalService.desactive({ id: this.hospital.id }).subscribe((res: any) => {
      this.hospital.active = res.data.active;
      this.setActive();
    }, (error) => {
      console.log('erro ao desativar hospital : ', error);
    });
  }

}
