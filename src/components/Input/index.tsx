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
  secureTextEntry?: boolean | undefined
}

export function Input(props: InputProps) {
  const { handleChange, handleBlur, values, placeholder, secureTextEntry, errors, touched } = props;
  return (
    <View>
      <TextInput
        style={styles.campoTexto}
        onChangeText={handleChange}
        onBlur={handleBlur}
        value={values}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      {errors && touched ? <Text style={styles.mensagemErro}>{errors}</Text> : null}
    </View>
  );
}