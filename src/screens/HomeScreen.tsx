import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../constants/Colors";
import Categorys from "../components/home/Categorys";

const HomeScreen = () => {
  const navigation = useNavigation();
  const category = [{ id: 1, navigate: navigation.navigate("CarouselScreen"), name: "Carousel" }];
  return (
    <View style={styles.container}>
      <FlatList data={category} numColumns={3} renderItem={({ item }) => <Categorys name={item.name} onPress={item.navigate} />}  />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex         : 1,
    color        : Colors.white,
    flexDirection: "row",
  },
});
