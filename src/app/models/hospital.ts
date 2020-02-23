import { IBaseEntity } from "./base-entity";

export class Hospital implements IBaseEntity {
  constructor(
    public id?: string,
    public name?: string,
    public cnpj?: string,
    public street?: string,
    public number?: string,
    public city?: string,
    public state?: string,
    public country?: string,
    public zipCode?: string,
    public active?: boolean,

    public activeString?: string,
  ) { }
}

export class createHospital {
  constructor(
    public name?: string,
    public cnpj?: string,
    public street?: string,
    public number?: string,
    public city?: string,
    public state?: string,
    public country?: string,
    public zipCode?: string,
  ) { }
}

