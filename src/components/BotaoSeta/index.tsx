import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';

interface BotaoSetaProps {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
}

export default function BotaoSeta(props: BotaoSetaProps) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.botaoTexto}>{label}</Text>
      <AntDesign name="right" size={20} color="black" />
    </TouchableOpacity>
  );
}
