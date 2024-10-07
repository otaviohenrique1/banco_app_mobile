import { Modal, Text, TouchableOpacity, View } from "react-native";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Input } from "../Input";
import AntDesign from "@expo/vector-icons/AntDesign";
import { styles } from "./styles";

const schema = Yup.object().shape({
  nome: Yup.string()
    .required("Campo vazio"),
});

interface FormTypes {
  nome: string;
}

const valoresIniciais: FormTypes = {
  nome: "",
};

interface ModalCartaoProps {
  modalVisible: boolean;
  setModalVisible: (value: React.SetStateAction<boolean>) => void;
  onSubmit: ((values: FormTypes, formikHelpers: FormikHelpers<FormTypes>) => void | Promise<any>) & ((values: FormTypes) => void)
}

export function ModalCartao(props: ModalCartaoProps) {
  const { modalVisible, setModalVisible, onSubmit } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalTela}>
        <View style={styles.modalContainer}>
          <View style={styles.tituloContainer}>
            <Text style={styles.titulo}>Novo cartão</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <Formik
            initialValues={valoresIniciais}
            onSubmit={onSubmit}
            validationSchema={schema}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View>
                <Input
                  handleChange={handleChange("nome")}
                  handleBlur={handleBlur("nome")}
                  values={values.nome}
                  errors={errors.nome}
                  touched={touched.nome}
                  placeholder="Nome"
                />
                <View style={styles.areaBotao}>
                  <TouchableOpacity
                    style={styles.botao}
                    onPress={() => handleSubmit()}>
                    <Text style={styles.botaoTexto}>Salvar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </View>
    </Modal>
  );
}
