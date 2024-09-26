import { Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface BotaoIconeTextoProps {
  listaTexto: string[];
  icone: React.JSX.Element;
}

export function BotaoIconeTexto(props: BotaoIconeTextoProps) {
  const { listaTexto, icone } = props;

  return (
    <TouchableOpacity style={{ alignItems: "center", marginHorizontal: 10 }}>
      {icone}
      {listaTexto.map((item, index) => {
        return <Text key={index}>{item}</Text>
      })}
    </TouchableOpacity>
  );
}