import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hospital, createHospital } from 'src/app/models/hospital';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HospitalService } from 'src/app/services/hospital.service';
import { EventsService } from 'src/app/services/events.service';
import { EVENT_PASSED_HOSPITAL } from 'src/app/shared/events.constants';

@Component({
  selector: 'app-hospital-forms-component',
  templateUrl: './hospital-forms.component.html',
  styleUrls: ['./hospital-forms.component.css']
})
export class HospitalFormsComponent implements OnInit {

  @Output() result?= new EventEmitter<any>();

  public hospital: Hospital;
  public form: FormGroup;
  public eventData: any;

  constructor(
    private readonly hospitalService: HospitalService,
    private formBuilder: FormBuilder
  ) {
    this.hospital = new Hospital();
    this.eventData = EventsService.get(EVENT_PASSED_HOSPITAL).subscribe(res => {
      console.log('res: ', res);
      if (res !== undefined) {
        this.hospital = res;
        this.FormDate();
      }
      this.hospital = new Hospital();
    });
  }

  ngOnInit() {
    this.FormDate();
  }

  limparDados() {
    this.hospital = {};
  }

  ngOnDestroy() {
    this.eventData.unsubscribe();
    this.hospital = {};
  }

  public FormDate() {
    this.form = this.formBuilder.group({
      id: [this.hospital.id, Validators.compose([
      ])],
      name: [this.hospital.name, Validators.compose([
        Validators.minLength(3),
        Validators.required,
      ])],
      cnpj: [this.hospital.cnpj, Validators.compose([
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.required
      ])],
      country: [this.hospital.country, Validators.compose([
        Validators.required
      ])],
      state: [this.hospital.state, Validators.compose([
        Validators.required
      ])],
      city: [this.hospital.city, Validators.compose([
        Validators.required
      ])],
      zipCode: [this.hospital.zipCode, Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(8),
      ])],
      street: [this.hospital.street],
      number: [this.hospital.number]
    });
  }

  public async submit() {
    if (this.form.value.id) {
      this.hospital = this.form.value;
      this.hospitalService.update(this.hospital).subscribe(res => {
        this.result.emit({ message: 'Dados atualizados com sucesso', data: res });
        console.log('res atualizados : ', res);
        this.form = null;
        this.hospital = null;
      }, (error) => {
        this.result.emit({ message: 'Erro ao atualizar dados', data: error });
      });
    } else {
      console.log('this.form.value: ', this.form.value);
      var _hospital = new createHospital(this.form.value.name, this.form.value.cnpj,
        this.form.value.street, this.form.value.number, this.form.value.city,
        this.form.value.state, this.form.value.country, this.form.value.zipCode);

      this.hospitalService.create(_hospital).subscribe(res => {
        this.result.emit({ message: 'Hospital Cadastrado com sucesso', data: res });
        console.log('res Cadastrado : ', res);
        this.form = null;
        this.hospital = null;
      }, (error) => {
        this.result.emit({ message: 'Erro ao salvar dados', data: error });
      });
    }
  }
}
