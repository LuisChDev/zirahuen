import { Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";

import { styles } from "./styles";
import { useUserStore } from "./store";

const Signup = () => {
  const signup = (name) => useUserStore((state) => state.login(name));

  return (
    <Formik
      initialValues={{ username: "", password: "", confirm: "" }}
      onSubmit={(values) => signup(values.username)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <Text>Welcome to Zirahuen</Text>
          <Text>Please log-in</Text>

          <View>
            <TextInput
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Signup;
