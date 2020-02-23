import { Nurse } from './../models/nurse';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Api } from '../api/api';

@Injectable()
export class NurseService {

  private readonly resourceUrl = Api.API_URL + 'enfermeiros';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Nurse> {
    return this.http.get(this.resourceUrl);
  }

  public getAllByIdHospital(idHospital: string): Observable<Nurse> {
    return this.http.get(`${this.resourceUrl}/hospitais/${idHospital}`);
  }

  public getById(id: string): Observable<Nurse> {
    return this.http.get(`${this.resourceUrl}/${id}`);
  }

  public getByActive(): Observable<Nurse> {
    return this.http.get(`${this.resourceUrl}/ativos`);
  }

  public getByDesactive(): Observable<Nurse> {
    return this.http.get(`${this.resourceUrl}/desativos`);
  }

  public create(nurse: Nurse): Observable<Nurse> {
    return this.http.post(this.resourceUrl, nurse);
  }

  public update(nurse: Nurse): Observable<Nurse> {
    return this.http.put(this.resourceUrl, nurse);
  }

  public active(item: any): Observable<Nurse> {
    return this.http.put(`${this.resourceUrl}/ativar`, item);
  }

  public desactive(item: any): Observable<Nurse> {
    return this.http.put(`${this.resourceUrl}/desativar`, item);
  }
}
