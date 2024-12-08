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
import { ScrollView } from "react-native-gesture-handler";

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
        <ScrollView
          style={{
            flex: 1,
            marginTop: 32,
            marginBottom: 32,
          }}
        >
          <View style={styles.commentsSection}>
            <CommentsItem
              message={
                "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
              }
              date={"09 червня, 2020 | 08:40"}
              avatar={require("../assets/images/user-avatar-2.jpg")}
              containerStyle={{ flexDirection: "row" }}
              avatarStyle={{ marginRight: 16 }}
            />
            <CommentsItem
              message={
                "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images."
              }
              date={"09 червня, 2020 | 09:14"}
              avatar={require("../assets/images/user-avatar.jpg")}
              containerStyle={{ flexDirection: "row-reverse" }}
              avatarStyle={{ marginLeft: 16 }}
            />
            <CommentsItem
              message={"Thank you! That was very helpful!"}
              date={"09 червня, 2020 | 09:20"}
              avatar={require("../assets/images/user-avatar-2.jpg")}
              containerStyle={{ flexDirection: "row" }}
              avatarStyle={{ marginRight: 16 }}
            />
          </View>
        </ScrollView>
        <View style={styles.inputWrapper}>
          <TextInput
            value={userComment}
            onChangeText={handleInputChange}
            placeholder={"Коментувати..."}
          />
          <ArrowUpIcon style={styles.arow_send} />
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
  arow_send: {
    position: "absolute",
    right: 8,
    top: 11,
  },
});

export default CommentsScreen;
