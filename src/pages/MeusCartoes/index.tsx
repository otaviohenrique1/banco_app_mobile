import { ScrollView, TouchableOpacity, View } from "react-native";
import Container from "../../components/Container";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackRootStaticParamList } from "../../routes";
import Constants from "expo-constants";
import { ListaCartoesTypes, NovoCartao } from "../../components/NovoCartao";
import { useState } from "react";
import { geraNumeroCartao, geraNumeroCVV } from "../../utils";
import { FormikHelpers } from "formik";
import { ModalCartao } from "../../components/ModalCartao";

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "MeusCartoes">;

export default function MeusCartoes({ navigation }: Props) {
  const [listaCartaoFisico, setListaCartaoFisico] = useState<ListaCartoesTypes[]>([]);
  const [listaCartaoTemporario, setListaCartaoTemporario] = useState<ListaCartoesTypes[]>([]);
  const [listaCartaoVirtual, setListaCartaoVirtual] = useState<ListaCartoesTypes[]>([]);
  const [modalVisible1, setModalVisible1] = useState<boolean>(false);
  const [modalVisible2, setModalVisible2] = useState<boolean>(false);
  const [modalVisible3, setModalVisible3] = useState<boolean>(false);

  return (
    <Container>
      <ScrollView>
        <View style={{ marginTop: Constants.statusBarHeight, }}>
          <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-sharp" size={24} color="black" />
          </TouchableOpacity>
          <NovoCartao
            destino="CartaoFisico"
            listaCartoes={listaCartaoFisico}
            navigation={navigation}
            titulo="Cartão Fisíco"
            listaCartoesBotaoAdicionar={() => setModalVisible1(true)}
          />
          <NovoCartao
            destino="CartaoTemporario"
            listaCartoes={listaCartaoTemporario}
            navigation={navigation}
            titulo="Cartão Temporário"
            listaCartoesBotaoAdicionar={() => setModalVisible2(true)}
          />
          <NovoCartao
            destino="CartaoVirtual"
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
            nome: values.nome,
            numero: `...${geraNumeroCartao().substring(14)}`,
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
            nome: values.nome,
            numero: `...${geraNumeroCartao().substring(14)}`,
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
            nome: values.nome,
            numero: `...${geraNumeroCartao().substring(14)}`,
            cvv: geraNumeroCVV(),
            validade: "06/32",
          }])
          setModalVisible3(!modalVisible3);
        }}
      />
    </Container>
  );
}
