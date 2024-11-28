import { StyleSheet, TouchableOpacity } from "react-native";

export default SmallButton = ({ children, onPress }) => {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};
