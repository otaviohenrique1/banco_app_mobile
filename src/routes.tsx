import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import { Button, Text, View } from 'react-native';
import { Header } from './components/Header';
import Conta from './pages/Conta';
import MeusCartoes from './pages/MeusCartoes';
import CartaoFisico from './pages/CartaoFisico';
import CartaoVirtual from './pages/CartaoVirtual';
import CartaoTemporario from './pages/CartaoTemporario';
import Cartao from './pages/Cartao';

export type NativeStackRootStaticParamList = {
  Login: undefined;
  Cadastro: undefined;
  HomePage: undefined;
  Conta: undefined;
  MeusCartoes: undefined;
  CartaoFisico: undefined;
  CartaoVirtual: undefined;
  CartaoTemporario: undefined;
  Cartao: undefined;
}

const Stack = createNativeStackNavigator<NativeStackRootStaticParamList>();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cartao">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{
          header: () => (<Header/>)
          // headerBackground: () => (<Header/>)
          // headerStyle: { backgroundColor: "cadetblue" },
        }} />
        <Stack.Screen name="Conta" component={Conta} options={{ headerShown: false }} />
        <Stack.Screen name="MeusCartoes" component={MeusCartoes} options={{ headerShown: false }} />
        <Stack.Screen name="CartaoFisico" component={CartaoFisico} options={{ headerShown: false }} />
        <Stack.Screen name="CartaoVirtual" component={CartaoVirtual} options={{ headerShown: false }} />
        <Stack.Screen name="CartaoTemporario" component={CartaoTemporario} options={{ headerShown: false }} />
        <Stack.Screen name="Cartao" component={Cartao} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
