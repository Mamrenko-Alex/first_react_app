import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AuthPrompt = ({ answer, textBtn, handlerTouch, primeStyle }) => {
  return (
    <View style={styles.textLinkContainer}>
      <Text style={[primeStyle, styles.rightMargin]}>{answer}</Text>
      <TouchableOpacity onPress={handlerTouch}>
        <Text style={[primeStyle, styles.underline]}>{textBtn}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthPrompt;

const styles = StyleSheet.create({
  textLinkContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  underline: {
    textDecorationLine: "underline",
  },
  rightMargin: {
    marginRight: 2,
  },
});
