import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";

interface BotaoVoltarProps {
  navigation: any;
}

export function BotaoVoltar(props: BotaoVoltarProps) {
  const { navigation } = props;

  return (
    <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back-sharp" size={24} color="black" />
    </TouchableOpacity>
  );
}