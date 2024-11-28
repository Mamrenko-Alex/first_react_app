import { Dimensions, Image, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const BackgroundImg = () => {
  return (
    <Image
      style={styles.backgroundImg}
      source={require("../assets/images/photo-bg.jpg")}
    />
  );
};

export default BackgroundImg;

const styles = StyleSheet.create({
  backgroundImg: {
    position: "absolute",
    height: height,
    width: width,
  },
});
