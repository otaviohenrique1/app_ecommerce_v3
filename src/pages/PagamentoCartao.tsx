import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackRootStackParamList } from "./routes";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Appbar, Button, HelperText, IconButton, MD3Colors, Text, TextInput } from "react-native-paper";
import { StyleSheet, View, ScrollView } from "react-native";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPaginaCartaoCredito, valoresIniciaisPaginaCartaoCredito } from "../utils/constantes";
import { CampoTexto } from "../components/CampoTexto";
import MaskInput from "react-native-mask-input";

type Props = NativeStackScreenProps<NativeStackRootStackParamList, "PagamentoCartao">;

export function PagamentoCartao({ navigation }: Props) {
  const [showFront, setShowFront] = useState(true);
  const [nome, setNome] = useState<string>("Nome do cliente");
  const [numero, setNumero] = useState<string>("xxxx xxxx xxxx xxxx");
  const [cvv, setCVV] = useState<string>("xxx");
  const [validade, setValidade] = useState<string>("xx/xx");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaPaginaCartaoCredito),
    defaultValues: valoresIniciaisPaginaCartaoCredito,
  });

  const flipCard = () => {
    setShowFront(!showFront);
  };

  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        <Appbar.Content title="PagamentoCartao" />
      </Appbar.Header>
      <ScrollView>
        <Main>
          <View style={styles.container}>
            {showFront
              ? <FrontCard nome={nome} />
              : <BackCard
                numero={numero}
                validade={validade}
                cvv={cvv}
              />
            }
            <IconButton
              icon="credit-card-sync"
              size={30}
              onPress={flipCard}
            />
          </View>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Nome"
                onBlur={onBlur}
                onFocus={() => { setShowFront(true) }}
                onChangeText={(text) => {
                  setNome(value)
                  onChange(text);
                }}
                value={value}
                style={styles.campoTexto}
              />
            )}
            name="nomeCartao"
          />
          {errors.nomeCartao && <HelperText type="error">Campo vazio</HelperText>}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Numero"
                onBlur={onBlur}
                onFocus={() => { setShowFront(false) }}
                onChangeText={(text) => {
                  setNumero(value)
                  onChange(text);
                }}
                value={value}
                style={styles.campoTexto}
                render={(props) => (
                  <MaskInput
                    {...props}
                    mask={[/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
                  />
                )}
              />
            )}
            name="numeroCartao"
          />
          {errors.numeroCartao && <HelperText type="error">Campo vazio</HelperText>}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="CVV"
                onBlur={onBlur}
                onFocus={() => { setShowFront(false) }}
                onChangeText={(text) => {
                  setCVV(value)
                  onChange(text);
                }}
                value={value}
                style={styles.campoTexto}
                render={(props) => (
                  <MaskInput
                    {...props}
                    mask={[/\d/, /\d/, /\d/]}
                  />
                )}
              />
            )}
            name="cvvCartao"
          />
          {errors.cvvCartao && <HelperText type="error">Campo vazio</HelperText>}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label="Validade"
                onFocus={() => { setShowFront(false) }}
                onBlur={onBlur}
                onChangeText={(text) => {
                  setValidade(value)
                  onChange(text);
                }}
                value={value}
                style={styles.campoTexto}
                render={(props) => (
                  <MaskInput
                    {...props}
                    mask={[/\d/, /\d/, '/', /\d/, /\d/]}
                  />
                )}
              />
            )}
            name="validadeCartao"
          />
          {errors.validadeCartao && <HelperText type="error">Campo vazio</HelperText>}
          <Button
            mode="contained"
            onPress={handleSubmit((values) => {
              navigation.push("HomePage")
            })}
            style={styles.botao}
          >Proximo</Button>
        </Main>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  campoTexto: {
    margin: 10,
  },
  botao: {
    margin: 10,
  }
});

interface FrontCardProps {
  nome: string;
}

function FrontCard(props: FrontCardProps) {
  const { nome } = props;
  return (
    <View style={stylesFrontCard.card}>
      <Text style={stylesFrontCard.text}>{nome}</Text>
    </View>
  );
};

const stylesFrontCard = StyleSheet.create({
  card: {
    width: 350,
    height: 200,
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
  },
  text: {
    fontSize: 24,
    color: '#fff',
    position: "absolute",
    bottom: 25,
    right: 25,
    textAlign: "center",
  },
});

interface BackCardProps {
  numero: string;
  validade: string;
  cvv: string;
}

function BackCard(props: BackCardProps) {
  const { numero, cvv, validade } = props;
  return (
    <View style={stylesBackCard.card}>
      <View style={{ width: 348, height: 40, backgroundColor: '#fff', marginTop: 20 }}></View>
      <View style={{ padding: 10 }}>
        <Text style={stylesBackCard.text}>{numero}</Text>
        <Text style={stylesBackCard.text}>{cvv}</Text>
        <Text style={stylesBackCard.text}>{validade}</Text>
      </View>
    </View>
  );
};

const stylesBackCard = StyleSheet.create({
  card: {
    width: 350,
    height: 200,
    backgroundColor: '#FF5722',
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});
