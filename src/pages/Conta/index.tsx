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
import { BotaoVoltar } from '../../components/BotaoVoltar';
import { styles } from './styles';

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "Conta">;

export default function Conta({ navigation }: Props) {
  return (
    <Container>
      <BotaoVoltar navigation={navigation}/>
      <Sessao
        bordaEmBaixo
        bordaEmCima={false}
      >
        <Sessao
          bordaEmBaixo={false}
          bordaEmCima={false}
        >
          <Text>Saldo disponível</Text>
          <BotaoSeta label="R$ 1000,00" onPress={() => { }} />
        </Sessao>
        <Sessao
          bordaEmBaixo={false}
          bordaEmCima={false}
        >
          <Text>Saldo separado</Text>
          <BotaoSeta label="R$ 1000,00" onPress={() => { }} />
        </Sessao>
        <Sessao
          bordaEmBaixo={false}
          bordaEmCima={false}
        >
          <BotaoSeta label="Assistente de pagamentos" onPress={() => { }} />
        </Sessao>
        <Sessao
          bordaEmBaixo={false}
          bordaEmCima={false}
        >
          <Text>Total em investimentos</Text>
          <BotaoSeta label="R$ 1000,00" onPress={() => { }} />
          <Text>R$ 5,00</Text>
        </Sessao>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
          <BotaoIconeTexto
            icone={<MaterialCommunityIcons name="cellphone-arrow-down" size={24} color="white" style={styles.icone} />}
            listaTexto={["Depositar"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<AntDesign name="barcode" size={24} color="white" style={styles.icone} />}
            listaTexto={["Pagar"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<Ionicons name="reload" size={24} color="white" style={styles.icone} />}
            listaTexto={["Débito", "Automático"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<FontAwesome6 name="hand-holding-dollar" size={24} color="white" style={styles.icone} />}
            listaTexto={["Empréstimos"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<Foundation name="dollar-bill" size={24} color="white" style={styles.icone} />}
            listaTexto={["Transferir"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<FontAwesome5 name="signal" size={24} color="white" style={styles.icone} />}
            listaTexto={["Investir"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<Ionicons name="newspaper-outline" size={24} color="white" style={styles.icone} />}
            listaTexto={["Pedir", "Extrato"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<FontAwesome6 name="file-invoice-dollar" size={24} color="white" style={styles.icone} />}
            listaTexto={["Cobrar"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<FontAwesome6 name="money-check-dollar" size={24} color="white" style={styles.icone} />}
            listaTexto={["Seu", "Sálario"]}
            onPress={() => { }}
          />
        </ScrollView>
      </Sessao>
    </Container>
  );
}
