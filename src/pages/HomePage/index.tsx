import { Text, ScrollView, View, DrawerLayoutAndroid, Button, TouchableOpacity } from 'react-native';
import Container from '../../components/Container';
import { Botao } from '../../components/Botao';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { BotaoIconeTexto } from '../../components/BotaoIconeTexto';
import Sessao from '../../components/Sessao';
import BotaoSeta from '../../components/BotaoSeta';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeStackRootStaticParamList } from '../../routes';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useRef } from 'react';
import Constants from "expo-constants";

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "HomePage">;

export default function HomePage({ navigation }: Props) {
  const iconeStyle = { padding: 20, backgroundColor: "gray", borderRadius: 100, };
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const navigationView = () => (
    <View style={[{
      flex: 1,
      marginTop: Constants.statusBarHeight,
      padding: 16,
    }, {
      backgroundColor: '#ecf0f1',
    }]}>
      <View style={{ flexDirection: "row", justifyContent: "flex-end", }}>
        <TouchableOpacity
          onPress={() => drawer.current?.closeDrawer()}
        >
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", }}>
        <TouchableOpacity
          onPress={() => { }}
          style={{ width: 50, height: 50, }}
        >
          <FontAwesome name="user-circle-o" size={50} color="black" />
        </TouchableOpacity>
      </View>
      <Sessao
        bordaEmBaixo
        bordaEmCima={false}
      >
        <View>
          <Text>Agencia</Text>
          <Text style={{ fontSize: 20 }}>0001</Text>
        </View>
        <View>
          <Text>Conta</Text>
          <Text style={{ fontSize: 20 }}>12345678-9</Text>
        </View>
        <View>
          <Text>Banco</Text>
          <Text style={{ fontSize: 20 }}>1234</Text>
        </View>
        <View>
          <Text style={{ fontSize: 20 }}>Banco APP</Text>
        </View>
      </Sessao>
      <Sessao
        bordaEmBaixo
        bordaEmCima={false}
      >
        <TouchableOpacity
          onPress={() => { }}
          style={{ alignItems: "center" }}
        >
          <Text>Perfil</Text>
        </TouchableOpacity>
      </Sessao>
      <Sessao
        bordaEmBaixo
        bordaEmCima={false}
      >
        <TouchableOpacity
          onPress={() => navigation.replace("Login")}
          style={{ alignItems: "center" }}
        >
          <Text>Sair</Text>
        </TouchableOpacity>
      </Sessao>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"left"}
      renderNavigationView={navigationView}
    >
      <View style={{
        marginTop: Constants.statusBarHeight,
        backgroundColor: "cadetblue",
        paddingHorizontal: 15,
        paddingVertical: 20,
      }}>
        <TouchableOpacity
          onPress={() => drawer.current?.openDrawer()}
          style={{ width: 40, height: 40, }}
        >
          <FontAwesome name="user-circle-o" size={40} color="black" />
        </TouchableOpacity>
        {/* <Text>{"("}Foto{")"} {"((o)"} {"(?)"} {"(V)"}</Text> */}
        <Text>Olá, Usuario</Text>
      </View>
      <Container>
        <Sessao
          bordaEmBaixo
          bordaEmCima={false}
        >
          <BotaoSeta
            label="Conta"
            onPress={() => navigation.navigate("Conta")}
          />
          <Text>R$ 1000,00</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
            <BotaoIconeTexto
              icone={<MaterialCommunityIcons name="cellphone-arrow-down" size={24} color="white" style={iconeStyle} />}
              listaTexto={["Área Pix e", "Transferir"]}
              onPress={() => { }}
            />
            <BotaoIconeTexto
              icone={<AntDesign name="barcode" size={24} color="white" style={iconeStyle} />}
              listaTexto={["Pagar"]}
              onPress={() => { }}
            />
            <BotaoIconeTexto
              icone={<FontAwesome6 name="circle-dollar-to-slot" size={24} color="white" style={iconeStyle} />}
              listaTexto={["Pegar", "emprestado"]}
              onPress={() => { }}
            />
            <BotaoIconeTexto
              icone={<MaterialCommunityIcons name="cellphone" size={24} color="white" style={iconeStyle} />}
              listaTexto={["Recarga de", "celular"]}
              onPress={() => { }}
            />
            <BotaoIconeTexto
              icone={<Entypo name="box" size={24} color="white" style={iconeStyle} />}
              listaTexto={["Caixinhas e", "Investir"]}
              onPress={() => { }}
            />
          </ScrollView>
          <Botao
            backgroundColor="blue"
            textColor="white"
            onPress={() => navigation.navigate("MeusCartoes")}
            label="Meus cartões"
            marginTop={10}
          />
        </Sessao>
        <Sessao
          bordaEmBaixo
          bordaEmCima={false}
        >
          <BotaoSeta
            label="Cartao de crédito"
            onPress={() => { }}
          />
          <Text>Fatura atual</Text>
          <Text>R$ 1000,00</Text>
          <Text>Limite disponivel</Text>
          <Text>R$ 5000,00</Text>
          <Botao
            backgroundColor="blue"
            textColor="white"
            onPress={() => { }}
            label="Aliviar fatura"
            marginTop={10}
          />
        </Sessao>
        <Sessao
          bordaEmBaixo
          bordaEmCima={false}
        >
          <BotaoSeta
            label="Empréstimo"
            onPress={() => { }}
          />
          <Text>R$ 100000,00</Text>
        </Sessao>
      </Container>
    </DrawerLayoutAndroid>
  );
}
