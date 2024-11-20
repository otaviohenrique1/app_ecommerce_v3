export interface FormularioProps {
  tipoFormulario: "fisico" | "juridico";
  navigation: any;
}

export interface FormTypesLogin {
  email: string;
  senha: string;
}

export interface FormTypesCadastroPessoaFisica extends DadosBasicos, Endereco {
  nome: string;
  cpf: string;
  genero: string;
  dataNascimento: string;
}

export interface FormTypesCadastroPessoaJuridica extends DadosBasicos, Endereco {
  nomeFantasia: string;
  razaoSocial: string;
  cnpj: string;
  informacoesTributarias: string;
  incricaoEstadual: string;
  dataAberturaEmpresa: string;
}

interface DadosBasicos {
  email: string;
  senha: string;
  confimarSenha: string;
  celular: string;
  telefone: string;
}

interface Endereco {
  cep: string;
  endereco: string;
  bairro: string;
  numero: string;
  cidade: string;
  estado: string;
  complemento: string;
}