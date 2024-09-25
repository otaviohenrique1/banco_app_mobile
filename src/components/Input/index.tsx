import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

interface InputProps {
  handleChange: {
    (e: React.FocusEvent<any>): void;
    <T = string | any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  handleBlur: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
  };
  values: string;
  errors: string | undefined;
  touched: boolean | undefined;
  placeholder: string;
}

export function Input(props: InputProps) {
  return (
    <View>
      <TextInput
        style={styles.campoTexto}
        onChangeText={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values}
        placeholder={props.placeholder}
      />
      {props.errors && props.touched ? <Text style={styles.mensagemErro}>{props.errors}</Text> : null}
    </View>
  );
}