import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import PrimaryScreen from "@/components/PrimaryScreen";
import InputField from "@/components/InputField";
import ButtonComponent from "@/components/ButtonComponent";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <PrimaryScreen>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Увійти</Text>
          <InputField
            placeholder="Адреса електронної пошти"
            onChangeText={setEmail}
          ></InputField>
          <InputField
            placeholder="Пароль"
            isPassword={true}
            secureTextEntry={true}
            onChangeText={setPassword}
          >
            <Text style={styles.showPasswordText}>Показати</Text>
          </InputField>
          <ButtonComponent title="Увійти" onPress={handleLogin} />
          {/* <ButtonComponent title="Увійти" /> */}
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
