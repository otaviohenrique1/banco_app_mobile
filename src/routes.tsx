import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
