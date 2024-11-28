import React, { useState } from "react";
import { _View, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ArrowBackIcon from "../../assets/icons/arrow-back-icon.svg";
import DeleteIcon from "../../assets/icons/delet-icon.svg";
import PostsIcon from "../../assets/icons/posts-icon.svg";
import AddPostIcon from "../../assets/icons/add-post-icon.svg";
import UserIcon from "../../assets/icons/user-icon.svg";
import LogoutIcon from "../../assets/icons/logout-icon.svg";
import CreatePostsScreen from "../../screens/CreatePostsScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import PostsScreen from "../../screens/PostScreen";
import SmallButton from "../../components/Buttons/SmallButton";
import { colors } from "../../styles/global";

const Tab = createBottomTabNavigator();

const MainNavBar = () => {
  const [activeTab, setActiveTab] = useState("PostsTab");

  return (
    <>
      {activeTab === "CreatePostTab" ? (
        <Tab.Navigator
          screenOptions={{
            tabBarLabel: "",
            headerLeftContainerStyle: { paddingLeft: 16 },
            headerRightContainerStyle: { paddingRight: 16 },
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  width: 70,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: focused ? colors.lightGrey : "transparent",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <DeleteIcon />
              </View>
            ),
            tabBarStyle: {
              paddingTop: 10,
              position: "absolute",
              height: 60,
            },
          }}
        >
          <Tab.Screen
            name="CreatePostTab"
            component={CreatePostsScreen}
            options={({ navigation }) => ({
              headerTitle: "Створити публікацію",
              headerLeft: () => (
                <SmallButton
                  onPress={() =>
                    navigation.reset({
                      index: 0,
                      routes: [{ name: "Home" }],
                    })
                  }
                >
                  <ArrowBackIcon />
                </SmallButton>
              ),
            })}
          />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarLabel: "",
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "#212121",
            headerLeftContainerStyle: { paddingLeft: 16 },
            headerRightContainerStyle: { paddingRight: 16 },
            tabBarStyle: {
              paddingTop: 10,
              position: "absolute",
              height: 60,
            },
            tabBarIcon: ({ focused }) => {
              let IconComponent;

              switch (route.name) {
                case "PostsTab":
                  IconComponent = <PostsIcon />;
                  break;
                case "CreatePostTab":
                  IconComponent = (
                    <View style={styles.addPostBtn}>
                      <AddPostIcon />
                    </View>
                  );
                  break;
                case "ProfileTab":
                  IconComponent = <UserIcon />;
                  break;
                default:
                  break;
              }

              return (
                <View
                  style={{
                    width: 70,
                    height: 40,
                    borderRadius: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {IconComponent}
                </View>
              );
            },
          })}
        >
          <Tab.Screen
            name="PostsTab"
            component={PostsScreen}
            options={({ navigation }) => ({
              headerTitle: "Публікації",
              headerRight: () => (
                <SmallButton onPress={() => navigation.navigate("Login")}>
                  <LogoutIcon />
                </SmallButton>
              ),
            })}
            listeners={{
              focus: () => setActiveTab("PostsTab"),
            }}
          />
          <Tab.Screen
            name="CreatePostTab"
            component={CreatePostsScreen}
            listeners={{
              focus: () => setActiveTab("CreatePostTab"),
            }}
          />
          <Tab.Screen
            name="ProfileTab"
            component={ProfileScreen}
            options={{
              headerShown: false,
            }}
            listeners={{
              focus: () => setActiveTab("ProfileTab"),
            }}
          />
        </Tab.Navigator>
      )}
    </>
  );
};

export default MainNavBar;

const styles = {
  addPostBtn: {
    backgroundColor: "#FF6C00",
    height: 40,
    width: 70,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
