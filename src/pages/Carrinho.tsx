import { Appbar, Divider, IconButton, List, Text } from "react-native-paper";
import { Container } from '../components/Container';
import { BottonTabsRootStackParamList } from './routes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { FlatList, StyleSheet, View } from 'react-native';
import { Main } from '../components/Main';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { RootState } from "../redux/store";
import { removerDoCarrinho } from "../redux/carrinhoSlice";
import { useDispatch, useSelector } from "react-redux";

type Props = BottomTabScreenProps<BottonTabsRootStackParamList, "Carrinho">;

export default function Carrinho({ navigation }: Props) {
  const carrinho = useSelector((state: RootState) => state.carrinho.data);
  const dispatch = useDispatch();

  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        <Appbar.Content title="Carrinho" />
      </Appbar.Header>
      <Main>
        <FlatList
          data={carrinho}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const { id, nome, preco, quantidade } = item;
            return (
              <View>
                <List.Item
                  left={(props) => <MaterialCommunityIcons {...props} name="expansion-card-variant" size={40} />}
                  title={nome}
                  description={
                    <View>
                      <Text>R$ {preco.toFixed(2).replace(".", ",")}</Text>
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ marginRight: 10 }}>Quantidade:</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                          <IconButton
                            icon="plus"
                            size={20}
                            onPress={() => { }}
                          />
                          <Text>{quantidade}</Text>
                          <IconButton
                            icon="minus"
                            size={20}
                            onPress={() => { }}
                          />
                        </View>
                      </View>
                    </View>
                  }
                  right={(props) => (
                    <IconButton
                      {...props}
                      icon="delete"
                      onPress={() => dispatch(removerDoCarrinho(id))}
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
