import { Appbar, Button, RadioButton, Text } from "react-native-paper";
import { Container } from '../components/Container';
import { RootStackParamList } from './routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Main } from '../components/Main';
import Constants from 'expo-constants';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCadastroPessoaFisica, schemaCadastroPessoaJuridica, valoresIniciaisCadastroPessoaFisica, valoresIniciaisCadastroPessoaJuridica } from "../utils/constantes";
import { CampoTexto } from "../components/CampoTexto";
import { useEffect, useState } from "react";
import React from "react";

type Props = NativeStackScreenProps<RootStackParamList, "CadastroUsuario">;

export default function CadastroUsuario({ navigation }: Props) {
  const [checked, setChecked] = useState('fisica');

  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "#fff" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <ScrollView>
        <Main>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton
                value="fisica"
                status={checked === 'fisica' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('fisica')}
              />
              <Text>Pessoa Fisíca</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton
                value="juridica"
                status={checked === 'juridica' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('juridica')}
              />
              <Text>Pessoa Jurídica</Text>
            </View>
          </View>
          {(checked === "fisica") ? (
            <FormularioPessoaFisica navigation={navigation} tipoFormulario="juridico" />
          ) : (
            <FormularioPessoaJuridica navigation={navigation} tipoFormulario="fisico" />
          )}
        </Main>
      </ScrollView >
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight
  },
  titulo: {
    textAlign: "center",
    marginVertical: 50
  },
  campoTexto: {
    margin: 10,
  },
  botao: {
    margin: 10,
  },
});

interface FormularioProps {
  tipoFormulario: "fisico" | "juridico";
  navigation: any;
}

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
      <CampoTexto control={control} label="Nome" name="nome" errors={errors.nome} style={styles.campoTexto} />
      <CampoTexto control={control} label="CPF" name="cpf" errors={errors.cpf} style={styles.campoTexto} />
      <CampoTexto control={control} label="Email" name="email" errors={errors.email} style={styles.campoTexto} />
      <CampoTexto control={control} label="Senha" name="senha" errors={errors.senha} style={styles.campoTexto} />
      <CampoTexto control={control} label="Confimar Senha" name="confimarSenha" errors={errors.confimarSenha} style={styles.campoTexto} />
      <CampoTexto control={control} label="Data de nascimento" name="dataNascimento" errors={errors.dataNascimento} style={styles.campoTexto} />
      <CampoTexto control={control} label="Telefone" name="telefone" errors={errors.telefone} style={styles.campoTexto} />
      <CampoTexto control={control} label="Celular" name="celular" errors={errors.celular} style={styles.campoTexto} />
      <CampoTexto control={control} label="Genero" name="genero" errors={errors.genero} style={styles.campoTexto} />
      <CampoTexto control={control} label="Endereço" name="endereco" errors={errors.endereco} style={styles.campoTexto} />
      <CampoTexto control={control} label="Numero" name="numero" errors={errors.numero} style={styles.campoTexto} />
      <CampoTexto control={control} label="Bairro" name="bairro" errors={errors.bairro} style={styles.campoTexto} />
      <CampoTexto control={control} label="Cidade" name="cidade" errors={errors.cidade} style={styles.campoTexto} />
      <CampoTexto control={control} label="Estado" name="estado" errors={errors.estado} style={styles.campoTexto} />
      <CampoTexto control={control} label="Complemento" name="complemento" errors={errors.complemento} style={styles.campoTexto} />
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

export function FormularioPessoaJuridica(props: FormularioProps) {
  const { navigation, tipoFormulario } = props;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaCadastroPessoaJuridica),
    defaultValues: valoresIniciaisCadastroPessoaJuridica,
  });

  useEffect(() => {
    if (tipoFormulario === "fisico") {
      reset();
    }
  }, []);

  return (
    <>
      <CampoTexto control={control} label="Nome Fantasia" name="nomeFantasia" errors={errors.nomeFantasia} style={styles.campoTexto} />
      <CampoTexto control={control} label="Razão social" name="razaoSocial" errors={errors.razaoSocial} style={styles.campoTexto} />
      <CampoTexto control={control} label="CPF" name="cnpj" errors={errors.cnpj} style={styles.campoTexto} />
      <CampoTexto control={control} label="Email" name="email" errors={errors.email} style={styles.campoTexto} />
      <CampoTexto control={control} label="Senha" name="senha" errors={errors.senha} style={styles.campoTexto} />
      <CampoTexto control={control} label="Confimar Senha" name="confimarSenha" errors={errors.confimarSenha} style={styles.campoTexto} />
      <CampoTexto control={control} label="Telefone" name="telefone" errors={errors.telefone} style={styles.campoTexto} />
      <CampoTexto control={control} label="Celular" name="celular" errors={errors.celular} style={styles.campoTexto} />
      <CampoTexto control={control} label="Data de abertura da empresa" name="dataAberturaEmpresa" errors={errors.dataAberturaEmpresa} style={styles.campoTexto} />
      <CampoTexto control={control} label="Incrição estadual" name="incricaoEstadual" errors={errors.incricaoEstadual} style={styles.campoTexto} />
      <CampoTexto control={control} label="Informações tributarias" name="informacoesTributarias" errors={errors.informacoesTributarias} style={styles.campoTexto} />
      <CampoTexto control={control} label="Endereço" name="endereco" errors={errors.endereco} style={styles.campoTexto} />
      <CampoTexto control={control} label="Numero" name="numero" errors={errors.numero} style={styles.campoTexto} />
      <CampoTexto control={control} label="Bairro" name="bairro" errors={errors.bairro} style={styles.campoTexto} />
      <CampoTexto control={control} label="Cidade" name="cidade" errors={errors.cidade} style={styles.campoTexto} />
      <CampoTexto control={control} label="Estado" name="estado" errors={errors.estado} style={styles.campoTexto} />
      <CampoTexto control={control} label="Complemento" name="complemento" errors={errors.complemento} style={styles.campoTexto} />
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
