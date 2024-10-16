import React, { useEffect, useState, createContext, useContext } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Tipagens para navegação
type AuthStackParamList = {
  SignIn: undefined;
};

type DrawerParamList = {
  Home: undefined;
};

type AuthContextType = {
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
};

// Criando o AuthContext com tipagem
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Tipagem dos componentes de navegação
const AuthStack = createStackNavigator<AuthStackParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

// Tela de login
const SignInScreen: React.FC = () => {
  const authContext = useContext(AuthContext);

  const handleSignIn = async () => {
    // Simula o recebimento de um token JWT após login bem-sucedido
    const token = 'jwt_token_falso';
    if (authContext) {
      await authContext.signIn(token);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Bem-vindo! Faça login</Text>
      <Button title="Login" onPress={handleSignIn} />
    </View>
  );
};

// Tela principal (após autenticação)
const HomeScreen: React.FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text>Tela Principal</Text>
      <Button
        title="Logout"
        onPress={() => {
          if (authContext) {
            authContext.signOut();
          }
        }}
      />
    </View>
  );
};

// Stack Navigator para as telas de login
const AuthStackScreen: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
  </AuthStack.Navigator>
);

// Drawer Navigator para as telas após login
const DrawerScreen: React.FC = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeScreen} />
  </Drawer.Navigator>
);

// Tipagem do estado de autenticação
type StateType = {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
};

// Componente principal do App
const App: React.FC = () => {
  const [state, setState] = useState<StateType>({
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  const authContext: AuthContextType = {
    signIn: async (token: string) => {
      await AsyncStorage.setItem('userToken', token);
      setState({
        ...state,
        isSignout: false,
        userToken: token,
        isLoading: false,
      });
    },
    signOut: async () => {
      await AsyncStorage.removeItem('userToken');
      setState({
        ...state,
        isSignout: true,
        userToken: null,
      });
    },
  };

  useEffect(() => {
    const checkToken = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        setState({
          ...state,
          userToken: userToken ? userToken : null,
          isLoading: false,
        });
      } catch (e) {
        setState({ ...state, isLoading: false });
      }
    };

    checkToken();
  }, []);

  if (state.isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken == null ? (
          <AuthStackScreen />
        ) : (
          <DrawerScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
