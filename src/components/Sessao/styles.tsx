import { StyleSheet } from 'react-native';

export const styles = (bordaEmBaixo: boolean, bordaEmCima: boolean) => StyleSheet.create({
  sessao: {
    borderBottomColor: "black",
    borderTopColor: "black",
    borderBottomWidth: bordaEmBaixo ? 1 : 0,
    borderTopWidth: bordaEmCima ? 1 : 0,
    paddingVertical: 10,
  },
});