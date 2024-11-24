import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import PrimaryScreen from "../components/PrimaryScreen";
import InputField from "../components/InputField";
import ButtonWidthAll from "../components/Buttons/ButtonWidthAll";

const LoginScreen = ({ navigation }) => {
  const [inputQuery, setInputQuery] = useState({ email: "", password: "" });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlerInputChange = (value, input) => {
    setInputQuery((prev) => ({ ...prev, [input]: value }));
  };

  const handlerShowPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handlerOnLogin = () => {
    console.log("Your login information", inputQuery);
    navigation.navigate("Home");
  };

  const handlerRegistration = () => {
    navigation.navigate("Registration");
  };

  return (
    <PrimaryScreen>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Увійти</Text>
          <InputField
            placeholder="Адреса електронної пошти"
            onChangeText={(value) => handlerInputChange(value, "email")}
          />
          <InputField
            placeholder="Пароль"
            isPassword={true}
            secureTextEntry={!isPasswordVisible}
            onChangeText={(value) => handlerInputChange(value, "password")}
          >
            <Text onPress={handlerShowPassword} style={styles.showPasswordText}>
              {isPasswordVisible ? "Сховати" : "Показати"}
            </Text>
          </InputField>
          <ButtonWidthAll title="Увійти" onPress={handlerOnLogin} />
          <Text style={styles.loginText}>Вже є акаунт? Увійти</Text>
        </View>
      </TouchableWithoutFeedback>
    </PrimaryScreen>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 489,
    width: "100%",
    padding: 16,
    backgroundColor: "#fff",
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: "center",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    marginTop: 92,
    marginBottom: 32,
  },
  showPasswordText: {
    color: "#1B4371",
    fontFamily: "Roboto",
    fontSize: 16,
  },
  loginText: {
    fontSize: 16,
    color: "#1B4371",
    marginBottom: 78,
  },
});

export default LoginScreen;
