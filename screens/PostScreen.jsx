import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/global";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllPosts, getCommentsForPost } from "../utils/firestore";
import PostsItem from "../components/PostsItem";

const PostsScreen = () => {
  const user = useSelector((state) => state.user.userInfo);
  const [posts, setPosts] = useState([]);
  const [commentsCount, setCommentsCount] = useState({});
  const [commentsPost, setCommentsPost] = useState({});

  const getPosts = async () => {
    const newPosts = await getAllPosts();
    if (JSON.stringify(newPosts) !== JSON.stringify(posts)) {
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

  return (
    <View>
      <View style={styles.container}>
        {user?.avatar ? (
          <Image style={styles.imgContainer} source={{ uri: user.avatar }} />
        ) : (
          <Image
            style={styles.imgContainer}
            source={require("../assets/images/defaultAvatar.png")}
          />
        )}
        <View
          style={[styles.innerContainer, { position: "absolute", left: 84 }]}
        >
          <Text style={styles.name}>{user?.login || "User Name"}</Text>
          <Text style={styles.email}>{user?.email || "email@example.com"}</Text>
        </View>
      </View>
      <View style={{ marginTop: 124, paddingLeft: 16, marginBottom: 30 }}>
        <ScrollView contentContainerStyle={{ gap: 35, paddingBottom: 46 }}>
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

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: "row",
  },
  imgContainer: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginTop: 32,
    marginLeft: 16,
  },
  innerContainer: {
    paddingTop: 45,
    paddingLeft: 8,
  },
  name: {
    color: colors.blackPrimary,
    fontSize: 13,
    fontWeight: "bold",
  },
  email: {
    color: "rgba(33, 33, 33, 0.80)",
    fontSize: 11,
    fontWeight: "400",
  },
});
