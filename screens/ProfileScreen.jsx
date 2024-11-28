import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import {
  baseTypography,
  container,
  plusContainer,
  registrationAndLoginContainer,
  title,
  wrapperAvatar,
} from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import BackgroundImg from "../components/BackgroundImg";
import CloseIcon from "../assets/icons/close-icon.svg";
import LogoutIcon from "../assets/icons/logout-icon.svg";
import PostsItem from "../components/PostsItem";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const onLogout = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={container}>
      <BackgroundImg />
      <View style={[styles.innerContainer, registrationAndLoginContainer]}>
        <View style={wrapperAvatar}>
          <Image
            source={require("../assets/images/user-avatar.jpg")}
            style={styles.avatar}
          />
          <TouchableOpacity
            style={[plusContainer, { borderColor: "transparent" }]}
          >
            <CloseIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.logoutBtn}>
          <TouchableOpacity onPress={onLogout}>
            <LogoutIcon />
          </TouchableOpacity>
        </View>
        <Text style={[title, baseTypography, { paddingTop: 40 }]}>
          Natali Romanova
        </Text>
        <ScrollView contentContainerStyle={{ gap: 35, paddingBottom: 126 }}>
          <PostsItem
            sourceImg={require("../assets/images/forest.jpg")}
            title={"Ліс"}
            commentsCount={8}
            likesCount={153}
            place={"Ukraine"}
            lat={48.160076}
            lon={24.49985}
          />
          <PostsItem
            sourceImg={require("../assets/images/sunset.jpg")}
            title={"Захід на Чорному морі"}
            commentsCount={3}
            likesCount={200}
            place={"Ukraine"}
            lat={46.225713}
            lon={30.610853}
          />
          <PostsItem
            sourceImg={require("../assets/images/old-house-venice.png")}
            title={"Старий будиночок у Венеції"}
            commentsCount={50}
            likesCount={200}
            place={"Italy"}
            lat={41.92041}
            lon={12.391017}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    height: "82%",
  },
  logoutBtn: {
    marginTop: 22,
    alignItems: "flex-end",
  },
  avatar: {
    borderRadius: 8,
  },
});

export default ProfileScreen;
