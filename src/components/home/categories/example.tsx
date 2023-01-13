import { StyleSheet, Text, View } from "react-native";
import React from "react";

const example = () => {
  return (
    <View style={styles.container}>
      <Text>example</Text>
    </View>
  );
};

export default example;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});