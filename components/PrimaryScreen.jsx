import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

export default PrimaryScreen = ({ children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/photo-bg.jpg")}
        style={styles.backgroundImage}
      ></ImageBackground>
      {children}
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
});
