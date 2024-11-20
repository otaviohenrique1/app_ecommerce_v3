import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Login';
import CadastroUsuario from './CadastroUsuario';
import Carrinho from './Carrinho';
import Departamentos from './Departamentos';
import Favoritos from './Favoritos';
import Home from './Home';
import Perfil from './Perfil';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export type NativeStackRootStackParamList = {
  Login: undefined;
  HomePage: undefined;
  CadastroUsuario: undefined;
}

const NativeStack = createNativeStackNavigator<NativeStackRootStackParamList>();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator
        initialRouteName="CadastroUsuario"
        screenOptions={{ headerShown: false }}
      >
        <NativeStack.Screen name="Login" component={Login} />
        <NativeStack.Screen name="HomePage" component={AppRoutesBottonTabs} />
        <NativeStack.Screen name="CadastroUsuario" component={CadastroUsuario} />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}

export type BottonTabsRootStackParamList = {
  Home: undefined;
  Departamentos: undefined;
  Favoritos: undefined;
  Carrinho: undefined;
  Perfil: undefined;
}

const BottonTabsStack = createBottomTabNavigator<BottonTabsRootStackParamList>();

export function AppRoutesBottonTabs() {
  return (
    <BottonTabsStack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return <MaterialCommunityIcons name="home" size={size} color={color} />;
          } else if (route.name === "Departamentos") {
            return <MaterialCommunityIcons name="view-list" size={size} color={color} />;
          } else if (route.name === "Favoritos") {
            return <MaterialCommunityIcons name="heart" size={size} color={color} />;
          } else if (route.name === "Carrinho") {
            return <MaterialCommunityIcons name="cart" size={size} color={color} />;
          } else if (route.name === "Perfil") {
            return <MaterialCommunityIcons name="account" size={size} color={color} />;
          }
          return <MaterialCommunityIcons name="abacus" size={size} color={color} />;
        },
        tabBarLabelStyle: {
          fontSize: 15
        },
        tabBarStyle: {
          height: 60
        }
      })}
    >
      <BottonTabsStack.Screen name="Home" component={Home} />
      <BottonTabsStack.Screen name="Departamentos" component={Departamentos} />
      <BottonTabsStack.Screen name="Favoritos" component={Favoritos} />
      <BottonTabsStack.Screen name="Carrinho" component={Carrinho} />
      <BottonTabsStack.Screen name="Perfil" component={Perfil} />
    </BottonTabsStack.Navigator>
  );
}
