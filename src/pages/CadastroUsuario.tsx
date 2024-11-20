import { Appbar } from "react-native-paper";
import { Container } from '../components/Container';
import { NativeStackRootStackParamList } from './routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, View } from 'react-native';
import { Main } from '../components/Main';
import { useState } from "react";
import React from "react";
import { CampoRadioButton } from "../components/CampoRadioButton";
import { FormularioPessoaFisica } from "../components/FormularioPessoaFisica";
import { FormularioPessoaJuridica } from "../components/FormularioPessoaJuridica";

type Props = NativeStackScreenProps<NativeStackRootStackParamList, "CadastroUsuario">;

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
            <CampoRadioButton
              value="fisica"
              status={checked === 'fisica' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('fisica')}
              label="Pessoa Fisíca"
            />
            <CampoRadioButton
              value="juridica"
              status={checked === 'juridica' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('juridica')}
              label="Pessoa Jurídica"
            />
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
