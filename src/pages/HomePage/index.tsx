import { Text, ScrollView } from 'react-native';
import Container from '../../components/Container';
import { Botao } from '../../components/Botao';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { BotaoIconeTexto } from '../../components/BotaoIconeTexto';
import Sessao from '../../components/Sessao';
import BotaoSeta from '../../components/BotaoSeta';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeStackRootStaticParamList } from '../../routes';

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "HomePage">;

export default function HomePage({ navigation }: Props) {
  const iconeStyle = { padding: 20, backgroundColor: "gray", borderRadius: 100, };
  return (
    <Container>
      <Sessao
        bordaEmBaixo
        bordaEmCima={false}
      >
        <BotaoSeta
          label="Conta"
          onPress={() => navigation.navigate("Conta")}
        />
        <Text>R$ 1000,00</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          <BotaoIconeTexto
            icone={<MaterialCommunityIcons name="cellphone-arrow-down" size={24} color="white" style={iconeStyle} />}
            listaTexto={["Área Pix e", "Transferir"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<AntDesign name="barcode" size={24} color="white" style={iconeStyle} />}
            listaTexto={["Pagar"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<FontAwesome6 name="circle-dollar-to-slot" size={24} color="white" style={iconeStyle} />}
            listaTexto={["Pegar", "emprestado"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<MaterialCommunityIcons name="cellphone" size={24} color="white" style={iconeStyle} />}
            listaTexto={["Recarga de", "celular"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<Entypo name="box" size={24} color="white" style={iconeStyle} />}
            listaTexto={["Caixinhas e", "Investir"]}
            onPress={() => { }}
          />
        </ScrollView>
        <Botao
          backgroundColor="blue"
          textColor="white"
          onPress={() => { }}
          label="Meus cartões"
          marginTop={10}
        />
      </Sessao>
      <Sessao
        bordaEmBaixo
        bordaEmCima={false}
      >
        <BotaoSeta
          label="Cartao de crédito"
          onPress={() => { }}
        />
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
      </Sessao>
      <Sessao
        bordaEmBaixo
        bordaEmCima={false}
      >
        <BotaoSeta
          label="Empréstimo"
          onPress={() => { }}
        />
        <Text>R$ 100000,00</Text>
      </Sessao>
    </Container>
  );
}
