import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import Sessao from '../../components/Sessao';
import AntDesign from '@expo/vector-icons/AntDesign';
import { destino } from '../../types';
import { NovoCartaoItem } from '../NovoCartaoItem';

export interface ListaCartoesTypes {
  id?: number | string | undefined;
  nome: string;
  numero: string;
  cvv: string;
  validade: string;
}

interface NovoCartaoProps {
  destino: "Cartao";
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
              key={`${item.nome}-${index}`}
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
