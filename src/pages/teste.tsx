import React, { useEffect, useState, createContext, useContext } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

// Definindo o tipo do contexto de autenticação
type AuthContextType = {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  userToken: string | null;
};

// Criando o contexto de autenticação
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Definindo os tipos de navegação
type RootStackParamList = {
  SignIn: undefined;
  Home: undefined;
};

// Criando o Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// Tela de Login
const SignInScreen: React.FC = () => {
  const authContext = useContext(AuthContext);

  const handleSignIn = async () => {
    if (authContext) {
      await authContext.signIn('email@example.com', 'password');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Por favor, faça o login</Text>
      <Button title="Login" onPress={handleSignIn} />
    </View>
  );
};

// Tela principal (Home)
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

// Componente de navegação principal
const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userToken, setUserToken] = useState<string | null>(null);

  const authContext: AuthContextType = {
    signIn: async (email: string, password: string) => {
      // Simular a autenticação e receber um token
      const response = await axios.post('https://exemplo.com/api/login', { email, password });
      const token = response.data.token;

      // Armazenar o token no AsyncStorage
      await AsyncStorage.setItem('userToken', token);
      setUserToken(token);
    },
    signOut: async () => {
      // Remover o token do AsyncStorage
      await AsyncStorage.removeItem('userToken');
      setUserToken(null);
    },
    userToken,
  };

  useEffect(() => {
    // Verificar se há um token armazenado ao iniciar o app
    const checkToken = async () => {
      const storedToken = await AsyncStorage.getItem('userToken');
      setUserToken(storedToken);
      setIsLoading(false);
    };

    checkToken();
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {userToken == null ? (
            // Se o usuário não estiver autenticado, mostrar a tela de login
            <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
          ) : (
            // Se o usuário estiver autenticado, mostrar a tela principal
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          )}
        </Stack.Navigator>
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