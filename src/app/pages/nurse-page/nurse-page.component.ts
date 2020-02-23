import { EVENT_PASSED_NURSE, EVENT_PASSED_HOSPITAL_ID } from './../../shared/events.constants';
import { Nurse } from './../../models/nurse';
import { NurseService } from './../../services/nurse.service';
import { Component, OnInit } from '@angular/core';
import { NavegacaoTool } from 'src/app/components/navegacao/navegacao.tool';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from 'src/app/models/hospital';
import { EventsService } from 'src/app/services/events.service';
import { EVENT_GET_HOSPITAL } from 'src/app/shared/events.constants';
import * as UIkit from 'uikit';

@Component({
  selector: 'app-nurse-page',
  templateUrl: './nurse-page.component.html',
  styleUrls: ['./nurse-page.component.css']
})
export class NursePageComponent extends NavegacaoTool implements OnInit {

  public nurses: Nurse[];
  public hospitalId: string;
  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    private readonly nurseService: NurseService
  ) {
    super(route, router)
    this.nurses = new Array<Nurse>();
    const params = this.buscarParametros();
    this.hospitalId = params.id;
    this.getByIdHospital(params.id);
  }

  ngOnInit() {
  }

  public async getByIdHospital(id: string) {
    await this.nurseService.getAllByIdHospital(id).subscribe((response: any) => {
      this.nurses = response;
      console.log('this.nurses: ', this.nurses);
    })
  }

  openModel(nurse?: any) {
    if (!nurse)
      nurse = new Nurse();
    console.log('nursenurse: ', nurse);
    EventsService.get(EVENT_PASSED_NURSE).emit(nurse);
    EventsService.get(EVENT_PASSED_HOSPITAL_ID).emit(this.hospitalId);
    UIkit.modal("#modal").show();
  }

  public detalhar(nurse: Nurse) {
    this.irPara(['/hospital/enfermeiro/detalhes'], nurse);
  }

  public resultForms(event: any) {
    console.log('event: ', event);
  }

}
