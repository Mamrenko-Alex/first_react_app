import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "react-native";
import BackgroundImg from "../components/BackgroundImg";
import InputField from "../components/InputField";
import ButtonWidthAll from "../components/Buttons/ButtonWidthAll";
import AuthPrompt from "../components/AuthPromt";

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
    console.log("User is login", inputQuery);
    navigation.navigate("Home");
  };

  const handlerRegistration = () => {
    navigation.navigate("Registration");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1 }}>
        <BackgroundImg />
        <View style={styles.formContainer}>
          <KeyboardAvoidingView
            style={styles.textStyle}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
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
              <Text
                onPress={handlerShowPassword}
                style={styles.showPasswordText}
              >
                {isPasswordVisible ? "Сховати" : "Показати"}
              </Text>
            </InputField>
          </KeyboardAvoidingView>
          <ButtonWidthAll title="Увійти" onPress={handlerOnLogin} />
          <AuthPrompt
            primeStyle={styles.loginText}
            handlerTouch={handlerRegistration}
            answer={"Немає акаунту?"}
            textBtn={"Зареєструватися"}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    marginTop: 32,
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
  textStyle: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default LoginScreen;
