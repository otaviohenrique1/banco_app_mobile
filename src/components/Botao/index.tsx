import { ColorValue, GestureResponderEvent, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface BotaoProps {
  onPress: (event: GestureResponderEvent) => void;
  backgroundColor: ColorValue;
  textColor: ColorValue;
  label: string;
  marginTop?: number;
  marginBotton?: number;
}

export function Botao(props: BotaoProps) {
  const { onPress, backgroundColor, textColor, label, marginTop, marginBotton } = props;
  const marginTopCondicional = (marginTop) ? marginTop : 0;
  const marginBottonCondicional = (marginBotton) ? marginBotton : 0;
  const botaoStyle = styles(backgroundColor, textColor, marginTopCondicional, marginBottonCondicional)
  return (
    <TouchableOpacity style={botaoStyle.botao} onPress={onPress}>
      <Text style={botaoStyle.botaoTexto}>{label}</Text>
    </TouchableOpacity>
  );
}