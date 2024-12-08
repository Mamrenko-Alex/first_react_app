import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import BackgroundImg from "../components/BackgroundImg";
import InputField from "../components/InputField";
import ButtonWidthAll from "../components/Buttons/ButtonWidthAll";
import AuthPrompt from "../components/AuthPromt";
import * as ImagePicker from "expo-image-picker";
import AddIcon from "../assets/icons/add-icon.svg";
import CloseIcon from "../assets/icons/close-icon.svg";

const RegistrationScreen = ({ navigation }) => {
  const [registerQuery, setRegisterQuery] = useState({
    login: "",
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handlerInputChange = (value, input) => {
    setRegisterQuery((prev) => ({ ...prev, [input]: value }));
  };

  const handlerLogin = () => {
    navigation.navigate("Login");
  };

  const handlerShowPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handlerOnRegistration = () => {
    console.log("New user is registered", registerQuery, selectedImg);
    navigation.navigate("Home");
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Access to the media library is required to select an image.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setSelectedImg(uri);
    }
  };

  const handlerDeleteAvatar = () => {
    setSelectedImg(null);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <BackgroundImg />
        <View style={styles.formContainer}>
          <View style={styles.avatarContainer}>
            {selectedImg ? (
              <Image source={{ uri: selectedImg }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}></View>
            )}
            <TouchableOpacity
              style={styles.avatarActionButton}
              onPress={selectedImg ? handlerDeleteAvatar : pickImage}
            >
              {selectedImg ? (
                <CloseIcon width={24} height={24} />
              ) : (
                <AddIcon width={24} height={24} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <InputField
            placeholder="Логін"
            onChangeText={(value) => handlerInputChange(value, "login")}
          ></InputField>
          <InputField
            placeholder="Адреса електронної пошти"
            onChangeText={(value) => handlerInputChange(value, "email")}
          ></InputField>
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
          <ButtonWidthAll
            title="Зареєструватися"
            onPress={handlerOnRegistration}
          />
          <AuthPrompt
            primeStyle={styles.loginText}
            handlerTouch={handlerLogin}
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
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    objectFit: "cover",
    marginBottom: 32,
  },
  avatarActionButton: {
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

export default RegistrationScreen;
