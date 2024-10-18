import { Alert, Text, View } from "react-native";
import Container from "../../components/Container";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../components/Input";
import { Botao } from "../../components/Botao";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackRootStaticParamList } from "../../routes";
import axios from "axios";
import { validateCPF } from "../../utils";
import { InputMask } from "../../components/InputMask";
import { useContext } from "react";
import { useAuth } from "../../context/autenticacao";
import UsuarioContext from "../../context/usuario";
import AsyncStorage from '@react-native-async-storage/async-storage';

const schema = Yup.object().shape({
  cpf: Yup.string()
    .required("Campo vazio")
    .test('cpf-valido', 'CPF inválido', (value) => validateCPF(value || '')),
  senha: Yup.string()
    .min(8, "Minimo de 8 caracteres")
    .max(50, "Maximo de 50 caracteres")
    .required("Campo vazio"),
});

interface FormTypes {
  cpf: string;
  senha: string;
}

const valoresIniciais: FormTypes = {
  cpf: "",
  senha: "",
};

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "Login">;

export default function Login({ navigation }: Props) {
  const { setIsSignedIn, setToken } = useAuth();
  const { setUsuario } = useContext(UsuarioContext);

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.areaTitulo}>
          <Text style={styles.titulo} >Banco APP</Text>
        </View>
        <Formik
          initialValues={valoresIniciais}
          onSubmit={values => {
            const data = {
              cpf: values.cpf.replace(/[.\-]/g, ""),
              senha: values.senha,
            };

            axios.post("http://10.0.2.2:8000/login/", data,
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            ).then(response => {
              // console.log('Resposta do servidor:', response.data);
              const token = response.data.token;
              const id = response.data.id;
              const cpf = response.data.cpf;
              AsyncStorage.setItem("token", token);
              AsyncStorage.setItem("id", id.toString());
              setToken(token);
              setUsuario({
                id: id,
                cpf: cpf,
              })
              setIsSignedIn(true);
              navigation.replace("HomePage");
            }).catch(error => {
              console.error('Erro na requisição:', error);
            });
          }}
          validationSchema={schema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.formulario}>
              <InputMask
                handleChange={handleChange("cpf")}
                handleBlur={handleBlur("cpf")}
                values={values.cpf}
                errors={errors.cpf}
                touched={touched.cpf}
                placeholder="CPF"
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
              <View style={styles.areaBotoes}>
                <Botao
                  backgroundColor="blue"
                  textColor="white"
                  onPress={() => handleSubmit()}
                  label="Entrar"
                  marginTop={10}
                />
                <Botao
                  backgroundColor="red"
                  textColor="white"
                  onPress={() => navigation.navigate("Cadastro")}
                  label="Cadastrar"
                  marginTop={10}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Container>
  );
}
