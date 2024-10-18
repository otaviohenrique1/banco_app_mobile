import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Conta from './pages/Conta';
import MeusCartoes from './pages/MeusCartoes';
import Cartao from './pages/Cartao';
import Perfil from './pages/Perfil';
import { useAuth, AuthProvider } from './context/autenticacao';
import { useContext } from 'react';
import UsuarioContext from './context/usuario';
import React from 'react';

export type NativeStackRootStaticParamList = {
  Login: undefined;
  Cadastro: undefined;
  HomePage: undefined;
  Conta: undefined;
  MeusCartoes: undefined;
  Cartao: {
    id: string,
  };
  Perfil: undefined;
}

const Stack = createNativeStackNavigator<NativeStackRootStaticParamList>();

export function AppRoutes() {
  const { isSignedIn, token } = useAuth();
  const { usuario, setUsuario } = useContext(UsuarioContext);

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{
          contentStyle: { backgroundColor: "white", },
          headerShown: false,
        }}>
          {/* {(isSignedIn && token !== null) ? (
            <Stack.Group> */}
              <Stack.Screen name="HomePage" component={HomePage} />
              <Stack.Screen name="Conta" component={Conta} />
              <Stack.Screen name="MeusCartoes" component={MeusCartoes} />
              <Stack.Screen name="Cartao" component={Cartao} />
              <Stack.Screen name="Perfil" component={Perfil} />
            {/* </Stack.Group>
          ) : (
            <Stack.Group> */}
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Cadastro" component={Cadastro} />
            {/* </Stack.Group>
          )} */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
