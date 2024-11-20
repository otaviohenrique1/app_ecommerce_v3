import { Appbar, Button, RadioButton, Text } from "react-native-paper";
import { Container } from '../components/Container';
import { RootStackParamList } from './routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleProp, StyleSheet, TextStyle, View } from 'react-native';
import { Main } from '../components/Main';
import Constants from 'expo-constants';
import { Control, DefaultValues, FieldError, FieldPath, FieldValues, Path, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCadastroPessoaFisica, schemaCadastroPessoaJuridica, schemaLogin, valoresIniciaisCadastroPessoaFisica, valoresIniciaisCadastroPessoaJuridica } from "../utils/constantes";
import { CampoTexto } from "../components/CampoTexto";
import { useState } from "react";
import { TextInputLabelProp } from "react-native-paper/lib/typescript/components/TextInput/types";
import React from "react";
import * as Yup from "yup";

type Props = NativeStackScreenProps<RootStackParamList, "CadastroUsuario">;

export default function CadastroUsuario({ navigation }: Props) {
  const [checked, setChecked] = useState('fisica');

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver((checked === "fisica") ? schemaCadastroPessoaFisica : schemaCadastroPessoaJuridica),
    defaultValues: (checked === "fisica") ? valoresIniciaisCadastroPessoaFisica : valoresIniciaisCadastroPessoaJuridica,
  });

  const listaCadastroPessoaFisica = [
    { control: control, label: "Email", name: "email", errors: errors.email, style: styles.campoTexto },
  ];

  const listaCadastroPessoaJuridica = [
    { control: control, label: "Email", name: "email", errors: errors.email, style: styles.campoTexto },
  ];

  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "#fff" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
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
          <CampoTexto
            control={control}
            label="Nome"
            name="nome"
            errors={errors.nome}
            style={styles.campoTexto}
          />
        ) : (
          <CampoTexto
            control={control}
            label="Nome fantasia"
            name="nomeFantasia"
            errors={errors.nomeFantasia}
            style={styles.campoTexto}
          />
        )}
        <Button
          mode="contained"
          onPress={handleSubmit((values) => { })}
          style={styles.botao}
        >Salvar</Button>
        <Button
          mode="outlined"
          onPress={() => reset()}
          style={styles.botao}
        >Limpar</Button>
      </Main>
    </Container >
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
  }
});

type AsyncDefaultValues<TFieldValues> = (payload?: unknown) => Promise<TFieldValues>;

interface FormularioProps<T extends FieldValues, TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> {
  schema: Yup.ObjectSchema<TFieldValues> | ReturnType<typeof Yup.lazy<Yup.ObjectSchema<TFieldValues>>>;
  defaultValues: DefaultValues<TFieldValues> | AsyncDefaultValues<TFieldValues>;
  listaCampos: {
    id: number;
    control: Control<T, TName>;
    label: TextInputLabelProp;
    name: Path<T>;
    errors: FieldError | undefined;
    style?: StyleProp<TextStyle>;
  }[];
}

export function Formulario<T extends FieldValues>(props: FormularioProps<T>) {
  const { listaCampos, schema, defaultValues } = props;

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues,
  });

  return (
    <>
      {listaCampos.map((item) => {
        return (
          <CampoTexto
            key={item.id}
            control={item.control}
            label={item.label}
            name={item.name}
            errors={item.errors}
            style={item.style}
          />
        );
      })}
      <Button
        mode="contained"
        onPress={handleSubmit((values) => { })}
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
