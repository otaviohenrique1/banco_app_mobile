import { Text, TouchableOpacity, View } from 'react-native';
import Container from '../../components/Container';
import Sessao from '../../components/Sessao';
import { BotaoIconeTexto } from '../../components/BotaoIconeTexto';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeStackRootStaticParamList } from '../../routes';
import { styles } from './styles';
import { useContext, useEffect, useState } from 'react';
import CartaoContext, { CartaoTypes } from '../../context/cartao';

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "Cartao">;

export default function Cartao({ route, navigation }: Props) {
  const { id } = route.params;
  const valoresIniciais = {
    id: "",
    nome: "",
    numero: "",
    cvv: "",
    validade: "",
    tipo: "",
  };
  const [data, setData] = useState<CartaoTypes>(valoresIniciais);
  const { listaCartoes } = useContext(CartaoContext);

  useEffect(() => {
    const dados = listaCartoes.find((item) => item.id === id);
    const dadosValidados = (dados) ? dados : valoresIniciais;
    setData(dadosValidados);
  }, [])
  

  return (
    <Container>
      <View style={styles.container}>
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
            <View style={styles.cartao}>
              <AntDesign name="creditcard" size={200} color="black" style={styles.iconeCartao} />
            </View>
            <Text style={styles.dado}>{data.nome}</Text>
          </Sessao>
          <Sessao
            bordaEmBaixo={false}
            bordaEmCima={false}
          >
            <View style={styles.numero}>
              <View>
                <Text>Numero</Text>
                <Text style={styles.dado}>{data.numero}</Text>
              </View>
              <TouchableOpacity style={styles.botaoCopiar} onPress={() => { }}>
                <FontAwesome6 name="copy" size={24} color="black" style={styles.botaoCopiarIcone} />
                <Text>Copiar</Text>
              </TouchableOpacity>
            </View>
          </Sessao>
          <Sessao
            bordaEmBaixo={true}
            bordaEmCima={false}
          >
            <View style={styles.sessao}>
              <View style={styles.validade}>
                <Text>Validade</Text>
                <Text style={styles.dado}>{data.validade}</Text>
              </View>
              <View>
                <Text>CVV</Text>
                <Text style={styles.dado}>{data.cvv}</Text>
              </View>
            </View>
          </Sessao>
          <Sessao
            bordaEmBaixo={false}
            bordaEmCima={false}
          >
            <View style={styles.sessao}>
              <View style={styles.mastercard}>
                <Text>Mastercard</Text>
                <Text style={styles.dado}>Gold</Text>
              </View>
              <View>
                <Text>Função</Text>
                <Text style={styles.dado}>Débito e Crédito</Text>
              </View>
            </View>
          </Sessao>
        </Sessao>
        <Sessao
          bordaEmBaixo={false}
          bordaEmCima={false}
        >
          <View style={styles.areaBotoes}>
            <BotaoIconeTexto
              icone={<Octicons name="blocked" size={24} color="white" style={styles.iconeStyle} />}
              listaTexto={["Bloquear"]}
              onPress={() => { }}
            />
            <BotaoIconeTexto
              icone={<Octicons name="gear" size={24} color="white" style={styles.iconeStyle} />}
              listaTexto={["Configurar"]}
              onPress={() => { }}
            />
          </View>
        </Sessao>
      </View>
    </Container>
  );
}
