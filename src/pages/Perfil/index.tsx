import { Text, View } from "react-native";
import Container from "../../components/Container";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackRootStaticParamList } from "../../routes";
import React, { useEffect, useState } from "react";
import { BotaoVoltar } from "../../components/BotaoVoltar";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UsuarioTypes } from "../../context/usuario";

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "Perfil">;

export default function Perfil({ navigation }: Props) {
  const [data, setData] = useState<UsuarioTypes>({
    id: "",
    nome: "",
    senha: "",
    cpf: "",
    saldo: 0,
    agencia: "",
    conta: "",
    banco: "",
  });

  async function pegaDadosUsuario() {
    const id = await AsyncStorage.getItem("id")
    const nome = await AsyncStorage.getItem("nome")
    const senha = await AsyncStorage.getItem("senha")
    const cpf = await AsyncStorage.getItem("cpf")
    const saldo = await AsyncStorage.getItem("saldo")
    const agencia = await AsyncStorage.getItem("agencia")
    const conta = await AsyncStorage.getItem("conta")
    const banco = await AsyncStorage.getItem("banco")

    setData({
      id: (id) ? id : "",
      nome: (nome) ? nome : "",
      senha: (senha) ? senha : "",
      cpf: (cpf) ? cpf : "",
      saldo: (saldo) ? Number(saldo) : 0,
      agencia: (agencia) ? agencia : "",
      conta: (conta) ? conta : "",
      banco: (banco) ? banco : "",
    });
  }

  useEffect(() => {
    pegaDadosUsuario();
  }, [])
  
  return (
    <>
      <BotaoVoltar navigation={navigation} />
      <Container>
        <View style={styles.container}>
          <View style={styles.areaTitulo}>
            <Text style={styles.titulo}>Perfil</Text>
          </View>
          <Text>{data.id}</Text>
          <Text>{data.nome}</Text>
          <Text>{data.senha}</Text>
          <Text>{data.cpf}</Text>
          <Text>{data.saldo}</Text>
          <Text>{data.agencia}</Text>
          <Text>{data.conta}</Text>
          <Text>{data.banco}</Text>
        </View>
      </Container>
    </>
  );
}
