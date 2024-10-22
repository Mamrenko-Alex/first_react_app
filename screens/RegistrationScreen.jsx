import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

export default RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/photo-bg.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.formContainer}>
          <View style={styles.avatarPlaceholder}></View>
          <Svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            style={styles.addIconImage}
          >
            <Circle cx="12.5" cy="12.5" r="12" fill="white" stroke="#FF6C00" />
            <Path d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z" fill="#FF6C00" />
          </Svg>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput style={styles.input} placeholder="Логін" />
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.inputPassword}
              placeholder="Пароль"
              secureTextEntry={true}
            />
            <Text style={styles.showPasswordText}>Показати</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>Вже є акаунт? Увійти</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  formContainer: {
    position: "absolute",
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
    bottom: 0,
  },
  avatarContainer: {
    width: 120,
    height: 120,
  },
  avatarPlaceholder: {
    position: "absolute",
    top: -60,
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
    top: 21,
    right: 132,
  },
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    marginTop: 92,
    marginBottom: 32,
  },
  input: {
    fontSize: 16,
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 43,
  },
  inputPassword: {
    fontSize: 16,
    fontFamily: "Roboto",
    flex: 1,
  },
  showPasswordText: {
    color: "#1B4371",
    fontFamily: "Roboto",
    fontSize: 16,
  },
  button: {
    width: "100%",
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    borderRadius: 100,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginText: {
    fontSize: 16,
    color: "#1B4371",
    marginBottom: 78,
  },
});
