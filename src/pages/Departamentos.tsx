import { Appbar, List, Text } from "react-native-paper";
import { Container } from '../components/Container';
import { BottonTabsRootStackParamList } from './routes';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { FlatList, StyleSheet, View } from 'react-native';
import { Main } from '../components/Main';

type Props = BottomTabScreenProps<BottonTabsRootStackParamList, "Departamentos">;

export default function Departamentos({ navigation }: Props) {
  return (
    <Container>
      <Appbar.Header style={{ backgroundColor: "cadetblue" }}>
        <Appbar.Content title="Departamentos" />
      </Appbar.Header>
      <Main>
        <FlatList
          data={departamentos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <List.Accordion title={item.label} id={item.id}>
                <FlatList
                  data={item.opcoes}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => {
                    return (
                      <List.Accordion title={item.label} id={item.id}>
                        <FlatList
                          data={item.opcoes}
                          keyExtractor={(item) => item.id.toString()}
                          renderItem={({ item }) => {
                            return (
                              <List.Item title={item.label} />
                            );
                          }}
                        />
                      </List.Accordion>
                    );
                  }}
                />
              </List.Accordion>
            );
          }}
          style={styles.lista}
        />
      </Main>
    </Container>
  );
}

const styles = StyleSheet.create({
  lista: {
    marginBottom: 100,
  }
});

const departamentos = [
  {
    id: 1, label: "Hardware",
    opcoes: [
      {
        id: 1, label: "Collers",
        opcoes: [
          { id: 1, label: "Item 1" },
        ]
      },
      {
        id: 2, label: "Disco Rígidos(HD)",
        opcoes: [
          { id: 1, label: "Item 1" },
        ]
      },
      {
        id: 3, label: "Drives",
        opcoes: [
          { id: 1, label: "Item 1" },
        ]
      },
      {
        id: 4, label: "Fontes",
        opcoes: [
          { id: 1, label: "Item 1" },
        ]
      },
      {
        id: 5, label: "Kit Hardware",
        opcoes: [
          { id: 1, label: "Item 1" },
        ]
      },
      {
        id: 6, label: "Memória RAM",
        opcoes: [
          { id: 1, label: "Item 1" },
        ]
      },
      {
        id: 7, label: "Placa de vídeo(VGA)",
        opcoes: [
          { id: 1, label: "Item 1" },
        ]
      },
      {
        id: 8, label: "Placas Interfaces",
        opcoes: [
          { id: 1, label: "Item 1" },
        ]
      },
      {
        id: 9, label: "Placas-mãe",
        opcoes: [
          { id: 1, label: "Item 1" },
        ]
      },
      {
        id: 10, label: "Processadores",
        opcoes: [
          { id: 1, label: "Intel" },
          { id: 2, label: "AMD" },
        ]
      },
      {
        id: 11, label: "SSD",
        opcoes: [
          { id: 1, label: "Item 1" },
        ]
      },
    ],
  },
  {
    id: 2, label: "Periféricos",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 3, label: "Computadores",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 4, label: "Games",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 5, label: "Celular & Smartphone",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 6, label: "TV",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 7, label: "Audio",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 8, label: "Projetores",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 9, label: "Espaço Gamer",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 10, label: "Escritório",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 11, label: "Tablets, iPads e E-readers",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 12, label: "Casa Inteligemte",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 13, label: "Gameras e Drones",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 14, label: "Energia",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 15, label: "Conectividade",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 16, label: "Geek",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 17, label: "Eletrodomésticos",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 18, label: "Eletroportáteis",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 19, label: "Ar e Ventilação",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 20, label: "Segurança",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 21, label: "Automação",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 22, label: "Telefonia Fixa",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 23, label: "Robótica",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 24, label: "Serviços Digitais",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 25, label: "Benefício",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 26, label: "Moda",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 27, label: "Ferramentas",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 28, label: "Cuidados Pessoais",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
  {
    id: 29, label: "Brinquedos",
    opcoes: [
      {
        id: 1, label: "Item 1",
        opcoes: [
          { id: 1, label: "Item 1" }
        ]
      },
    ],
  },
];
