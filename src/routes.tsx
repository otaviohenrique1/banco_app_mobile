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

export type NativeStackRootStaticParamList = {
  Login: undefined;
  Cadastro: undefined;
  HomePage: undefined;
  Conta: undefined;
  MeusCartoes: undefined;
  CartaoFisico: undefined;
  CartaoVirtual: undefined;
  CartaoTemporario: undefined;
  ModalScreen: undefined;
}

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "ModalScreen">;

export function ModalScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

const Stack = createNativeStackNavigator<NativeStackRootStaticParamList>();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MeusCartoes">
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
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
