import { Text, View } from "react-native";
import Container from "../../components/Container";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../components/Input";
import { Botao } from "../../components/Botao";
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeStackRootStaticParamList } from "../../routes";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido")
    .required("Campo vazio"),
  senha: Yup.string()
    .min(8, "Minimo de 8 caracteres")
    .max(50, "Maximo de 50 caracteres")
    .required("Campo vazio"),
});

interface FormTypes {
  email: string;
  senha: string;
}

const valoresIniciais: FormTypes = {
  email: "",
  senha: "",
};

type Props = NativeStackScreenProps<NativeStackRootStaticParamList, "Login">;

export default function Login({ navigation }: Props) {
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.areaTitulo}>
          <Text style={styles.titulo} >Banco APP</Text>
        </View>
        <Formik
          initialValues={valoresIniciais}
          onSubmit={values => {
            
            navigation.navigate("HomePage");
          }}
          validationSchema={schema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.formulario}>
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
