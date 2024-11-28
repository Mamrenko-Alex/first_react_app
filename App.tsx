import React from "react";
// import { useEffect } from "react";
// import { useFonts } from "expo-font";
// import { ActivityIndicator } from "react-native";
// import * as SplashScreen from "expo-splash-screen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./components/Navigation/StackNavigation";
// import CreatePostsScreen from "./screens/CreatePostsScreen";
// import CommentsScreen from "./screens/CommentsScreen";
// import MapScreen from "./screens/MapScreen";
// import PostScreen from "./screens/PostScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
