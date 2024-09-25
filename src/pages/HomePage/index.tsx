import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Container from '../../components/Container';
import { Botao } from '../../components/Botao';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export default function HomePage() {
  return (
    <Container>
      <Text>{"("}Foto{")"} {"((o)"} {"(?)"} {"(V)"}</Text>
      <Text>Olá, Usuario</Text>
      <Text>-------------------------</Text>
      <View style={{
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: "100%",
        paddingVertical: 10
      }}>
        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 20 }}>Conta</Text>
          <AntDesign name="right" size={20} color="black" />
        </TouchableOpacity>
        <Text>R$ 1000,00</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Text>{"["}Pix{"]"}</Text>
          <Text>{"["}Pagar{"]"}</Text>
          <Text>{"["}Pegar empréstimo{"]"}</Text>
          <Text>{"["}Recarga de celular{"]"}</Text>
          <TouchableOpacity>
            <Entypo name="box" size={24} color="black" />
            <Text>Caixinhas e</Text>
            <Text>Investir</Text>
          </TouchableOpacity>
        </ScrollView>
        <Botao
          backgroundColor="blue"
          textColor="white"
          onPress={() => { }}
          label="Meus cartões"
          marginTop={10}
        />
      </View>
      <Text>-------------------------</Text>
      <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 20 }}>Cartao de crédito</Text>
        <AntDesign name="right" size={20} color="black" />
      </TouchableOpacity>
      <Text>Fatura atual</Text>
      <Text>R$ 1000,00</Text>
      <Text>Limite disponivel</Text>
      <Text>R$ 5000,00</Text>
      <Text>{"["}Aliviar fatura{"]"}</Text>
      <Text>-------------------------</Text>
      <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 20 }}>Empréstimo</Text>
        <AntDesign name="right" size={20} color="black" />
      </TouchableOpacity>
      <Text>R$ 100000,00</Text>
    </Container>
  );
}
