import { Device } from "./Device.model";

export interface Company {
  id: string;
  name: string,
  type: CompanyType,
  typeValue: number,
  comment: string,
  address: {
    zipCode: string,
    street: string,
    number: number,
    district: string,
    city: string,
    state: string,
  }  
  contact: string,
  phone: string,
  user: string,
  email: string,
  createdAt: string,
  updatedAt: string,
  devices: Device[]
}

export enum CompanyType {
  CNPJ = "CNPJ",
  CPF = "CPF"
}