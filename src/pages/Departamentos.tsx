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
              <List.Accordion title={item.label} id={item.id} style={{ backgroundColor: "lightgrey" }}>
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
        id: 1, label: "Coolers",
        opcoes: [
          { id: 1, label: "Acessórios para Cooler" },
          { id: 2, label: "Air Cooler" },
          { id: 3, label: "Almofada Térmica" },
          { id: 4, label: "FAN" },
          { id: 5, label: "Pasta Térmica" },
          { id: 6, label: "Water Cooler" },
        ]
      },
      {
        id: 2, label: "Disco Rígidos(HD)",
        opcoes: [
          { id: 1, label: "Acessórios" },
          { id: 2, label: "Corporativo" },
          { id: 3, label: "Gamer" },
          { id: 4, label: "Pessoal" },
        ]
      },
      {
        id: 3, label: "Drives",
        opcoes: [
          { id: 1, label: "Leitor/Gravador" },
        ]
      },
      {
        id: 4, label: "Fontes",
        opcoes: [
          { id: 1, label: "Acessórios" },
          { id: 2, label: "Fonte 200W" },
          { id: 3, label: "Fonte 230W" },
          { id: 4, label: "Fonte 300W" },
          { id: 5, label: "Fonte 350W" },
          { id: 6, label: "Fonte 400W" },
          { id: 7, label: "Fonte 450W" },
          { id: 8, label: "Fonte 500W" },
          { id: 9, label: "Fonte 550W" },
          { id: 10, label: "Fonte 600W" },
          { id: 11, label: "Fonte 650W" },
          { id: 12, label: "Fonte 700W" },
          { id: 13, label: "Fonte 750W" },
          { id: 14, label: "Fonte 800W" },
          { id: 15, label: "Fonte 850W" },
          { id: 16, label: "Fonte 900W" },
          { id: 17, label: "Fonte 1000W" },
          { id: 18, label: "Fonte 1050W" },
          { id: 19, label: "Fonte 1200W" },
          { id: 20, label: "Fonte 1300W" },
          { id: 21, label: "Fonte 1600W" },
        ]
      },
      {
        id: 5, label: "Kit Hardware",
        opcoes: [
          { id: 1, label: "Kit Upgrade" },
        ]
      },
      {
        id: 6, label: "Memória RAM",
        opcoes: [
          { id: 1, label: "DDR 2" },
          { id: 2, label: "DDR 3" },
          { id: 3, label: "DDR 4" },
          { id: 4, label: "DDR 5" },
          { id: 5, label: "Optane" },
        ]
      },
      {
        id: 7, label: "Placa de vídeo(VGA)",
        opcoes: [
          { id: 1, label: "Acessórios" },
          { id: 2, label: "Placa de vídeo AMD" },
          { id: 3, label: "Placa de vídeo Intel" },
          { id: 4, label: "Placa de vídeo Nvidia" },
        ]
      },
      {
        id: 8, label: "Placas Interfaces",
        opcoes: [
          { id: 1, label: "Placa de Som" },
        ]
      },
      {
        id: 9, label: "Placas-mãe",
        opcoes: [
          { id: 1, label: "Placas-mãe AMD" },
          { id: 2, label: "Placas-mãe Intel" },
        ]
      },
      {
        id: 10, label: "Processadores",
        opcoes: [
          { id: 1, label: "Processador AMD" },
          { id: 2, label: "Processador Intel" },
        ]
      },
      {
        id: 11, label: "SSD",
        opcoes: [
          { id: 1, label: "Acessórios" },
          { id: 2, label: "SSD Externo / Portátil" },
          { id: 3, label: "SSD M.2 SATA" },
          { id: 4, label: "SSD PCIe NVMe" },
          { id: 5, label: "SSD PCIe NVMe U.2 Enterprise" },
          { id: 6, label: "SSD SATA" },
        ]
      },
    ],
  },
  {
    id: 2, label: "Periféricos",
    opcoes: [
      {
        id: 1, label: "Cabos e Adaptadores",
        opcoes: [
          { id: 1, label: "Adaptadores Áudio" },
          { id: 2, label: "Adaptadores Bluetooth" },
          { id: 3, label: "Adaptadores DisplayPort" },
          { id: 4, label: "Adaptadores DVI" },
          { id: 5, label: "Adaptadores Extensor" },
          { id: 6, label: "Adaptadores HDMI" },
          { id: 7, label: "Adaptadores Micro USB" },
          { id: 8, label: "Adaptadores Rede" },
          { id: 9, label: "Adaptadores SATA" },
          { id: 10, label: "Adaptadores USB" },
          { id: 11, label: "Adaptadores USB-C" },
          { id: 12, label: "Adaptadores VGA" },
          { id: 13, label: "Cabos Áudio" },
          { id: 14, label: "Cabos de Energia" },
          { id: 15, label: "Cabos Extensor" },
          { id: 16, label: "Cabos Fonte" },
          { id: 17, label: "Cabos Transferência de Dados" },
          { id: 18, label: "Cabos VGA" },
          { id: 19, label: "Cabos Vídeo" },
          { id: 20, label: "Emenda/Conector" },
          { id: 21, label: "Hubs" },
          { id: 22, label: "Organizador de Cabos" },
          { id: 23, label: "Splitter" },
        ]
      },
      {
        id: 2, label: "Caixa de Som",
        opcoes: [
          { id: 1, label: "Caixa de Som Gamer" },
          { id: 2, label: "Caixa de Som Pc" },
          { id: 3, label: "Soundbar Gamer" },
          { id: 4, label: "Subwoofer Gamer" },
        ]
      },
      {
        id: 3, label: "Carteira de Criptomoedas",
        opcoes: [
          { id: 1, label: "Digital" },
        ]
      },
      {
        id: 4, label: "Fone de Ouvido Gamer",
        opcoes: [
          { id: 1, label: "Acessórios para Fone Gamer" },
          { id: 2, label: "Com Fio" },
          { id: 3, label: "Sem Fio" },
        ]
      },
      {
        id: 5, label: "Gabinetes",
        opcoes: [
          { id: 1, label: "Acessórios para Gabinetes" },
          { id: 2, label: "Gabinete Full Tower" },
          { id: 3, label: "Gabinete Mid Tower" },
          { id: 4, label: "Gabinete Mini Tower" },
        ]
      },
      {
        id: 6, label: "Headset Gamer",
        opcoes: [
          { id: 1, label: "Acessórios para Headset Gamer" },
          { id: 2, label: "Com Fio" },
          { id: 3, label: "Sem Fio" },
        ]
      },
      {
        id: 7, label: "Headsets",
        opcoes: [
          { id: 1, label: "Com Fio" },
          { id: 2, label: "Sem Fio" },
        ]
      },
      {
        id: 8, label: "Kit Gamer",
        opcoes: [
          { id: 1, label: "Mouse + Mousepad" },
          { id: 2, label: "Mouse + Mousepad + Teclado + Headset" },
          { id: 3, label: "Mouse + Teclado" },
          { id: 4, label: "Mouse + Teclado + Headset" },
          { id: 5, label: "Teclado + Mouse + Mousepad" },
        ]
      },
      {
        id: 9, label: "Mesa Digitalizadora",
        opcoes: [
          { id: 1, label: "Acessórios para Mesa Digitalizadora" },
          { id: 2, label: "Display" },
          { id: 3, label: "Mesa" },
        ]
      },
      {
        id: 10, label: "Mouse Gamer",
        opcoes: [
          { id: 1, label: "Acessórios para Mouse Gamer" },
          { id: 2, label: "Com Fio" },
          { id: 3, label: "Sem Fio" },
        ]
      },
      {
        id: 11, label: "Mouse Pad",
        opcoes: [
          { id: 1, label: "Mouse Pad Gamer" },
          { id: 2, label: "Mouse Pad Office" },
        ]
      },
      {
        id: 12, label: "Óculos",
        opcoes: [
          { id: 1, label: "Óculos de Proteção" },
          { id: 2, label: "Óculos de Realidade Virtual" },
          { id: 3, label: "Óculos de Sol" },
        ]
      },
      {
        id: 13, label: "Pen Drive",
        opcoes: [
          { id: 1, label: "Pen Drive 1 TB" },
          { id: 2, label: "Pen Drive 8 GB" },
          { id: 3, label: "Pen Drive 16 GB" },
          { id: 4, label: "Pen Drive 32 GB" },
          { id: 5, label: "Pen Drive 64 GB" },
          { id: 6, label: "Pen Drive 128 GB" },
          { id: 7, label: "Pen Drive 256 GB" },
          { id: 8, label: "Pen Drive 512 GB" },
        ]
      },
      {
        id: 14, label: "Streamer",
        opcoes: [
          { id: 1, label: "Acessórios Para Streamer" },
          { id: 2, label: "Áudio" },
          { id: 3, label: "Iluminação" },
          { id: 4, label: "Key Light" },
          { id: 5, label: "Kit Streamer" },
          { id: 6, label: "Microfone Streamer" },
          { id: 7, label: "Placa de Captura" },
          { id: 8, label: "Stream Deck" },
          { id: 9, label: "Tela Verde" },
        ]
      },
      {
        id: 15, label: "Suportes",
        opcoes: [
          { id: 1, label: "Apoio para Pés" },
          { id: 2, label: "Suporte de Braço" },
          { id: 3, label: "Suporte para CPU" },
          { id: 4, label: "Suporte para Headset" },
          { id: 5, label: "Suporte para Monitor" },
          { id: 6, label: "Suporte para Notebook" },
        ]
      },
      {
        id: 16, label: "Suprimentos",
        opcoes: [
          { id: 1, label: "Fitas" },
        ]
      },
      {
        id: 17, label: "Teclado e Mouse",
        opcoes: [
          { id: 1, label: "Ergonomia" },
          { id: 2, label: "Kit Office" },
          { id: 3, label: "Kit Teclado + Mouse" },
          { id: 4, label: "Mouse com Fio" },
          { id: 5, label: "Mouse sem Fio" },
          { id: 6, label: "Teclado com Fio" },
          { id: 7, label: "Teclado sem Fio" },
          { id: 8, label: "Trackpad" },
        ]
      },
      {
        id: 18, label: "Teclado Gamer",
        opcoes: [
          { id: 1, label: "Acessórios para Teclado Gamer" },
          { id: 2, label: "Com Fio" },
          { id: 3, label: "Sem Fio" },
        ]
      },
      {
        id: 19, label: "Webcam e Videoconferência",
        opcoes: [
          { id: 1, label: "Videoconferência" },
          { id: 2, label: "Webcam" },
        ]
      },
    ],
  },
  {
    id: 3, label: "Computadores",
    opcoes: [
      {
        id: 1, label: "Impressoras",
        opcoes: [
          { id: 1, label: "Impressora 3D" },
          { id: 2, label: "Impressora Fotográfica" },
          { id: 3, label: "Impressora Laser" },
          { id: 4, label: "Impressora Matricial" },
          { id: 5, label: "Impressora Multifuncional" },
          { id: 6, label: "Impressora Plotter" },
          { id: 7, label: "Impressora Tanque de Tinta" },
          { id: 8, label: "Máquina de Gravação" },
          { id: 9, label: "Suprimentos" },
        ]
      },
      {
        id: 2, label: "Monitores",
        opcoes: [
          { id: 1, label: "Monitor Gamer" },
          { id: 2, label: "Monitor Office" },
          { id: 3, label: "Monitor Portátil" },
          { id: 4, label: "Monitor Profissional" },
          { id: 5, label: "Monitor Smart" },
        ]
      },
      {
        id: 3, label: "Notebook/Macbook",
        opcoes: [
          { id: 1, label: "Notebooks" },
        ]
      },
      {
        id: 4, label: "Notebooks",
        opcoes: [
          { id: 1, label: "Acessórios para Notebook" },
          { id: 2, label: "Chromebook" },
          { id: 3, label: "Macbook" },
          { id: 4, label: "Notebook Acer" },
          { id: 5, label: "Notebook Asus" },
          { id: 6, label: "Notebook Dell" },
          { id: 7, label: "Notebook Gamer" },
          { id: 8, label: "Notebook Gigabyte" },
          { id: 9, label: "Notebook Lenovo" },
          { id: 10, label: "Notebook LG" },
          { id: 11, label: "Notebook MSI" },
          { id: 12, label: "Notebook Multilaser" },
          { id: 13, label: "Notebook Office" },
          { id: 14, label: "Notebook Positivo" },
          { id: 15, label: "Notebook Samsung" },
          { id: 16, label: "Notebook Vaio" },
        ]
      },
      {
        id: 5, label: "PC",
        opcoes: [
          { id: 1, label: "All In One" },
          { id: 2, label: "Computador AMD" },
          { id: 3, label: "Computador IMAC" },
          { id: 4, label: "Computador Intel" },
          { id: 5, label: "Computador Mac Mini" },
          { id: 6, label: "Computador Mini PC" },
          { id: 7, label: "PC Gamer" },
        ]
      },
      {
        id: 6, label: "Scanners",
        opcoes: [
          { id: 1, label: "Scanner 3D" },
          { id: 2, label: "Scanner de Mesa" },
          { id: 3, label: "Scanner Portátil" },
        ]
      },
      {
        id: 7, label: "Softwares",
        opcoes: [
          { id: 1, label: "Antivírus" },
          { id: 2, label: "Design Digital" },
          { id: 3, label: "Office" },
          { id: 4, label: "Windows" },
        ]
      },
    ],
  },
  {
    id: 4, label: "Games",
    opcoes: [
      {
        id: 1, label: "Acessórios Gamer",
        opcoes: [
          { id: 1, label: "Adaptadores Gamer" },
          { id: 2, label: "Cabos Gamer" },
          { id: 3, label: "Carregadores Gamer" },
          { id: 4, label: "Joystick" },
          { id: 5, label: "Óculos Gamer" },
          { id: 6, label: "Suportes Gamer" },
        ]
      },
      {
        id: 2, label: "Nintendo",
        opcoes: [
          { id: 1, label: "Acessórios Nintendo" },
          { id: 2, label: "Consoles Nintendo" },
          { id: 3, label: "Controles Nintendo" },
          { id: 4, label: "Jogos Nintendo" },
        ]
      },
      {
        id: 3, label: "Playstation",
        opcoes: [
          { id: 1, label: "Acessórios Playstation" },
          { id: 2, label: "Consoles Playstation" },
          { id: 3, label: "Controles Playstation" },
          { id: 4, label: "Jogos Playstation" },
        ]
      },
      {
        id: 4, label: "Portáteis",
        opcoes: [
          { id: 1, label: "ASUS" },
        ]
      },
      {
        id: 5, label: "Simuladores",
        opcoes: [
          { id: 1, label: "Cockpit" },
          { id: 2, label: "Farm Simulator" },
          { id: 3, label: "Fly Simulator" },
          { id: 4, label: "Racing" },
        ]
      },
      {
        id: 6, label: "Video Game Retrô",
        opcoes: [
          { id: 1, label: "Consoles" },
          { id: 2, label: "Controles" },
        ]
      },
      {
        id: 7, label: "Xbox",
        opcoes: [
          { id: 1, label: "Acessórios Xbox" },
          { id: 2, label: "Consoles Xbox" },
          { id: 3, label: "Controles Xbox" },
          { id: 4, label: "Jogos Xbox" },
        ]
      },
    ],
  },
  {
    id: 5, label: "Celular & Smartphone",
    opcoes: [
      {
        id: 1, label: "Acessórios para Smartphones",
        opcoes: [
          { id: 1, label: "Adaptadores" },
          { id: 2, label: "Capas e Películas" },
          { id: 3, label: "Carregadores" },
          { id: 4, label: "Chip" },
          { id: 5, label: "Estojo Esterilizador" },
          { id: 6, label: "Gamepad" },
          { id: 7, label: "Limpa Telas" },
          { id: 8, label: "Suporte" },
        ]
      },
      {
        id: 2, label: "Celular Básico",
        opcoes: [
          { id: 1, label: "Asus" },
          { id: 2, label: "iPhone" },
          { id: 3, label: "Kits" },
          { id: 4, label: "LG" },
          { id: 5, label: "Mais Marcas" },
          { id: 6, label: "Motorola" },
          { id: 7, label: "Realme" },
          { id: 8, label: "Samsung Galaxy" },
          { id: 9, label: "Smartphone Lenovo" },
          { id: 10, label: "Xiaomi" },
        ]
      },
      {
        id: 3, label: "Smartphones",
        opcoes: [
          { id: 1, label: "Asus" },
          { id: 2, label: "iPhone" },
          { id: 3, label: "Kits" },
          { id: 4, label: "LG" },
          { id: 5, label: "Mais Marcas" },
          { id: 6, label: "Motorola" },
          { id: 7, label: "Philco" },
          { id: 8, label: "Realme" },
          { id: 9, label: "Samsung Galaxy" },
          { id: 10, label: "Smartphone Lenovo" },
          { id: 11, label: "Xiaomi" },
        ]
      },
      {
        id: 4, label: "Wearables",
        opcoes: [
          { id: 1, label: "Acessórios para Wearables" },
          { id: 2, label: "Amazfit" },
          { id: 3, label: "Apple" },
          { id: 4, label: "Garmin" },
          { id: 5, label: "Huawei" },
          { id: 6, label: "Husky Sports" },
          { id: 7, label: "Kabum Smart" },
          { id: 8, label: "Mais Marcas" },
          { id: 9, label: "Motorola" },
          { id: 10, label: "Philco" },
          { id: 11, label: "Samsung Galaxy" },
          { id: 12, label: "TCL" },
          { id: 13, label: "Xiaomi" },
        ]
      },
    ],
  },
  {
    id: 6, label: "TV",
    opcoes: [
      {
        id: 1, label: "Acessórios para TVs",
        opcoes: [
          { id: 1, label: "Adaptadores" },
          { id: 2, label: "Antenas para TV" },
          { id: 3, label: "Controle Remoto" },
          { id: 4, label: "Conversor Digital" },
          { id: 5, label: "Moldura" },
          { id: 6, label: "Suportes" },
        ]
      },
      {
        id: 2, label: "Projetores",
        opcoes: [
          { id: 1, label: "Projetor Smart" },
        ]
      },
      {
        id: 3, label: "Smart TV",
        opcoes: [
          { id: 1, label: "24 Polegadas" },
          { id: 2, label: "32 Polegadas" },
          { id: 3, label: "39 Polegadas" },
          { id: 4, label: "40 Polegadas" },
          { id: 5, label: "42 Polegadas" },
          { id: 6, label: "43 Polegadas" },
          { id: 7, label: "48 Polegadas" },
          { id: 8, label: "49 Polegadas" },
          { id: 9, label: "50 Polegadas" },
          { id: 10, label: "55 Polegadas" },
          { id: 11, label: "58 Polegadas" },
          { id: 12, label: "60 Polegadas" },
          { id: 13, label: "65 Polegadas" },
          { id: 14, label: "70 Polegadas" },
          { id: 15, label: "75 Polegadas" },
          { id: 16, label: "77 Polegadas" },
        ]
      },
      {
        id: 4, label: "Streaming",
        opcoes: [
          { id: 1, label: "Amazon Fire TV" },
          { id: 2, label: "Apple TV" },
          { id: 3, label: "Chromecast" },
          { id: 4, label: "Roku" },
          { id: 5, label: "TV Box" },
          { id: 6, label: "Xiaomi" },
        ]
      },
      {
        id: 5, label: "TV 4K",
        opcoes: [
          { id: 1, label: "32 Polegadas" },
          { id: 2, label: "43 Polegadas" },
          { id: 3, label: "48 Polegadas" },
          { id: 4, label: "50 Polegadas" },
          { id: 5, label: "55 Polegadas" },
          { id: 6, label: "58 Polegadas" },
          { id: 7, label: "60 Polegadas" },
          { id: 8, label: "65 Polegadas" },
          { id: 9, label: "70 Polegadas" },
          { id: 10, label: "75 Polegadas" },
          { id: 11, label: "77 Polegadas" },
          { id: 12, label: "82 Polegadas" },
          { id: 13, label: "85 Polegadas" },
          { id: 14, label: "98 Polegadas" },
        ]
      },
      {
        id: 6, label: "TV 8K",
        opcoes: [
          { id: 1, label: "55 Polegadas" },
          { id: 2, label: "65 Polegadas" },
          { id: 3, label: "75 Polegadas" },
          { id: 4, label: "85 Polegadas" },
        ]
      },
      {
        id: 7, label: "TV Led",
        opcoes: [
          { id: 1, label: "24 Polegadas" },
          { id: 2, label: "32 Polegadas" },
          { id: 3, label: "39 Polegadas" },
          { id: 4, label: "43 Polegadas" },
          { id: 5, label: "50 Polegadas" },
          { id: 6, label: "55 Polegadas" },
          { id: 7, label: "65 Polegadas" },
        ]
      },
    ],
  },
  {
    id: 7, label: "Audio",
    opcoes: [
      {
        id: 1, label: "Aparelho de Som",
        opcoes: [
          { id: 1, label: "Amplificadores" },
          { id: 2, label: "Mini System" },
        ]
      },
      {
        id: 2, label: "Assistente Virtual",
        opcoes: [
          { id: 1, label: "Amazon Alexa" },
          { id: 2, label: "Google Assistente" },
        ]
      },
      {
        id: 3, label: "Caixa de Som",
        opcoes: [
          { id: 1, label: "Acústica" },
          { id: 2, label: "Amplificada" },
          { id: 3, label: "Portátil" },
          { id: 4, label: "Torre" },
        ]
      },
      {
        id: 4, label: "Caixa de Som para PC",
        opcoes: [
          { id: 1, label: "Caixa de Som Gamer" },
          { id: 2, label: "Soundbar Gamer" },
          { id: 3, label: "Subwoofer Gamer" },
        ]
      },
      {
        id: 5, label: "DJ",
        opcoes: [
          { id: 1, label: "Controladora" },
          { id: 2, label: "Equipamentos para DJ" },
          { id: 3, label: "Mesa de Som" },
        ]
      },
      {
        id: 6, label: "DVD e Blue Ray",
        opcoes: [
          { id: 1, label: "DVD" },
        ]
      },
      {
        id: 7, label: "Fone de Ouvido",
        opcoes: [
          { id: 1, label: "Bluetooth" },
          { id: 2, label: "Esportivo" },
          { id: 3, label: "Fone de Ouvido com Fio" },
          { id: 4, label: "Headphone" },
          { id: 5, label: "True Wireless" },
        ]
      },
      {
        id: 8, label: "Home Theater e Soundbar",
        opcoes: [
          { id: 1, label: "Home Theater" },
          { id: 2, label: "Receiver" },
          { id: 3, label: "Soundbar" },
          { id: 4, label: "Subwoofer" },
        ]
      },
      {
        id: 9, label: "Microfone",
        opcoes: [
          { id: 1, label: "Compacto" },
          { id: 2, label: "Kit Estúdio" },
          { id: 3, label: "Lapela" },
          { id: 4, label: "Microfone Com Fio" },
          { id: 5, label: "Microfone Condensador" },
          { id: 6, label: "Microfone Dinâmico" },
          { id: 7, label: "Microfone Sem Fio" },
        ]
      },
      {
        id: 10, label: "Rádio",
        opcoes: [
          { id: 1, label: "Rádio Portátil" },
          { id: 2, label: "Rádio Relógio" },
        ]
      },
      {
        id: 11, label: "Toca-Discos e Vitrolas",
        opcoes: [
          { id: 1, label: "Profissionais" },
          { id: 2, label: "Toca-Discos" },
        ]
      },
    ],
  },
  {
    id: 8, label: "Projetores",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 9, label: "Espaço Gamer",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 10, label: "Escritório",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 11, label: "Tablets, iPads e E-readers",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 12, label: "Casa Inteligemte",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 13, label: "Gameras e Drones",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 14, label: "Energia",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 15, label: "Conectividade",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 16, label: "Geek",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 17, label: "Eletrodomésticos",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 18, label: "Eletroportáteis",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 19, label: "Ar e Ventilação",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 20, label: "Segurança",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 21, label: "Automação",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 22, label: "Telefonia Fixa",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 23, label: "Robótica",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 24, label: "Serviços Digitais",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 25, label: "Benefício",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 26, label: "Moda",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 27, label: "Ferramentas",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 28, label: "Cuidados Pessoais",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
  {
    id: 29, label: "Brinquedos",
    opcoes: [
      {
        id: 1, label: "Item",
        opcoes: [
          { id: 1, label: "Item" },
        ]
      },
    ],
  },
];
