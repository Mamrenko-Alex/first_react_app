import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/global";

const CommentsItem = ({
  message,
  date,
  avatar,
  containerStyle,
  avatarStyle,
}) => {
  return (
    <View style={[styles.commentContainer, containerStyle]}>
      <Image style={[styles.avatarImage, avatarStyle]} source={avatar} />
      <View style={styles.textBlock}>
        <Text style={styles.commentText}>{message}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarImage: {
    width: 28,
    height: 28,
    borderRadius: 28,
  },
  commentContainer: {
    alignItems: "flex-start",
    maxWidth: "100%",
  },
  textBlock: {
    flex: 1,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 8,
  },
  commentText: {
    color: colors.blackPrimary,
    fontSize: 13,
    fontWeight: "400",
  },
  dateText: {
    color: colors.gray,
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    marginTop: 8,
  },
});

export default CommentsItem;
