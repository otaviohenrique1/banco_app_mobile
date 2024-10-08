import { Button, Text, View, TouchableOpacity } from "react-native";
import Container from "../../components/Container";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../components/Input";
import { Botao } from "../../components/Botao";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackRootStaticParamList } from "../../routes";
import React, { useContext } from "react";
import { BotaoVoltar } from "../../components/BotaoVoltar";
import UsuarioContext from "../../context/usuario";
import { v4 as uuid } from "uuid";
import { validateCPF } from "../../utils";
import MaskInput, { Masks } from 'react-native-mask-input';
import { InputMask } from "../../components/InputMask";

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
    .oneOf([Yup.ref('senha')], 'Senhas diferentes')
    .required("Campo vazio"),
  cpf: Yup.string()
    .required("Campo vazio")
    .test('cpf-valido', 'CPF inválido', (value) => validateCPF(value || '')),
  // .test(),
});

interface FormTypes {
  nome: string;
  email: string;
  senha: string;
  confimarSenha: string;
  cpf: string;
}

const valoresIniciais: FormTypes = {
  nome: "",
  email: "",
  senha: "",
  confimarSenha: "",
  cpf: "",
};

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "Cadastro">;

export default function Cadastro({ navigation }: Props) {
  const { listaUsuarios, setListaUsuarios } = useContext(UsuarioContext);

  return (
    <>
      <BotaoVoltar navigation={navigation} />
      <Container>
        <View style={styles.container}>
          <View style={styles.areaTitulo}>
            <Text style={styles.titulo}>Cadastro</Text>
          </View>
          <Formik
            initialValues={valoresIniciais}
            onSubmit={(values, helpers) => {
              setListaUsuarios([...listaUsuarios, {
                id: uuid(),
                nome: values.nome,
                cpf: values.cpf,
                senha: values.senha,
                saldo: 0,
              }]);
              helpers.resetForm();
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
                <InputMask
                  handleChange={handleChange("cpf")}
                  handleBlur={handleBlur("cpf")}
                  values={values.cpf}
                  errors={errors.cpf}
                  touched={touched.cpf}
                  placeholder="CPF"
                />
                <View style={styles.areaBotoes}>
                  <Botao
                    backgroundColor="blue"
                    textColor="white"
                    onPress={() => handleSubmit()}
                    label="Salvar"
                    marginTop={10}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </Container>
    </>
  );
}
