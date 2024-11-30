import React, { useState, useRef, useEffect } from "react";
import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Button,
} from "react-native";
import { colors } from "../styles/global";
import CameraIcon from "../assets/icons/camera-icon.svg";
import LocationIcon from "../assets/icons/location-icon.svg";
import ButtonWidthAll from "../components/Buttons/ButtonWidthAll";
import LightInputField from "../components/LightInputField";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

const { width } = Dimensions.get("window");

const CreatePostsScreen = () => {
  const [inputQuery, setInputQuery] = useState({ name: "", location: "" });
  const [permission, requestPermission] = useCameraPermissions();
  const [isPreview, setIsPreview] = useState(false);
  const [photoUri, setPhotoUri] = useState(null);
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    const checkCameraPermission = async () => {
      if (!permission || !permission.granted) {
        const { status } = await requestPermission();
        if (status !== "granted") {
          alert("We need your permission to access the camera.");
        }
      }
    };

    checkCameraPermission();
  }, []);

  const getCurrentLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return null;
      }

      const location = await Location.getCurrentPositionAsync({});
      return {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
    } catch (error) {
      console.error("Error getting location:", error);
      return null;
    }
  };

  const handlerInputChange = (value, input) => {
    setInputQuery((prev) => ({ ...prev, [input]: value }));
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data?.uri;
      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        setPhotoUri(source); // Зберігаємо URI фото
      }
    }
  };

  const handlerCreatePost = async () => {
    const location = await getCurrentLocation();
    if (location) {
      const formattedLocation = `Lat: ${location.latitude}, Lng: ${location.longitude}`;
      setInputQuery((prev) => ({ ...prev, location: formattedLocation }));
    }

    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  // Перевірка, чи всі поля заповнені
  const isButtonActive =
    inputQuery.name.trim() !== "" &&
    inputQuery.location.trim() !== "" &&
    photoUri !== null;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.cameraContainer}>
          <CameraView style={styles.camera} ref={cameraRef}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.containerPhoto}
                onPress={takePicture}
              >
                <CameraIcon />
              </TouchableOpacity>
            </View>
          </CameraView>
        </View>

        <TouchableOpacity style={styles.btnUpload}>
          <Text style={styles.text}>Завантажте фото</Text>
        </TouchableOpacity>

        <View style={styles.containerInput}>
          <LightInputField
            primeStyle={styles.borderBottom}
            placeholder={"Назва..."}
            value={inputQuery.name}
            onChangeText={(text) => handlerInputChange(text, "name")}
          />
        </View>
        <View style={[styles.borderBottom, styles.containerLocation]}>
          <LocationIcon />
          <LightInputField
            placeholder={"Місцевість..."}
            value={inputQuery.location}
            onChangeText={(text) => handlerInputChange(text, "location")}
          />
        </View>

        <ButtonWidthAll
          newStyles={{
            backgroundColor: isButtonActive ? "#FF6C00" : colors.lightGrey,
            marginTop: 32,
          }}
          onPress={isButtonActive ? handlerCreatePost : null}
          title={"Опублікувати"}
          newTextStyle={[
            styles.textBtn,
            { color: isButtonActive ? "#fff" : colors.gray },
          ]}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  cameraContainer: {
    height: 240,
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 32,
    backgroundColor: colors.borderGray,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: "bold",
  },
  containerPhoto: {
    borderRadius: 8,
    width: width - 32,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
  },
  btnUpload: {
    marginTop: 8,
  },
  containerInput: {
    paddingVertical: 32,
    gap: 16,
  },
  containerLocation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: colors.borderGray,
    paddingVertical: 16,
  },
  textBtn: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: "400",
  },
});

export default CreatePostsScreen;
