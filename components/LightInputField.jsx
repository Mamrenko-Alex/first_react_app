import React, { useState } from "react";
import { TextInput } from "react-native";

export default LightInputField = ({
  placeholder,
  secureTextEntry,
  onChangeText,
  primeStyle,
  value,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={primeStyle}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onChangeText={onChangeText}
    />
  );
};
