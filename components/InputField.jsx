import React from "react";

import { StyleSheet, TextInput, View } from "react-native";

export default InputField = ({
  placeholder,
  secureTextEntry,
  isPassword,
  children,
}) => {
  return (
    <View style={isPassword ? styles.passwordContainer : styles.inputContainer}>
      <TextInput
        style={isPassword ? styles.inputPassword : styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
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
  input: {
    fontSize: 16,
    flex: 1,
  },
  inputPassword: {
    fontSize: 16,
    flex: 1,
  },
});
