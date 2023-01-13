import { GestureResponderEvent, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Layout from "../../constants/Layout";
import { MonThin } from "../StyledText";

const Categorys = ({ onPress, name }: { onPress: (event: GestureResponderEvent) => void; name: string }) => {
  return (
    <TouchableOpacity onPress={() => onPress} style={styles.container}>
      <MonThin>{name}</MonThin>
    </TouchableOpacity>
  );
};

export default Categorys;

const styles = StyleSheet.create({
  container: {
    width         : Layout.window.width * 0.3,
    height        : 100,
    borderWidth   : 1,
    borderRadius  : 20,
    alignItems    : "center",
    justifyContent: "center",
  },
});
