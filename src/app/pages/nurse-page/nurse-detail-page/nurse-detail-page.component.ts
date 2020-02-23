import { NurseService } from './../../../services/nurse.service';
import { Nurse } from './../../../models/nurse';
import { Component, OnInit } from '@angular/core';
import { NavegacaoTool } from 'src/app/components/navegacao/navegacao.tool';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { EVENT_PASSED_NURSE } from 'src/app/shared/events.constants';
import * as UIkit from 'uikit';

@Component({
  selector: 'app-nurse-detail-page',
  templateUrl: './nurse-detail-page.component.html',
  styleUrls: ['./nurse-detail-page.component.css']
})
export class NurseDetailPageComponent extends NavegacaoTool implements OnInit {

  public nurse: Nurse;
  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    private readonly nurseService: NurseService,
  ) {
    super(route, router)
    this.nurse = this.buscarParametros();
    this.setActive();
  }

  public async setActive() {
    if (this.nurse)
      if (this.nurse.active) {
        this.nurse.activeString = 'Sim';
      } else {
        this.nurse.activeString = 'Não';
      }
  }

  ngOnInit(): void {
  }

  openModel(nurse?: Nurse) {
    if (!nurse)
      nurse = new Nurse();
    EventsService.get(EVENT_PASSED_NURSE).emit(nurse);
    UIkit.modal("#modal").show();
  }

  public async activeNurse() {
    this.nurseService.active({ id: this.nurse.id }).subscribe((res: any) => {
      this.nurse.active = res.data.active;
      this.setActive();
    }, (error) => {
      console.error('erro ao ativar hospital : ', error);
    });
  }

  public async desactiveNurse() {
    this.nurseService.desactive({ id: this.nurse.id }).subscribe((res: any) => {
      this.nurse.active = res.data.active;
      this.setActive();
    }, (error) => {
      console.error('erro ao desativar hospital : ', error);
    });
  }

  public resultForms(event: any) {
    this.nurse = event.data.data;
    this.nurse.cpf = event.data.data.cpf.number;
    this.setActive();
  }

}
