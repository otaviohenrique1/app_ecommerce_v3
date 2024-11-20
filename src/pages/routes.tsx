import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage';
import Login from './Login';
import CadastroUsuario from './CadastroUsuario';

export type RootStackParamList = {
  Login: undefined;
  HomePage: undefined;
  CadastroUsuario: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CadastroUsuario"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}