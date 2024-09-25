import { Button, Text, View, TextInput } from "react-native";
import Container from "../../components/Container";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../components/Input";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  senha: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
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
      <Text>Login</Text>
      <Formik
        initialValues={valoresIniciais}
        onSubmit={values => console.log(values)}
        validationSchema={schema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <Input
              handleChange={handleChange("email")}
              handleBlur={handleBlur("email")}
              values={values.email}
              errors={errors.email}
              touched={touched.email}
            />
            <View style={{ marginBottom: 10 }}>
              <TextInput
                style={{ borderBottomColor: "black", borderBottomWidth: 1 }}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {errors.email && touched.email ? <Text>{errors.email}</Text> : null}
            </View>
            <View style={{ marginBottom: 30 }}>
              <TextInput
                style={{ borderBottomColor: "black", borderBottomWidth: 1 }}
                onChangeText={handleChange("senha")}
                onBlur={handleBlur("senha")}
                value={values.senha}
              />
              {errors.senha && touched.senha ? <Text>{errors.senha}</Text> : null}
            </View>
            <Button onPress={() => handleSubmit()} title="Submit" />
          </View>
        )}
      </Formik>
    </Container>
  );
}
