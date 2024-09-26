import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Container from '../Container';
import { Botao } from '../Botao';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { BotaoIconeTexto } from '../BotaoIconeTexto';

export default function HomePage() {
  return (
    <Container>
      <View style={{
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: "100%",
        paddingVertical: 10
      }}>
      </View>
      <View style={{
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: "100%",
        paddingVertical: 10
      }}>
      </View>
      <View style={{
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: "100%",
        paddingVertical: 10
      }}>
      </View>
    </Container>
  );
}
