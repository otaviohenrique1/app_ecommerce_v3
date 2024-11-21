import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackRootStackParamList } from "./routes";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Appbar, Text } from "react-native-paper";
import { Button, StyleSheet, View } from "react-native";
import { useState } from "react";

type Props = NativeStackScreenProps<NativeStackRootStackParamList, "PagamentoCartao">;

export function PagamentoCartao({ navigation }: Props) {
  const [showFront, setShowFront] = useState(true);

  const flipCard = () => {
    setShowFront(!showFront);
  };

  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        <Appbar.Content title="PagamentoCartao" />
      </Appbar.Header>
      <Main>
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            {showFront ? <FrontCard /> : <BackCard />}
          </View>
          <Button title="Flip Card" onPress={flipCard} />
        </View>
      </Main>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: 200,
    height: 300,
  },
});

const FrontCard: React.FC = () => {
  return (
    <View style={stylesFrontCard.card}>
      <Text style={stylesFrontCard.text}>Front Side</Text>
    </View>
  );
};

const stylesFrontCard = StyleSheet.create({
  card: {
    width: 200,
    height: 300,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});

const BackCard: React.FC = () => {
  return (
    <View style={stylesBackCard.card}>
      <Text style={stylesBackCard.text}>Back Side</Text>
    </View>
  );
};
const stylesBackCard = StyleSheet.create({
  card: {
    width: 200,
    height: 300,
    backgroundColor: '#FF5722',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});