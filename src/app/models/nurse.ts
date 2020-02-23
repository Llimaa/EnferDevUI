import { IBaseEntity } from './base-entity';
export class Nurse implements IBaseEntity {
  constructor(
    public id?: string,
    public name?: string,
    public cpf?: string,
    public coren?: string,
    public dateBirth?: string,
    public hospitalId?: string,
    public nameHospital?: string,
    public active?: boolean,
    public activeString?: string,
  ) { }
}

export class CreateNurse {
  constructor(
    public name?: string,
    public cpf?: string,
    public coren?: string,
    public dateBirth?: string,
    public hospitalId?: string,
  ) { }
}
