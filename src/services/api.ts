import axios from 'axios';

export enum HTTPMethod{
  get,
  post,
  put,
  patch,
  delete
}

export enum Recurse{
  createCompany = 'companies',
  findAllCompanies = 'companies',
  createDevice = 'devices',
  findAllDevices = 'devices/find-all',
  removeDevice = 'devices',
  updateDevice = 'devices',
  findAllVehicles = 'vehicles',
  getMenusFromUser = 'menus'
}


const api = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
  })

export default api;
