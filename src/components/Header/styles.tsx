import { ColorValue, StyleSheet } from 'react-native';

export const styles = (backgroundColor: ColorValue, textColor: ColorValue, marginTop: number, marginBotton: number) => StyleSheet.create({
  botao: {
    padding: 20,
    backgroundColor: backgroundColor,
    alignItems: "center",
    borderRadius: 10,
    marginTop: marginTop,
    marginBottom: marginBotton,
  },
  botaoTexto: {
    color: textColor,
  }
});