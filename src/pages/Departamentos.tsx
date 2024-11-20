import { Appbar, Text } from "react-native-paper";
import { Container } from '../components/Container';
import { BottonTabsRootStackParamList } from './routes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { Main } from '../components/Main';

type Props = BottomTabScreenProps<BottonTabsRootStackParamList, "Departamentos">;

export default function Departamentos({ navigation }: Props) {
  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        <Appbar.Content title="Departamentos" />
      </Appbar.Header>
      <Main>
        <Text variant="headlineLarge">Departamentos</Text>
      </Main>
    </Container>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginBottom: 10,
  }
});
