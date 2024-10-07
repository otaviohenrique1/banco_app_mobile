import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalTela: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalContainer: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    width: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  tituloContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  titulo: {
    textAlign: "center",
    fontSize: 20,
  },
  botao: {
    backgroundColor: "blue",
    borderRadius: 5,
  },
  botaoTexto: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
  },
});