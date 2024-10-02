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
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeStackRootStaticParamList } from '../../routes';
import Constants from "expo-constants";

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "MeusCartoes">;

export default function MeusCartoes({ navigation }: Props) {
  return (
    <Container>
      <View style={{ marginTop: Constants.statusBarHeight, }}>
        <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-sharp" size={24} color="black" />
        </TouchableOpacity>
        <Sessao
          bordaEmBaixo={false}
          bordaEmCima={false}
        >
          <Sessao
            bordaEmBaixo={false}
            bordaEmCima={false}
          >
            <Text>Cartão físico</Text>
          </Sessao>
          <Sessao
            bordaEmBaixo={true}
            bordaEmCima={false}
          >
            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} onPress={() => navigation.navigate("CartaoFisico")}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign name="creditcard" size={24} color="black" style={{ marginRight: 20 }} />
                <View>
                  <Text>OTAVIO H L SILVA</Text>
                  <Text>...0506</Text>
                </View>
              </View>
              <AntDesign name="right" size={20} color="black" />
            </TouchableOpacity>
          </Sessao>

        </Sessao>
      </View>
    </Container>
  );
}
