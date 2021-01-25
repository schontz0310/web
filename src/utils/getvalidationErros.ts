/* eslint-disable no-unused-expressions */
import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErros(err: ValidationError): Errors {
  const validationErros: Errors = {};

  err.inner.forEach(error => {
    error.path ? (validationErros[error.path] = error.message) : error;
  });

  return validationErros;
}
