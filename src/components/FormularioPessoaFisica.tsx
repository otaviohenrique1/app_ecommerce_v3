import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormularioProps } from "../types/types";
import { schemaCadastroPessoaFisica, valoresIniciaisCadastroPessoaFisica } from "../utils/constantes";
import { CampoTexto } from "./CampoTexto";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { CampoSelect } from "./CampoSelect";

export function FormularioPessoaFisica(props: FormularioProps) {
  const { navigation, tipoFormulario } = props;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaCadastroPessoaFisica),
    defaultValues: valoresIniciaisCadastroPessoaFisica,
  });

  useEffect(() => {
    if (tipoFormulario === "juridico") {
      reset();
    }
  }, []);

  return (
    <>
      <CampoTexto
        control={control}
        label="Nome"
        name="nome"
        errors={errors.nome}
        style={styles.campoTexto}
      />
      <CampoTexto
        control={control}
        label="CPF"
        name="cpf"
        errors={errors.cpf}
        style={styles.campoTexto}
        keyboardType="decimal-pad"
      />
      <CampoTexto
        control={control}
        label="Email"
        name="email"
        errors={errors.email}
        style={styles.campoTexto}
        keyboardType="email-address"
      />
      <CampoTexto
        control={control}
        label="Senha"
        name="senha"
        errors={errors.senha}
        style={styles.campoTexto}
        keyboardType="default"
        secureTextEntry
      />
      <CampoTexto
        control={control}
        label="Confimar Senha"
        name="confimarSenha"
        errors={errors.confimarSenha}
        style={styles.campoTexto}
        keyboardType="default"
        secureTextEntry
      />
      <CampoTexto
        control={control}
        label="Data de nascimento"
        name="dataNascimento"
        errors={errors.dataNascimento}
        style={styles.campoTexto}
        keyboardType="number-pad"
      />
      <CampoTexto
        control={control}
        label="Telefone"
        name="telefone"
        errors={errors.telefone}
        style={styles.campoTexto}
        keyboardType="decimal-pad"
      />
      <CampoTexto
        control={control}
        label="Celular"
        name="celular"
        errors={errors.celular}
        style={styles.campoTexto}
        keyboardType="decimal-pad"
      />
      <CampoSelect
        control={control}
        name="genero"
        label="Genero"
        errors={errors.genero}
        style={styles.picker}
        lista={[
          { label: "Homem", value: "H" },
          { label: "Mulher", value: "M" },
          { label: "Outros", value: "O" },
          { label: "Não especificado", value: "N" }
        ]}
      />
      <CampoTexto
        control={control}
        label="Endereço"
        name="endereco"
        errors={errors.endereco}
        style={styles.campoTexto}
      />
      <CampoTexto
        control={control}
        label="Numero"
        name="numero"
        errors={errors.numero}
        style={styles.campoTexto}
        keyboardType="decimal-pad"
      />
      <CampoTexto
        control={control}
        label="Bairro"
        name="bairro"
        errors={errors.bairro}
        style={styles.campoTexto}
      />
      <CampoTexto
        control={control}
        label="Cidade"
        name="cidade"
        errors={errors.cidade}
        style={styles.campoTexto}
      />
      <CampoSelect
        control={control}
        name="estado"
        label="Estado"
        errors={errors.estado}
        style={styles.picker}
        lista={[
          {label: "Acre", value: "AC"},
          {label: "Alagoas", value: "AL"},
          {label: "Amapá", value: "AP"},
          {label: "Amazonas", value: "AM"},
          {label: "Bahia", value: "BA"},
          {label: "Ceará", value: "CE"},
          {label: "Distrito Federal", value: "DF"},
          {label: "Espírito Santo", value: "ES"},
          {label: "Goiás", value: "GO"},
          {label: "Maranhão", value: "MA"},
          {label: "Mato Grosso", value: "MT"},
          {label: "Mato Grosso do Sul", value: "MS"},
          {label: "Minas Gerais", value: "MG"},
          {label: "Pará", value: "PA"},
          {label: "Paraíba", value: "PB"},
          {label: "Paraná", value: "PR"},
          {label: "Pernambuco", value: "PE"},
          {label: "Piauí", value: "PI"},
          {label: "Rio de Janeiro", value: "RJ"},
          {label: "Rio Grande do Norte", value: "RN"},
          {label: "Rio Grande do Sul", value: "RS"},
          {label: "Rondônia", value: "RO"},
          {label: "Roraima", value: "RR"},
          {label: "Santa Catarina", value: "SC"},
          {label: "São Paulo", value: "SP"},
          {label: "Sergipe", value: "SE"},
          {label: "Tocantins", value: "TO"},
        ]}
      />
      <CampoTexto
        control={control}
        label="Complemento"
        name="complemento"
        errors={errors.complemento}
        style={styles.campoTexto}
      />
      <Button
        mode="contained"
        onPress={handleSubmit((values) => {
          navigation.goBack();
        })}
        style={styles.botao}
      >Salvar</Button>
      <Button
        mode="outlined"
        onPress={() => reset()}
        style={styles.botao}
      >Limpar</Button>
    </>
  );
}

const styles = StyleSheet.create({
  campoTexto: {
    margin: 10,
  },
  botao: {
    margin: 10,
  },
  picker: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    borderColor: "black",
    backgroundColor: "#CBC6",
    margin: 10,
  },
});
