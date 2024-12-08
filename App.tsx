import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./components/Navigation/StackNavigation";
import { Provider } from "react-redux"; // Redux Provider
import { PersistGate } from "redux-persist/integration/react"; // PersistGate
import storeConfig from "./redux/store"; // Імпорт store та persistor

const { store, persistor } = storeConfig; // Ініціалізація store та persistor

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
