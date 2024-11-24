import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import PrimaryScreen from "../components/PrimaryScreen";
import InputField from "../components/InputField";
import ButtonWidthAll from "../components/Buttons/ButtonWidthAll";
import AddIcon from "../assets/images/add-icon.svg";

export default RegistrationScreen = () => {
  return (
    <PrimaryScreen>
      <View style={styles.formContainer}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarPlaceholder}></View>
          <AddIcon style={styles.addIconImage} />
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <InputField placeholder="Логін"></InputField>
        <InputField placeholder="Адреса електронної пошти"></InputField>
        <InputField
          placeholder="Пароль"
          isPassword={true}
          secureTextEntry={true}
        >
          <Text style={styles.showPasswordText}>Показати</Text>
        </InputField>
        <ButtonWidthAll title="Зареєструватися" />
        <Text style={styles.loginText}>Вже є акаунт? Увійти</Text>
      </View>
    </PrimaryScreen>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 549,
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
  avatarContainer: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    flexShrink: 0,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 32,
  },
  addIconImage: {
    position: "absolute",
    right: -14,
    bottom: 14,
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
