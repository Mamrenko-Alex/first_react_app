import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CommentIcon from "../assets/icons/comment-icon.svg";
import LikeIcon from "../assets/icons/like-icon.svg";
import LocationIcon from "../assets/icons/location-icon.svg";
import { colors } from "../styles/global";
import { useNavigation } from "@react-navigation/native";

const PostsItem = ({
  sourceImg,
  title,
  commentsCount,
  likesCount,
  place,
  lat,
  lon,
}) => {
  const navigation = useNavigation();

  const navigateToComments = () => {
    navigation.navigate("Comments");
  };

  const navigateToLocation = () => {
    navigation.navigate("Location", { latitude: lat, longitude: lon });
  };

  return (
    <View>
      <Image style={styles.photo} source={sourceImg} />
      <Text style={styles.imageTitle}>{title}</Text>
      <View style={styles.detailsContainer}>
        <View style={{ flexDirection: "row", gap: 24 }}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={navigateToComments}
          >
            <CommentIcon />
            <Text style={styles.actionText}>{commentsCount}</Text>
          </TouchableOpacity>
          <View style={styles.actionButton}>
            <LikeIcon />
            <Text style={styles.actionText}>{likesCount}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={navigateToLocation}
        >
          <LocationIcon />
          <Text
            style={[styles.actionText, { textDecorationLine: "underline" }]}
          >
            {place}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageTitle: {
    paddingTop: 16,
    color: colors.blackPrimary,
    fontSize: 16,
    fontWeight: "500",
  },
  photo: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  actionText: {
    fontSize: 16,
    color: colors.blackPrimary,
    fontWeight: "400",
  },
});

export default PostsItem;
