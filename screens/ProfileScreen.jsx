import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import BackgroundImg from "../components/BackgroundImg";
import {
  baseTypography,
  container,
  plusContainer,
  registrationAndLoginContainer,
  title,
  wrapperAvatar,
} from "../styles/global";
import CloseIcon from "../assets/icons/close-icon.svg";
import LogoutIcon from "../assets/icons/logout-icon.svg";
import AddAvatarIcon from "../assets/icons/add-avatar-icon.svg";
import PostsItem from "../components/PostsItem";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useState } from "react";
import { logoutDB } from "../utils/auth";
import { deleteImage, handleImageUpload } from "../utils/imageUtils";
import {
  getCommentsForPost,
  getUserPosts,
  updateUserInFirestore,
} from "../utils/firestore";
import { setAvatarPath, setUserInfo } from "../redux/reducer";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);
  const avatarPath = useSelector((state) => state.user.avatarPath);
  const [posts, setPosts] = useState([]);
  const [commentsCount, setCommentsCount] = useState({});
  const [commentsPost, setCommentsPost] = useState({});

  const getPosts = async () => {
    if (user) {
      const newPosts = await getUserPosts(user.uid);
      setPosts(newPosts);
    }
  };

  const fetchCommentsCount = async () => {
    const counts = {};
    const commentsP = {};
    for (const post of posts) {
      const comments = await getCommentsForPost(post.id);
      counts[post.id] = comments.length;
      commentsP[post.id] = comments;
    }
    setCommentsCount(counts);
    setCommentsPost(commentsP);
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      fetchCommentsCount();
    }
  }, [posts]);

  const onLogout = () => logoutDB(dispatch);

  const handlerDeleteAvatar = async () => {
    if (avatarPath) {
      deleteImage(avatarPath);
    }
    if (user) {
      updateUserInFirestore(user.uid, { avatar: "" });
      dispatch(setUserInfo({ ...user, avatar: "" }));
      dispatch(setAvatarPath(""));
    }
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });
    if (!result.canceled && user) {
      const uri = result.assets[0].uri;
      const response = await fetch(uri);
      const file = await response.blob();
      const fileName = uri.split("/").pop() || "avatar";
      const dirName = "avatars";
      const imageFile = new File([file], fileName, { type: file.type });
      const imageUrl = await handleImageUpload(
        user.uid,
        imageFile,
        fileName,
        dirName,
        dispatch
      );
      updateUserInFirestore(user.uid, { avatar: imageUrl });
      dispatch(setUserInfo({ ...user, avatar: imageUrl }));
    }
  };

  return (
    <View style={container}>
      <BackgroundImg />
      <View style={[styles.innerContainer, registrationAndLoginContainer]}>
        <View style={{ marginBottom: 92 }}>
          <View style={[wrapperAvatar, { marginLeft: 0 }]}>
            {user?.avatar ? (
              <Image style={styles.avatar} source={{ uri: user.avatar }} />
            ) : (
              <Image
                style={[styles.avatar, { backgroundColor: "#E0E0E0" }]}
                source={require("../assets/images/defaultAvatar.png")}
              />
            )}
            <TouchableOpacity
              style={plusContainer}
              onPress={user?.avatar ? handlerDeleteAvatar : pickImage}
            >
              {user?.avatar ? <CloseIcon /> : <AddAvatarIcon />}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.logoutBtn}>
          <TouchableOpacity onPress={onLogout}>
            <LogoutIcon />
          </TouchableOpacity>
        </View>
        <Text style={[title, baseTypography, { paddingTop: 0 }]}>
          {user?.login}
        </Text>
        <ScrollView contentContainerStyle={{ gap: 35 }}>
          {posts.map(({ imageUrl, place, title, id }) => (
            <PostsItem
              key={id}
              sourceImg={imageUrl}
              title={title}
              commentsCount={commentsCount[id]}
              likesCount={"153"}
              place={place}
              lat={48.160076}
              lon={24.49985}
              postId={id}
              comments={commentsPost[id]}
            />
          ))}
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
    position: "absolute",
    right: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    resizeMode: "cover",
  },
});

export default ProfileScreen;
