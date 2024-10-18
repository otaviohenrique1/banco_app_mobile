import { Text, View } from "react-native";
import Container from "../../components/Container";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackRootStaticParamList } from "../../routes";
import React, { useContext, useEffect, useState } from "react";
import { BotaoVoltar } from "../../components/BotaoVoltar";
import AsyncStorage from '@react-native-async-storage/async-storage';
import UsuarioContext, { UsuarioTypes } from "../../context/usuario";
import axios from "axios";

const data = { "conta": { "agencia": 7241, "banco": 9765, "conta_numero": 149695478, "id": 1, "nome_banco": "BancoAPP", "saldo": "0.00" }, "cpf": "35376473015", "email": "otavio@email.com", "id": 1, "nome": "Otavio", "senha": "pbkdf2_sha256$870000$KOlIlyeio1BdBBOFveOcy2$1C66fPi3hAOXg0qwDQjcPivexKrH4Q1hWfUWfttSlio=" }

interface DataTypes {
  id: number;
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  conta: {
    id: number;
    saldo: string;
    agencia: string;
    banco: string;
    conta_numero: string;
    nome_banco: string;
  };
}

const dadosIniciais: DataTypes = {
  id: 0,
  nome: "",
  cpf: "",
  email: "",
  senha: "",
  conta: {
    id: 0,
    saldo: "",
    agencia: "",
    banco: "",
    conta_numero: "",
    nome_banco: ""
  }
};

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "Perfil">;

export default function Perfil({ navigation }: Props) {
  const { usuario } = useContext(UsuarioContext);
  const [data, setData] = useState<DataTypes>(dadosIniciais);

  useEffect(() => {
    axios.get(`http://10.0.2.2:8000/clientes/${usuario.id}/`)
      .then((response) => {
        // console.log(response.data);
        setData(response.data)
      })
      .catch((erro) => {
        console.error(erro);
      })
  }, [])


  return (
    <>
      <BotaoVoltar navigation={navigation} />
      <Container>
        <View style={styles.container}>
          <View style={styles.areaTitulo}>
            <Text style={styles.titulo}>Perfil</Text>
          </View>
          <Text>{usuario.id}</Text>
          <Text>{usuario.cpf}</Text>
          <Text>---------------------------</Text>
          <Text>id: {data.id}</Text>
          <Text>nome: {data.nome}</Text>
          <Text>email: {data.email}</Text>
          <Text>cpf: {data.cpf}</Text>
          <Text>senha: {data.senha}</Text>
          <Text>id: {data.conta.id}</Text>
          <Text>agencia: {data.conta.agencia}</Text>
          <Text>banco: {data.conta.banco}</Text>
          <Text>conta_numero: {data.conta.conta_numero}</Text>
          <Text>saldo: {data.conta.saldo}</Text>
          <Text>nome_banco: {data.conta.nome_banco}</Text>
        </View>
      </Container>
    </>
  );
}
