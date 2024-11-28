import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const MapScreen = ({ route }) => {
  const { latitude: initialLatitude, longitude: initialLongitude } =
    route.params;

  const mapInitialRegion = {
    latitude: initialLatitude,
    longitude: initialLongitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleMapReady = () => {
    console.log("Map successfully loaded");
  };

  const handleRegionChangeComplete = (region) => {
    console.log(
      `🗺️ Region updated: Latitude ${region.latitude}, Longitude ${region.longitude}, Delta (${region.latitudeDelta}, ${region.longitudeDelta})`
    );
  };

  return (
    <View style={styles.screenContainer}>
      <MapView
        style={styles.map}
        initialRegion={mapInitialRegion}
        mapType="standard"
        minZoomLevel={5}
        onMapReady={handleMapReady}
        onRegionChangeComplete={handleRegionChangeComplete}
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          title="Current Location"
          coordinate={{
            latitude: initialLatitude,
            longitude: initialLongitude,
          }}
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
