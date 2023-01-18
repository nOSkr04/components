import { Animated, Image, StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import Layout from "../../constants/Layout";
import { Colors } from "../../constants/Colors";

const width = Layout.window.width;
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;
const SecondCarouselScreen = () => {
  const images = [
    "https://images.pexels.com/photos/14721454/pexels-photo-14721454.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/5015429/pexels-photo-5015429.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/13914970/pexels-photo-13914970.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/14708721/pexels-photo-14708721.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/14598286/pexels-photo-14598286.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/14854196/pexels-photo-14854196.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.root}>
      <Animated.FlatList
        data={images}
        horizontal
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
        pagingEnabled
        renderItem={({ item, index }) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });
          return (
            <View style={styles.rootContainer}>
              <View style={styles.container}>
                <View style={styles.imageContainer}>
                  <Animated.Image source={{ uri: item }} style={[styles.image, { transform: [{ translateX }] }]} />
                </View>
                <Image source={{ uri: item }} style={styles.userImage} />
              </View>
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SecondCarouselScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  rootContainer: {
    width         : width,
    alignItems    : "center",
    justifyContent: "center",
  },
  container: {
    borderRadius : 18,
    shadowColor  : Colors.black,
    shadowOpacity: 0.6,
    shadowRadius : 30,
    shadowOffset : {
      width : 0,
      height: 0,
    },
    padding        : 12,
    backgroundColor: Colors.white,
  },
  imageContainer: {
    width       : ITEM_WIDTH,
    height      : ITEM_HEIGHT,
    overflow    : "hidden",
    alignItems  : "center",
    borderRadius: 14,
  },
  image: {
    width     : ITEM_WIDTH * 1.4,
    height    : ITEM_HEIGHT,
    resizeMode: "cover",
  },
  userImage: {
    width       : 60,
    height      : 60,
    borderRadius: 60,
    borderWidth : 6,
    borderColor : Colors.white,
    position    : "absolute",
    bottom      : -30,
    right       : 60,
  },
});
