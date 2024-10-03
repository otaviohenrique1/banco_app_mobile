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

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "CartaoTemporario">;

export default function CartaoTemporario({ navigation }: Props) {
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
            <Text>Cartão temporário</Text>
          </Sessao>
          <Sessao
            bordaEmBaixo={false}
            bordaEmCima={false}
          >
            <View style={{ alignItems: "center" }}>
              <AntDesign name="creditcard" size={200} color="black" style={{ marginBottom: 20 }} />
            </View>
          </Sessao>
        </Sessao>
      </View>
    </Container> 
  );
}
