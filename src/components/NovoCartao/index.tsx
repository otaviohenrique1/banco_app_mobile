import { GestureResponderEvent, ScrollView, Text, TouchableOpacity, View } from 'react-native';
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

export interface ListaCartoesTypes {
  // id: number;
  nome: string;
  numero: string;
}

type destino = "CartaoFisico" | "CartaoTemporario" | "CartaoVirtual"

interface NovoCartaoProps {
  destino: destino;
  navigation: any;
  titulo: string;
  listaCartoes: ListaCartoesTypes[];
  listaCartoesBotaoAdicionar: (event: GestureResponderEvent) => void;
}

export function NovoCartao(props: NovoCartaoProps) {
  const { destino, navigation, listaCartoes, titulo, listaCartoesBotaoAdicionar } = props;

  return (
    <Sessao bordaEmBaixo={false} bordaEmCima={false}>
      <Sessao bordaEmBaixo={false} bordaEmCima={false}>
        <Text>{titulo}</Text>
      </Sessao>
      <Sessao bordaEmBaixo={true} bordaEmCima={false}>
        {listaCartoes.map((item, index) => {
          return (
            <NovoCartaoItem
              destino={destino}
              navigation={navigation}
              key={`${item.nome} . ${index}`}
              nome={item.nome}
              numero={item.numero}
            />
          );
        })}
      </Sessao>
      <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 }} onPress={listaCartoesBotaoAdicionar}>
        <Text>Adicionar cartão</Text>
        <AntDesign name="plus" size={24} color="black" />
      </TouchableOpacity>
    </Sessao>
  );
}

interface NovoCartaoItemProps {
  destino: destino
  navigation: any;
  nome: string;
  numero: string;
};

export function NovoCartaoItem(props: NovoCartaoItemProps) {
  const { nome, numero, destino, navigation } = props;

  return (
    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 }} onPress={() => navigation.navigate(destino)}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign name="creditcard" size={24} color="black" style={{ marginRight: 20 }} />
        <View>
          <Text>{nome}</Text>
          <Text>{numero}</Text>
        </View>
      </View>
      <AntDesign name="right" size={20} color="black" />
    </TouchableOpacity>
  );
}
