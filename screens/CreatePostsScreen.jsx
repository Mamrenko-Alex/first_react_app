import {
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { colors } from "../styles/global";
import { useState } from "react";
import ButtonWidthAll from "../components/Buttons/ButtonWidthAll";
import CameraIcon from "../assets/icons/camera-icon.svg";
import LocationIcon from "../assets/icons/location-icon.svg";
import LightInputField from "../components/LightInputField";

const { width } = Dimensions.get("window");

const CreatePostsScreen = () => {
  const [inputQuery, setInputQuery] = useState({ name: "", location: "" });

  const handlerInputChange = (value, input) => {
    setInputQuery((prev) => ({ ...prev, [input]: value }));
    console.log(inputQuery);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.containerPhoto}>
          <CameraIcon />
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
          newStyles={{ backgroundColor: colors.lightGrey, marginTop: 32 }}
          onPress={() => console.log("publish photo")}
          title={"Опублікувати"}
          newTextStyle={styles.textBtn}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  containerPhoto: {
    backgroundColor: colors.borderGray,
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
  text: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: "400",
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
