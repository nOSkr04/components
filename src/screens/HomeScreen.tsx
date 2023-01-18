import {  StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/Colors";
import { MonThin } from "../components/StyledText";
import Layout from "../constants/Layout";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => navigation.navigate("CarouselScreen")} style={styles.container}>
        <MonThin>Carousel</MonThin>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SecondCarouselScreen")} style={styles.container}>
        <MonThin>Carousel - 2</MonThin>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex         : 1,
    color        : Colors.white,
    flexDirection: "row",
  },
  container: {
    width         : Layout.window.width * 0.3,
    height        : 100,
    borderWidth   : 1,
    borderRadius  : 20,
    alignItems    : "center",
    justifyContent: "center",
  },
});
