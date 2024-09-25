import { Button, Text, View, TouchableOpacity } from "react-native";
import Container from "../../components/Container";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../components/Input";
import { Botao } from "../../components/Botao";
import { styles } from "./styles";

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

export default function Cadastro() {
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.areaTitulo}>
          <Text style={styles.titulo}>Cadastro</Text>
        </View>
        <Formik
          initialValues={valoresIniciais}
          onSubmit={values => console.log(values)}
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
              <Botao
                backgroundColor="blue"
                textColor="white"
                onPress={() => handleSubmit()}
                label="Salvar"
                marginTop={10}
              />
            </View>
          )}
        </Formik>
      </View>
    </Container>
  );
}
