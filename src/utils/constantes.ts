import { FormTypesCadastroPessoaFisica, FormTypesCadastroPessoaJuridica, FormTypesLogin, FormTypesPaginaCartaoCredito } from "../types/types";
import * as yup from "yup";

export const valoresIniciaisLogin: FormTypesLogin = {
  email: "",
  senha: "",
}

export const valoresIniciaisPaginaCartaoCredito: FormTypesPaginaCartaoCredito = {
  nomeCartao: "",
  numeroCartao: "",
  cvvCartao: "",
  validadeCartao: ""
}

export const valoresIniciaisCadastroPessoaFisica: FormTypesCadastroPessoaFisica = {
  nome: "",
  cpf: "",
  genero: "",
  dataNascimento: "",
  email: "",
  senha: "",
  confimarSenha: "",
  celular: "",
  telefone: "",
  cep: "",
  endereco: "",
  numero: "",
  bairro: "",
  cidade: "",
  estado: "",
  complemento: ""
}

export const valoresIniciaisCadastroPessoaJuridica: FormTypesCadastroPessoaJuridica = {
  nomeFantasia: "",
  razaoSocial: "",
  cnpj: "",
  informacoesTributarias: "",
  incricaoEstadual: "",
  dataAberturaEmpresa: "",
  email: "",
  senha: "",
  confimarSenha: "",
  celular: "",
  telefone: "",
  cep: "",
  endereco: "",
  numero: "",
  bairro: "",
  cidade: "",
  estado: "",
  complemento: ""
}

const nome = yup.string().required("Campo vazio");
const email = yup.string().required("Campo vazio").email("Email inválido");
const senha = yup.string().required("Campo vazio");
const confimarSenha = yup.string().oneOf([yup.ref("senha"), ""], "Senhas diferentes").required("Campo vazio");
const cpf = yup.string().required("Campo vazio");
const genero = yup.string().required("Campo vazio");
const dataNascimento = yup.string().required("Campo vazio");
const nomeFantasia = yup.string().required("Campo vazio");
const razaoSocial = yup.string().required("Campo vazio");
const cnpj = yup.string().required("Campo vazio");
const informacoesTributarias = yup.string().required("Campo vazio");
const incricaoEstadual = yup.string().required("Campo vazio");
const dataAberturaEmpresa = yup.string().required("Campo vazio");
const celular = yup.string().required("Campo vazio");
const telefone = yup.string().required("Campo vazio");
const cep = yup.string().required("Campo vazio");
const endereco = yup.string().required("Campo vazio");
const numero = yup.string().required("Campo vazio");
const bairro = yup.string().required("Campo vazio");
const cidade = yup.string().required("Campo vazio");
const estado = yup.string().required("Campo vazio");
const complemento = yup.string().required("Campo vazio");
const nomeCartao = yup.string().required("Campo vazio");
const numeroCartao = yup.string().required("Campo vazio");
const cvvCartao = yup.string().required("Campo vazio");
const validadeCartao = yup.string().required("Campo vazio");

export const schemaPaginaCartaoCredito = yup.object().shape({
  nomeCartao, numeroCartao, cvvCartao, validadeCartao
});

export const schemaLogin = yup.object().shape({
  email, senha,
});

export const schemaCadastroPessoaFisica = yup.object().shape({
  nome, cpf, email, senha, confimarSenha, genero, dataNascimento, celular, telefone, cep, endereco, numero, bairro, cidade, estado, complemento
});

export const schemaCadastroPessoaJuridica = yup.object().shape({
  nomeFantasia, razaoSocial, cnpj, email, senha, confimarSenha, informacoesTributarias, incricaoEstadual, dataAberturaEmpresa, celular, telefone, cep, endereco, bairro, numero, cidade, estado, complemento
});

