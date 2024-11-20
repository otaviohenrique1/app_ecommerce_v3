import { Appbar, Button } from "react-native-paper";
import { Container } from '../components/Container';
import { RootStackParamList } from './routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { Main } from '../components/Main';
import Constants from 'expo-constants';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin, valoresIniciaisLogin } from "../utils/constantes";
import { CampoTexto } from "../components/CampoTexto";

type Props = NativeStackScreenProps<RootStackParamList, "CadastroUsuario">;

export default function CadastroUsuario({ navigation }: Props) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: valoresIniciaisLogin,
  });

  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "#fff" }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <View style={styles.container}>
        <Main>
          <CampoTexto
            control={control}
            label="Email"
            name="email"
            errors={errors.email}
            style={styles.campoTexto}
          />
          <CampoTexto
            control={control}
            label="Senha"
            name="senha"
            errors={errors.email}
            style={styles.campoTexto}
          />
          <Button
            mode="text"
            onPress={() => {}}
            style={styles.botao}
          >Esqueci a senha</Button>
          <Button
            mode="contained"
            onPress={handleSubmit((values) => {})}
            style={styles.botao}
          >Entrar</Button>
          <Button
            mode="text"
            onPress={() => {}}
            style={styles.botao}
          >Não tem uma conta? Cadastre-se gratuitamente</Button>
        </Main>
      </View>
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
