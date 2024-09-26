import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import { Text, View } from 'react-native';
import { Header } from './components/Header';
import Conta from './pages/Conta';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Conta">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{
          header: () => (<Header/>)
          // headerBackground: () => (<Header/>)
          // headerStyle: { backgroundColor: "cadetblue" },
        }} />
        <Stack.Screen name="Conta" component={Conta} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
