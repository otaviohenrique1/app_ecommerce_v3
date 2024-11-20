import { Appbar, Text } from "react-native-paper";
import { Container } from '../components/Container';
import { BottonTabsRootStackParamList } from './routes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { Main } from '../components/Main';

type Props = BottomTabScreenProps<BottonTabsRootStackParamList, "Favoritos">;

export default function Favoritos({ navigation }: Props) {
  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        <Appbar.Content title="Favoritos" />
      </Appbar.Header>
      <Main>
        <Text variant="headlineLarge">Favoritos</Text>
      </Main>
    </Container>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginBottom: 10,
  }
});
