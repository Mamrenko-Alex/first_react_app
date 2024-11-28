import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const ButtonWidthAll = ({ onPress, title, newStyles, newTextStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, newStyles]} onPress={onPress}>
      <Text style={[styles.buttonText, newTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 343,
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ButtonWidthAll;
