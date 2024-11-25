import { Appbar, Divider, IconButton, List, Text } from "react-native-paper";
import { Container } from '../components/Container';
import { BottonTabsRootStackParamList } from './routes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { FlatList, StyleSheet, View } from 'react-native';
import { Main } from '../components/Main';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type Props = BottomTabScreenProps<BottonTabsRootStackParamList, "Carrinho">;

export default function Carrinho({ navigation }: Props) {

  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        <Appbar.Content title="Carrinho" />
      </Appbar.Header>
      <Main>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const { nome, preco, quantidade } = item;
            return (
              <View>
                <List.Item
                  left={(props) => <MaterialCommunityIcons {...props} name="toolbox-outline" size={24} color="black" />}
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

const data = [
  {
    id: 1,
    nome: "Placa de video RTX 4070 12GB",
    preco: 3000,
    quantidade: 1,
  }
];