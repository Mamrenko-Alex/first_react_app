import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../screens/LoginScreen";
import RegistrationScreen from "../../screens/RegistrationScreen";
import MainNavBar from "./MainNavBar";
import CommentsScreen from "../../screens/CommentsScreen";
import SmallButton from "../../components/Buttons/SmallButton";
import ArrowBackIcon from "../../assets/icons/arrow-back-icon.svg";
import MapScreen from "../../screens/MapScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Home" component={MainNavBar} />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Коментарі",
          headerLeftContainerStyle: { paddingLeft: 16 },
          headerRightContainerStyle: { paddingRight: 16 },
          headerLeft: () => (
            <SmallButton onPress={() => navigation.goBack()}>
              <ArrowBackIcon />
            </SmallButton>
          ),
        })}
      />
      <Stack.Screen
        name="Location"
        component={MapScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerTitle: "Місце знаходження",
          headerLeftContainerStyle: { paddingLeft: 16 },
          headerRightContainerStyle: { paddingRight: 16 },
          headerLeft: () => (
            <SmallButton onPress={() => navigation.goBack()}>
              <ArrowBackIcon />
            </SmallButton>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
