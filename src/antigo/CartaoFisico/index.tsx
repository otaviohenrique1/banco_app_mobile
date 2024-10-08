import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Container from '../../components/Container';
import Sessao from '../../components/Sessao';
import BotaoSeta from '../../components/BotaoSeta';
import { BotaoIconeTexto } from '../../components/BotaoIconeTexto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Octicons from '@expo/vector-icons/Octicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeStackRootStaticParamList } from '../../routes';
import Constants from "expo-constants";

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "CartaoFisico">;

export default function CartaoFisico({ navigation }: Props) {
  const iconeStyle = { padding: 20, backgroundColor: "gray", borderRadius: 100, };

  return (
    <Container>
      <View style={{ marginTop: Constants.statusBarHeight, }}>
        <Sessao
          bordaEmBaixo={false}
          bordaEmCima={false}
        >
          <Sessao
            bordaEmBaixo={false}
            bordaEmCima={false}
          >
            <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-sharp" size={24} color="black" />
            </TouchableOpacity>
            <AntDesign name="creditcard" size={40} color="black" style={{ marginTop: 20 }} />
            <Text>Nome</Text>
          </Sessao>
          <Sessao
            bordaEmBaixo={false}
            bordaEmCima={false}
          >
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View>
                <Text>Numero</Text>
                <Text>5544 9998 7221 6633</Text>
              </View>
              <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => { }}>
                <FontAwesome6 name="copy" size={24} color="black" style={{ marginRight: 5 }} />
                <Text>Copiar</Text>
              </TouchableOpacity>
            </View>
          </Sessao>
          <Sessao
            bordaEmBaixo={true}
            bordaEmCima={false}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ marginRight: 70 }}>
                <Text>Validade</Text>
                <Text>09/32</Text>
              </View>
              <View>
                <Text>CVV</Text>
                <Text>888</Text>
              </View>
            </View>
          </Sessao>
          <Sessao
            bordaEmBaixo={false}
            bordaEmCima={false}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ marginRight: 53 }}>
                <Text>Mastercard</Text>
                <Text>Gold</Text>
              </View>
              <View>
                <Text>Função</Text>
                <Text>Débito crédito</Text>
              </View>
            </View>
          </Sessao>
        </Sessao>
        <Sessao
          bordaEmBaixo={true}
          bordaEmCima={false}
        >
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
            <BotaoIconeTexto
              icone={<Octicons name="blocked" size={24} color="white" style={iconeStyle} />}
              listaTexto={["Bloquear"]}
              onPress={() => { }}
            />
            <BotaoIconeTexto
              icone={<Octicons name="gear" size={24} color="white" style={iconeStyle} />}
              listaTexto={["Configurar"]}
              onPress={() => { }}
            />
          </View>
        </Sessao>
      </View>
    </Container>
  );
}
