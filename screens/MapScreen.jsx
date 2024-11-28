import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const MapScreen = ({ route }) => {
  const { latitude, longitude } = route.params;

  const initialRegion = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.screenContainer}>
      <MapView
        style={styles.map}
        region={initialRegion}
        mapType="standard"
        minZoomLevel={5}
        onMapReady={() => console.log("Map loaded successfully")}
        onRegionChange={() => console.log("Region updated")}
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          title="Current Location"
          coordinate={{ latitude, longitude }}
          description="This is your selected location"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
