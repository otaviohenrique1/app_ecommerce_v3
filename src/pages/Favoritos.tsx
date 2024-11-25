import { Appbar, Divider, IconButton, List, Text } from "react-native-paper";
import { Container } from '../components/Container';
import { BottonTabsRootStackParamList } from './routes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { FlatList, StyleSheet, View } from 'react-native';
import { Main } from '../components/Main';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { removerDosFavoritos } from "../redux/favoritosSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

type Props = BottomTabScreenProps<BottonTabsRootStackParamList, "Favoritos">;

export default function Favoritos({ navigation }: Props) {
  const favoritos = useSelector((state: RootState) => state.favoritos.data);
  const dispatch = useDispatch();

  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        <Appbar.Content title="Favoritos" />
      </Appbar.Header>
      <Main>
      <FlatList
          data={favoritos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const { id, nome, preco } = item;
            return (
              <View>
                <List.Item
                  left={(props) => <MaterialCommunityIcons {...props} name="expansion-card-variant" size={40} />}
                  title={nome}
                  description={
                    <Text>R$ {preco.toFixed(2).replace(".", ",")}</Text>
                  }
                  right={(props) => (
                    <IconButton
                      {...props}
                      icon="delete"
                      onPress={() => dispatch(removerDosFavoritos(id))}
                    />
                  )}
                />
                <Divider />
              </View>
            );
          }}
        />
      </Main>
    </Container>
  );
}

const styles = StyleSheet.create({
  botao: {
    marginBottom: 10,
  }
});
