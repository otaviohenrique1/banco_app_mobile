import { Alert, ColorValue, GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Constants from "expo-constants";
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface HeaderProps {
}


export function Header(props: HeaderProps) {
  return (
    <View style={{
      marginTop: Constants.statusBarHeight,
      backgroundColor: "cadetblue",
      paddingHorizontal: 15,
      paddingVertical: 20,
    }}>
      <FontAwesome name="user-circle-o" size={40} color="black" />
      {/* <Text>{"("}Foto{")"} {"((o)"} {"(?)"} {"(V)"}</Text> */}
      <Text>Olá, Usuario</Text>
    </View>
  );
}