import { ScrollView, TouchableOpacity, View } from "react-native";
import Container from "../../components/Container";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackRootStaticParamList } from "../../routes";
import { ListaCartoesTypes, NovoCartao } from "../../components/NovoCartao";
import { useState } from "react";
import { geraNumeroCartao, geraNumeroCVV } from "../../utils";
import { FormikHelpers } from "formik";
import { ModalCartao } from "../../components/ModalCartao";
import { styles } from "./styles";
import { v4 as uuid } from 'uuid';

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "MeusCartoes">;

export default function MeusCartoes({ navigation }: Props) {
  const [listaCartaoFisico, setListaCartaoFisico] = useState<ListaCartoesTypes[]>([]);
  const [listaCartaoTemporario, setListaCartaoTemporario] = useState<ListaCartoesTypes[]>([]);
  const [listaCartaoVirtual, setListaCartaoVirtual] = useState<ListaCartoesTypes[]>([]);
  const [modalVisible1, setModalVisible1] = useState<boolean>(false);
  const [modalVisible2, setModalVisible2] = useState<boolean>(false);
  const [modalVisible3, setModalVisible3] = useState<boolean>(false);
  // navigation.navigate("Cartao", {
  //   nome,
  //   numero,
  //   cvv,
  //   validade
  // })
  return (
    <Container>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-sharp" size={24} color="black" />
          </TouchableOpacity>
          <NovoCartao
            destino="Cartao"
            listaCartoes={listaCartaoFisico}
            navigation={navigation}
            titulo="Cartão Fisíco"
            listaCartoesBotaoAdicionar={() => setModalVisible1(true)}
          />
          <NovoCartao
            destino="Cartao"
            listaCartoes={listaCartaoTemporario}
            navigation={navigation}
            titulo="Cartão Temporário"
            listaCartoesBotaoAdicionar={() => setModalVisible2(true)}
          />
          <NovoCartao
            destino="Cartao"
            listaCartoes={listaCartaoVirtual}
            navigation={navigation}
            titulo="Cartão Virtual"
            listaCartoesBotaoAdicionar={() => setModalVisible3(true)}
          />
        </View>
      </ScrollView>
      {/* Arrumar */}
      <ModalCartao
        modalVisible={modalVisible1}
        setModalVisible={setModalVisible1}
        onSubmit={values => {
          setListaCartaoFisico([...listaCartaoFisico, {
            id: uuid(),
            nome: values.nome,
            numero: geraNumeroCartao(),
            // numero: `...${geraNumeroCartao().substring(14)}`,
            cvv: geraNumeroCVV(),
            validade: "06/32",
          }])
          setModalVisible1(!modalVisible1);
        }}
      />
      {/* Arrumar */}
      <ModalCartao
        modalVisible={modalVisible2}
        setModalVisible={setModalVisible2}
        onSubmit={values => {
          setListaCartaoTemporario([...listaCartaoTemporario, {
            id: uuid(),
            nome: values.nome,
            numero: geraNumeroCartao(),
            cvv: geraNumeroCVV(),
            validade: "06/32",
          }])
          setModalVisible2(!modalVisible2);
        }}
      />
      {/* Arrumar */}
      <ModalCartao
        modalVisible={modalVisible3}
        setModalVisible={setModalVisible3}
        onSubmit={values => {
          setListaCartaoVirtual([...listaCartaoVirtual, {
            id: uuid(),
            nome: values.nome,
            numero: geraNumeroCartao(),
            cvv: geraNumeroCVV(),
            validade: "06/32",
          }])
          setModalVisible3(!modalVisible3);
        }}
      />
    </Container>
  );
}
