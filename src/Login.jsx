import { Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";

import { styles } from "./styles";
import { useUserStore } from "./store";

const Login = () => {
  const login = (name) => useUserStore((state) => state.login(name));

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => login(values.username)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <Text>Welcome to Zirahuen</Text>
          <Text>Please log-in</Text>

          <View>
            <Text>username or email</Text>
            <TextInput
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />
            <Text>password</Text>
            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.username}
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Login;
