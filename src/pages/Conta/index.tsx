import { ScrollView, Text } from 'react-native';
import Container from '../../components/Container';
import Sessao from '../../components/Sessao';
import BotaoSeta from '../../components/BotaoSeta';
import { BotaoIconeTexto } from '../../components/BotaoIconeTexto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Conta() {
  const iconeStyle = { padding: 20, backgroundColor: "gray", borderRadius: 100, };

  return (
    <Container>
      <Sessao>
        <Text>Saldo disponível</Text>
        <BotaoSeta label="R$ 1000,00" onPress={() => { }} />
        <Text>Saldo separado</Text>
        <BotaoSeta label="R$ 1000,00" onPress={() => { }} />
        <BotaoSeta label="Assistente de pagamentos" onPress={() => { }} />
        <Text>Total em investimentos</Text>
        <BotaoSeta label="R$ 1000,00" onPress={() => { }} />
        <Text>R$ 5,00</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
          <BotaoIconeTexto
            icone={<MaterialCommunityIcons name="cellphone-arrow-down" size={24} color="white" style={iconeStyle} />}
            listaTexto={["Área Pix e", "Transferir"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<MaterialCommunityIcons name="cellphone-arrow-down" size={24} color="white" style={iconeStyle} />}
            listaTexto={["Área Pix e", "Transferir"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<MaterialCommunityIcons name="cellphone-arrow-down" size={24} color="white" style={iconeStyle} />}
            listaTexto={["Área Pix e", "Transferir"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<MaterialCommunityIcons name="cellphone-arrow-down" size={24} color="white" style={iconeStyle} />}
            listaTexto={["Área Pix e", "Transferir"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<MaterialCommunityIcons name="cellphone-arrow-down" size={24} color="white" style={iconeStyle} />}
            listaTexto={["Área Pix e", "Transferir"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<MaterialCommunityIcons name="cellphone-arrow-down" size={24} color="white" style={iconeStyle} />}
            listaTexto={["Área Pix e", "Transferir"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<MaterialCommunityIcons name="cellphone-arrow-down" size={24} color="white" style={iconeStyle} />}
            listaTexto={["Área Pix e", "Transferir"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<MaterialCommunityIcons name="cellphone-arrow-down" size={24} color="white" style={iconeStyle} />}
            listaTexto={["Área Pix e", "Transferir"]}
            onPress={() => { }}
          />
          <BotaoIconeTexto
            icone={<MaterialCommunityIcons name="cellphone-arrow-down" size={24} color="white" style={iconeStyle} />}
            listaTexto={["Área Pix e", "Transferir"]}
            onPress={() => { }}
          />
        </ScrollView>
      </Sessao>
    </Container>
  );
}
