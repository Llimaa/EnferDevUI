import { Hospital } from './../models/hospital';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Api } from '../api/api';

@Injectable()
export class HospitalService {

  private readonly resourceUrl = Api.API_URL + 'hospitais';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Hospital> {
    return this.http.get(this.resourceUrl);
  }

  public getById(id: string): Observable<Hospital> {
    return this.http.get(`${this.resourceUrl}/${id}`);
  }

  public getByActive(): Observable<Hospital> {
    return this.http.get(`${this.resourceUrl}/ativos`);
  }

  public getByDesactive(): Observable<Hospital> {
    return this.http.get(`${this.resourceUrl}/desativos`);
  }

  public create(hospital: Hospital): Observable<Hospital> {
    return this.http.post(this.resourceUrl, hospital);
  }

  public update(hospital: Hospital): Observable<Hospital> {
    return this.http.put(this.resourceUrl, hospital);
  }

  public active(item: any): Observable<Hospital> {
    return this.http.put(`${this.resourceUrl}/ativar`, item);
  }

  public desactive(item: any): Observable<Hospital> {
    return this.http.put(`${this.resourceUrl}/desativar`, item);
  }
}
