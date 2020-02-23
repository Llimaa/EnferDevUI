import { IBaseEntity } from './base-entity';
export class Address implements IBaseEntity {
  constructor(
    public id?: string,
    public street?: string,
    public number?: string,
    public city?: string,
    public state?: string,
    public country?: string,
    public zipcode?: string,
  ) { }
}
