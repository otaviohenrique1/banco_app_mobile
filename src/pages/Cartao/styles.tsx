import { StyleSheet } from 'react-native';
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    marginTop: 17,
  },
  cartao: {
    alignItems: "center",
  },
  iconeCartao: {
    marginTop: 20,
  },
  dado: {
    fontSize: 20,
  },
  numero: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  botaoCopiar: {
    flexDirection: "row",
    alignItems: "center",
  },
  botaoCopiarIcone: {
    marginRight: 5,
  },
  sessao: {
    flexDirection: "row",
    alignItems: "center",
  },
  validade: {
    marginRight: 70,
  },
  mastercard: {
    marginRight: 53,
  },
  areaBotoes: { 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  iconeStyle: {
    padding: 20,
    backgroundColor: "gray",
    borderRadius: 100,
  },
});