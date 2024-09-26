import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Container from '../../components/Container';
import { Botao } from '../../components/Botao';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { BotaoIconeTexto } from '../../components/BotaoIconeTexto';

export default function HomePage() {
  return (
    <Container>
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
          <BotaoIconeTexto
            icone={<MaterialCommunityIcons name="cellphone-arrow-down" size={24} color="white" style={{ padding: 20, backgroundColor: "gray", borderRadius: 100 }} />}
            listaTexto={["Caixinhas e", "Investir"]}
          />
          <TouchableOpacity style={{ alignItems: "center", marginRight: 10 }}>
            <MaterialCommunityIcons name="cellphone-arrow-down" size={24} color="white" style={{ padding: 20, backgroundColor: "gray", borderRadius: 100 }} />
            <Text>Área Pix e{"\n"}Transferir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center", marginRight: 10 }}>
            <AntDesign name="barcode" size={24} color="white" style={{ padding: 20, backgroundColor: "gray", borderRadius: 100 }} />
            <Text>Pagar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <FontAwesome6 name="circle-dollar-to-slot" size={24} color="white" style={{ padding: 20, backgroundColor: "gray", borderRadius: 100 }} />
            <Text style={{ alignItems: "center" }}>{"     "}Pegar{"\n"}emprestado</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <MaterialCommunityIcons name="cellphone" size={24} color="white" style={{ padding: 20, backgroundColor: "gray", borderRadius: 100 }} />
            <Text>Recarga de </Text>
            <Text>celular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Entypo name="box" size={24} color="white" style={{ padding: 20, backgroundColor: "gray", borderRadius: 100 }} />
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
      <View style={{
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: "100%",
        paddingVertical: 10
      }}>
        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 20 }}>Cartao de crédito</Text>
          <AntDesign name="right" size={20} color="black" />
        </TouchableOpacity>
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
      </View>
      <View style={{
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: "100%",
        paddingVertical: 10
      }}>
        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 20 }}>Empréstimo</Text>
          <AntDesign name="right" size={20} color="black" />
        </TouchableOpacity>
        <Text>R$ 100000,00</Text>
      </View>
    </Container>
  );
}
