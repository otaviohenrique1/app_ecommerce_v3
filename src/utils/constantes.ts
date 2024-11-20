import { FormTypesLogin } from "../types/types";
import * as yup from "yup";

export const valoresIniciaisLogin: FormTypesLogin = {
  email: "",
  senha: "",
}

const nome = yup.string().required("Campo vazio");
const email = yup.string().required("Campo vazio").email("Email inválido");
const senha = yup.string().required("Campo vazio");
const confimarSenha = yup.string().required("Campo vazio");
const cpf = yup.string().required("Campo vazio");
const genero = yup.string().required("Campo vazio");
const dataNascimento = yup.string().datetime("Data inválida").required("Campo vazio");
const nomeFantasia = yup.string().required("Campo vazio");
const razaoSocial = yup.string().required("Campo vazio");
const cnpj = yup.number().required("Campo vazio");
const informacoesTributarias = yup.string().required("Campo vazio");
const incricaoEstadual = yup.string().required("Campo vazio");
const dataAberturaEmpresa = yup.string().datetime("Data inválida").required("Campo vazio");
const celular = yup.number().required("Campo vazio");
const telefone = yup.number().required("Campo vazio");
const cep = yup.number().required("Campo vazio");
const endereco = yup.string().required("Campo vazio");
const numero = yup.number().required("Campo vazio");
const cidade = yup.string().required("Campo vazio");
const estado = yup.string().required("Campo vazio");
const complemento = yup.string().required("Campo vazio");

export const schemaLogin = yup.object().shape({
  email, senha,
});

export const schemaCadastroPessoaFisica = yup.object().shape({
  nome, cpf, email, senha, confimarSenha, genero, dataNascimento, celular, telefone, cep, endereco, numero, cidade, estado, complemento
});

export const schemaCadastroPessoaJuridica = yup.object().shape({
  nomeFantasia, razaoSocial, cnpj, email, senha, confimarSenha, informacoesTributarias, incricaoEstadual, dataAberturaEmpresa, celular, telefone, cep, endereco, numero, cidade, estado, complemento
});

