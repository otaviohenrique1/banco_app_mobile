import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import MaskInput, { Masks } from 'react-native-mask-input';

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

export function InputMask(props: InputProps) {
  const { handleChange, handleBlur, values, placeholder, errors, touched } = props;
  return (
    <View>
      <MaskInput
        style={styles.campoTexto}
        value={values}
        onChangeText={handleChange}
        onBlur={handleBlur}
        mask={Masks.BRL_CPF}
        placeholder={placeholder}
        keyboardType="decimal-pad"
      />
      {errors && touched ? <Text style={styles.mensagemErro}>{errors}</Text> : null}
    </View>
  );
}