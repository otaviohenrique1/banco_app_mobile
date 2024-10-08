import { Text, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { destino } from '../../types';
import { styles } from './styles';

interface NovoCartaoItemProps {
  destino: "Cartao"
  navigation: any;
  nome: string;
  numero: string;
  id: string;
};

export function NovoCartaoItem(props: NovoCartaoItemProps) {
  const { nome, numero, destino, navigation, id } = props;

  return (
    <TouchableOpacity
      style={styles.botao}
      onPress={() => navigation.navigate(destino, { id: id })}
    >
      <View style={styles.botaoContainer}>
        <AntDesign name="creditcard" size={24} color="black" style={styles.icone} />
        <View>
          <Text>{nome}</Text>
          <Text>{`...${numero.substring(14)}`}</Text>
        </View>
      </View>
      <AntDesign name="right" size={20} color="black" />
    </TouchableOpacity>
  );
}
