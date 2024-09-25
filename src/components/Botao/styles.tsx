import { ColorValue, StyleSheet } from 'react-native';

export const styles = (backgroundColor: ColorValue, textColor: ColorValue, marginTop: number) => StyleSheet.create({
  botao: {
    padding: 20,
    backgroundColor: backgroundColor,
    alignItems: "center",
    marginTop: marginTop,
    borderRadius: 10,
  },
  botaoTexto: {
    color: textColor,
  }
});