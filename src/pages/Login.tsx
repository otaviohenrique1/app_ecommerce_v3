import { Button, Text } from "react-native-paper";
import { Container } from '../components/Container';
import { NativeStackRootStackParamList } from './routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { Main } from '../components/Main';
import Constants from 'expo-constants';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin, valoresIniciaisLogin } from "../utils/constantes";
import { CampoTexto } from "../components/CampoTexto";

type Props = NativeStackScreenProps<NativeStackRootStackParamList, "Login">;

export default function Login({ navigation }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: valoresIniciaisLogin,
  });

  return (
    <Container>
      <View style={styles.container}>
        <Main>
          <Text
            variant="displayLarge"
            style={styles.titulo}
          >X-Commerce</Text>
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
            errors={errors.email}
            secureTextEntry={true}
            keyboardType="default"
            style={styles.campoTexto}
          />
          <Button
            mode="text"
            onPress={() => {}}
            style={styles.botao}
          >Esqueci a senha</Button>
          <Button
            mode="contained"
            onPress={handleSubmit((values) => {
              navigation.push("HomePage")
            })}
            style={styles.botao}
          >Entrar</Button>
          <Button
            mode="text"
            onPress={() => navigation.push("CadastroUsuario")}
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
