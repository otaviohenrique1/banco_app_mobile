import { Button, Text, View, TouchableOpacity } from "react-native";
import Container from "../../components/Container";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../components/Input";
import { Botao } from "../../components/Botao";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackRootStaticParamList } from "../../routes";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { BotaoVoltar } from "../../components/BotaoVoltar";

const schema = Yup.object().shape({
  nome: Yup.string()
    .required("Campo vazio"),
  email: Yup.string()
    .email("Email inválido")
    .required("Campo vazio"),
  senha: Yup.string()
    .min(8, "Minimo de 8 caracteres")
    .max(50, "Maximo de 50 caracteres")
    .required("Campo vazio"),
  confimarSenha: Yup.string()
    .min(8, "Minimo de 8 caracteres")
    .max(50, "Maximo de 50 caracteres")
    .oneOf([Yup.ref('password')], 'Senhas diferentes')
    .required("Campo vazio"),
});

interface FormTypes {
  nome: string;
  email: string;
  senha: string;
  confimarSenha: string;
}

const valoresIniciais: FormTypes = {
  nome: "",
  email: "",
  senha: "",
  confimarSenha: "",
};

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "Cadastro">;

export default function Cadastro({ navigation }: Props) {
  return (
    <>
      <BotaoVoltar navigation={navigation}/>
      <Container>
        <View style={styles.container}>
          <View style={styles.areaTitulo}>
            <Text style={styles.titulo}>Cadastro</Text>
          </View>
          <Formik
            initialValues={valoresIniciais}
            onSubmit={values => {
              navigation.navigate("Login");
            }}
            validationSchema={schema}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View style={styles.formulario}>
                <Input
                  handleChange={handleChange("nome")}
                  handleBlur={handleBlur("nome")}
                  values={values.nome}
                  errors={errors.nome}
                  touched={touched.nome}
                  placeholder="Nome"
                />
                <Input
                  handleChange={handleChange("email")}
                  handleBlur={handleBlur("email")}
                  values={values.email}
                  errors={errors.email}
                  touched={touched.email}
                  placeholder="Email"
                />
                <Input
                  handleChange={handleChange("senha")}
                  handleBlur={handleBlur("senha")}
                  values={values.senha}
                  errors={errors.senha}
                  touched={touched.senha}
                  placeholder="Senha"
                  secureTextEntry
                />
                <Input
                  handleChange={handleChange("confimarSenha")}
                  handleBlur={handleBlur("confimarSenha")}
                  values={values.confimarSenha}
                  errors={errors.confimarSenha}
                  touched={touched.confimarSenha}
                  placeholder="Confimar senha"
                  secureTextEntry
                />
                <View style={styles.areaBotoes}>
                  <Botao
                    backgroundColor="blue"
                    textColor="white"
                    onPress={() => handleSubmit()}
                    label="Salvar"
                    marginTop={10}
                  />
                  {/* <Botao
                    backgroundColor="red"
                    textColor="white"
                    onPress={() => navigation.canGoBack()}
                    label="Voltar"
                    marginTop={10}
                  /> */}
                </View>
              </View>
            )}
          </Formik>
        </View>
      </Container>
    </>
  );
}
