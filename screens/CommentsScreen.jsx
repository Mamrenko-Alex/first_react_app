import React, { useState } from "react";
import {
  Image,
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { colors } from "../styles/global";
import CommentsItem from "../components/CommentsItem";
import ArrowUpIcon from "../assets/icons/arrow-up.svg";

const CommentsScreen = () => {
  const [userComment, setUserComment] = useState("");

  const handleInputChange = (text) => {
    setUserComment(text);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screenContainer}>
        <Image
          style={[styles.photo, { marginTop: 32 }]}
          source={require("../assets/images/sunset.jpg")}
        />
        <View style={styles.commentsSection}>
          <CommentsItem
            comment={
              "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
            }
            commentDate={"09 червня, 2020 | 08:40"}
            icon={require("../assets/images/user-avatar.jpg")}
            containerStyle={{ flexDirection: "row" }}
            iconStyle={{ marginRight: 16 }}
          />
          <CommentsItem
            comment={
              "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images."
            }
            commentDate={"09 червня, 2020 | 09:14"}
            icon={require("../assets/images/user-avatar.jpg")}
            containerStyle={{ flexDirection: "row-reverse" }}
            iconStyle={{ marginLeft: 16 }}
          />
          <CommentsItem
            comment={"Thank you! That was very helpful!"}
            commentDate={"09 червня, 2020 | 09:20"}
            icon={require("../assets/images/user-avatar.jpg")}
            containerStyle={{ flexDirection: "row" }}
            iconStyle={{ marginRight: 16 }}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            value={userComment}
            onChangeText={handleInputChange}
            placeholder={"Коментувати..."}
            style={styles.input}
          />
          <ArrowUpIcon />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  commentsSection: {
    paddingTop: 32,
    gap: 24,
  },
  photo: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
    backgroundColor: colors.lightGrey,
    borderRadius: 100,
    borderColor: colors.borderGray,
    borderWidth: 1,
    paddingVertical: 8,
    paddingRight: 8,
    paddingLeft: 16,
  },
  input: {
    flex: 1,
  },
});

export default CommentsScreen;
