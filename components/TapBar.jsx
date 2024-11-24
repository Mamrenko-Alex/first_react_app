import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import ButtonComponent from "./components/ButtonComponent";

export default TapBar = () => {
  const handleAdd = () => {
    return;
  };

  return (
    <View style={styles.container}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <Rect width="24" height="24" fill="white" />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 3H10V10H3V3Z"
          stroke="#212121"
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 3H21V10H14V3Z"
          stroke="#212121"
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 14H21V21H14V14Z"
          stroke="#212121"
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 14H10V21H3V14Z"
          stroke="#212121"
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      <ButtonComponent title="+" width={70} onPress={handleAdd} />
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <Path
          d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
          stroke="#212121"
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
          stroke="#212121"
          stroke-opacity="0.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
