import { Button, Text, View, TouchableOpacity } from "react-native";
import Container from "../../components/Container";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../components/Input";

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

export default function Login() {
  return (
    <Container>
      <Formik
        initialValues={valoresIniciais}
        onSubmit={values => console.log(values)}
        validationSchema={schema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={{ margin: 20 }}>
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
            />
            <TouchableOpacity style={{ padding: 20, backgroundColor: "blue", alignItems: "center", marginTop: 30 }} onPress={() => handleSubmit()}>
              <Text style={{ color: "white" }}>Entrar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </Container>
  );
}
