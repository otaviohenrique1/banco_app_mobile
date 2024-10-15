import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import { Header } from './components/Header';
import Conta from './pages/Conta';
import MeusCartoes from './pages/MeusCartoes';
import Cartao from './pages/Cartao';

export type NativeStackRootStaticParamList = {
  Login: undefined;
  Cadastro: undefined;
  HomePage: undefined;
  Conta: undefined;
  MeusCartoes: undefined;
  Cartao: {
    id: string,
  };
}

const Stack = createNativeStackNavigator<NativeStackRootStaticParamList>();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        contentStyle: {
          backgroundColor: "white"
        }
      }}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{
          headerShown: false
          // header: () => (<Header />)
          // headerBackground: () => (<Header/>)
          // headerStyle: { backgroundColor: "cadetblue" },
        }} />
        <Stack.Screen name="Conta" component={Conta} options={{ headerShown: false }} />
        <Stack.Screen name="MeusCartoes" component={MeusCartoes} options={{ headerShown: false }} />
        <Stack.Screen name="Cartao" component={Cartao} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
