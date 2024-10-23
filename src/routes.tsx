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
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerNavigationProp } from '@react-navigation/drawer';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { Button, Text } from 'react-native';

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
  DrawerTeste: undefined;
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
              <Stack.Screen name="DrawerTeste" component={DrawerTeste} />
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

type DrawerRootStaticParamList = {
  Teste: undefined;
  Login: undefined;
  Perfil: undefined;
};

const Drawer = createDrawerNavigator<DrawerRootStaticParamList>();

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Perfil"
        onPress={() => props.navigation.navigate('Perfil')}
      />
      <DrawerItem
        label="Sair"
        onPress={() => props.navigation.navigate('Login')}
      />
    </DrawerContentScrollView>
  );
};

const DrawerTeste: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Teste" component={Teste} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Perfil" component={Perfil} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

type TesteNavigationProp = DrawerNavigationProp<DrawerRootStaticParamList, "Teste">;

type Props = {
  navigation: TesteNavigationProp;
};

const Teste: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Teste Drawer</Text>
      <Button
        title="Sair"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};