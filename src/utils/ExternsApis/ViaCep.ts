import axios from "axios"

interface ViaCepAddress {
  district: string;
  city: string;
  street: string;
  uf: string;
}

interface CepResult {
  status: number;
  address?: ViaCepAddress;
  error: boolean;
}

export default async function findCep (code: string): Promise<CepResult | undefined>{
  let cepResponse: CepResult | undefined = {
    error: true,
    status: 0,
  }
  const cep = code.replace('-','')
  if(cep.length === 8 && !cep.includes('_')){
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    if (response.data.error){
      cepResponse = {
        error: true,
        status: response.status,
      }
    }else if (response.data.cep){
      cepResponse = {
        status: response.status,
        error: false,
        address:{
          city: response.data.localidade,
          district: response.data.bairro,
          street: response.data.logradouro,
          uf: response.data.uf
        }
      }
    }else{
      cepResponse = undefined
    }
  }
  return cepResponse
}
