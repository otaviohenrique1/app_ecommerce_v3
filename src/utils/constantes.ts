import { FormTypesLogin } from "../types/types";
import * as yup from "yup";

export const valoresIniciaisLogin: FormTypesLogin = {
  email: "",
  senha: "",
}

export const schemaLogin = yup.object().shape({
  email: yup.string().required("Campo vazio").email("Email inválido"),
  senha: yup.string().required("Campo vazio"),
});