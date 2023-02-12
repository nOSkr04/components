import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View } from "react-native";

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView mapType="standard" provider={PROVIDER_GOOGLE} showsUserLocation={true} style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width : "100%",
    height: "100%",
  },
});
