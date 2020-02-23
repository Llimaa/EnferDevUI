import { HospitalService } from './../../services/hospital.service';
import { Hospital } from './../../models/hospital';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavegacaoTool } from 'src/app/components/navegacao/navegacao.tool';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as UIkit from 'uikit';
import { EventsService } from 'src/app/services/events.service';
import { EVENT_PASSED_HOSPITAL } from 'src/app/shared/events.constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent extends NavegacaoTool implements OnInit {

  @ViewChild('myModel') myModal;
  public hospitais: Hospital[];
  public hospital: Hospital;
  public form: FormGroup;

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    private readonly hospitalService: HospitalService,
    private formBuilder: FormBuilder
  ) {
    super(route, router)
    this.hospitais = new Array<Hospital>();
    this.hospital = new Hospital();



  }

  ngOnInit() {
    this.getAll();
  }

  public async getAll() {
    await this.hospitalService.getAll().subscribe((response: any) => {
      this.hospitais = response;
      console.log('this.hospitais: ', this.hospitais);
    }, (error) => {
      console.log('error: ', error);
    });
  }

  openModel(hospital?: Hospital) {
    if (!hospital)
      hospital = new Hospital();
    EventsService.get(EVENT_PASSED_HOSPITAL).emit(hospital);
    UIkit.modal("#modal").show();
  }

  public resultForms(event: any) {
    console.log('event: ', event);
  }

  public detalhar(hospital: Hospital) {
    this.irPara(['/detalhes-hospital'], hospital)
  }


}
