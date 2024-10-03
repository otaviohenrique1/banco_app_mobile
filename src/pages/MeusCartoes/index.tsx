import { Alert, Modal, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Container from '../../components/Container';
import Sessao from '../../components/Sessao';
import BotaoSeta from '../../components/BotaoSeta';
import { BotaoIconeTexto } from '../../components/BotaoIconeTexto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeStackRootStaticParamList } from '../../routes';
import Constants from "expo-constants";
import { ListaCartoesTypes, NovoCartao } from '../../components/NovoCartao';
import { useState } from 'react';

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "MeusCartoes">;

export default function MeusCartoes({ navigation }: Props) {
  const listaCartaoFisico: ListaCartoesTypes[] = [];
  const listaCartaoTemporario: ListaCartoesTypes[] = [];
  const listaCartaoVirtual: ListaCartoesTypes[] = [];
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <ScrollView>
        <View style={{ marginTop: Constants.statusBarHeight, }}>
          <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-sharp" size={24} color="black" />
          </TouchableOpacity>
          <Text>[{modalVisible}]</Text>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22,
            }}>
              <View style={{
                margin: 20,
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 35,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
                <Text style={{
                  marginBottom: 15,
                  textAlign: 'center'
                }}>Hello World!</Text>
                <Pressable
                  style={[{ backgroundColor: '#F194FF' }, { backgroundColor: '#2196F3' }]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <NovoCartao
            destino="CartaoFisico"
            listaCartoes={listaCartaoFisico}
            navigation={navigation}
            titulo="Cartão Fisíco"
            listaCartoesBotaoAdicionar={() => navigation.navigate("ModalScreen")}
          />
          <NovoCartao
            destino="CartaoTemporario"
            listaCartoes={listaCartaoTemporario}
            navigation={navigation}
            titulo="Cartão Temporário"
            listaCartoesBotaoAdicionar={() => { Alert.alert("asd"); }}
          />
          <NovoCartao
            destino="CartaoVirtual"
            listaCartoes={listaCartaoVirtual}
            navigation={navigation}
            titulo="Cartão Virtual"
            listaCartoesBotaoAdicionar={() => setModalVisible(true)}
          />
        </View>
      </ScrollView>
    </Container>
  );
}
