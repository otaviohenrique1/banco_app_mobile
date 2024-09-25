import { FormikErrors, FormikTouched } from "formik";
import { Text, TextInput, View } from "react-native";

interface InputProps {
  handleChange: {
    (e: React.FocusEvent<any>): void;
    <T = string | any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  handleBlur: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
  };
  values: string,
  errors: string | undefined,
  touched: boolean | undefined,
}

export function Input(props: InputProps) {
  return (
    <View style={{ marginBottom: 10 }}>
      <TextInput
        style={{ borderBottomColor: "black", borderBottomWidth: 1 }}
        onChangeText={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values}
      />
      {props.errors && props.touched ? <Text>{String(props.errors)}</Text> : null}
    </View>
  );
}