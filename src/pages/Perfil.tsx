import { Appbar, Text } from "react-native-paper";
import { Container } from '../components/Container';
import { NativeStackRootStackParamList } from './routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Main } from '../components/Main';

type Props = NativeStackScreenProps<NativeStackRootStackParamList, "Perfil">;

export default function Perfil({ navigation }: Props) {
  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        <Appbar.Content title="Perfil" />
      </Appbar.Header>
      <Main>
        <Text variant="headlineLarge">Perfil</Text>
      </Main>
    </Container>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginBottom: 10,
  }
});
