import { EVENT_PASSED_NURSE, EVENT_PASSED_HOSPITAL_ID } from './../../shared/events.constants';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HospitalService } from 'src/app/services/hospital.service';
import { EventsService } from 'src/app/services/events.service';
import { Nurse, CreateNurse } from 'src/app/models/nurse';
import { NurseService } from 'src/app/services/nurse.service';

@Component({
  selector: 'app-nurse-forms-component',
  templateUrl: './nurse-forms.component.html',
  styleUrls: ['./nurse-forms.component.css']
})
export class NurseFormsComponent implements OnInit {

  @Output() result?= new EventEmitter<any>();

  public nurse: Nurse;
  public form: FormGroup;
  public eventData: any;

  constructor(
    private readonly nurseService: NurseService,
    private formBuilder: FormBuilder
  ) {
    this.nurse = new Nurse();
    this.eventData = EventsService.get(EVENT_PASSED_NURSE).subscribe(res => {
      console.log('res: ', res);
      if (res !== undefined) {
        this.nurse = res;
        this.nurse.hospitalId = res.idHospital;
        this.FormDate();
      }
    });

    this.eventData = EventsService.get(EVENT_PASSED_HOSPITAL_ID).subscribe(res => {
      console.log('res: ', res);
      this.nurse.hospitalId = res;
    });
  }

  ngOnInit() {
    this.FormDate();
  }

  limparDados() {
    this.nurse = {};
  }

  ngOnDestroy() {
    this.eventData.unsubscribe();
    this.nurse = {};
  }

  public FormDate() {
    this.form = this.formBuilder.group({
      id: [this.nurse.id, Validators.compose([
      ])],
      name: [this.nurse.name, Validators.compose([
        Validators.minLength(3),
        Validators.required,
      ])],
      cpf: [this.nurse.cpf, Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.required
      ])],
      coren: [this.nurse.coren, Validators.compose([
        Validators.required
      ])],
      dateBirth: [this.nurse.dateBirth, Validators.compose([
        Validators.required
      ])],
      hospitalId: [this.nurse.hospitalId],
      nameHospital: [this.nurse.nameHospital]
    });
  }

  public async submit() {

    if (this.form.value.id) {
      this.nurse = this.form.value;
      console.log('this.nurse: ', this.nurse);
      this.nurseService.update(this.nurse).subscribe(res => {
        this.result.emit({ message: 'Dados atualizados com sucesso', data: res });
        console.log('res atualizados : ', res);
        this.form = null;
        this.nurse = null;
      }, (error) => {
        this.result.emit({ message: 'Erro ao atualizar dados', data: error });
      });
    } else {
      var _nurse = new CreateNurse(this.form.value.name, this.form.value.cpf, this.form.value.coren,
        this.form.value.dateBirth, this.nurse.hospitalId);
      console.log('_nurse: ', _nurse);
      this.nurseService.create(_nurse).subscribe(res => {
        this.result.emit({ message: 'Enfermeiro Cadastrado com sucesso', data: res });
        this.form = null;
        this.nurse = null;
      }, (error) => {
        this.result.emit({ message: 'Erro ao salvar dados', data: error });
      });
    }
  }
}
