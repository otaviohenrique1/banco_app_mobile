import { ColorValue, GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface BotaoProps {
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor: ColorValue;
  textColor: ColorValue;
  label: string;
  marginTop?: number; 
}

export function Botao(props: BotaoProps) {
  const { onPress, backgroundColor, textColor, label, marginTop } = props;
  const botaoStyle = styles(backgroundColor, textColor, (marginTop) ? marginTop : 0)
  return (
    <TouchableOpacity style={botaoStyle.botao} onPress={onPress}>
      <Text style={botaoStyle.botaoTexto}>{label}</Text>
    </TouchableOpacity>
  );
}