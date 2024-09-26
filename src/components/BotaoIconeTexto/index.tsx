import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface BotaoIconeTextoProps {
  listaTexto: string[];
  icone: React.JSX.Element;
  onPress: (event: GestureResponderEvent) => void;
}

export function BotaoIconeTexto(props: BotaoIconeTextoProps) {
  const { listaTexto, icone, onPress } = props;

  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      {icone}
      {listaTexto.map((item, index) => {
        return <Text key={index}>{item}</Text>
      })}
    </TouchableOpacity>
  );
}