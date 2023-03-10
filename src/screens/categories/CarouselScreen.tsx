import { Animated, Dimensions, Image, ScrollView, StyleSheet,  TouchableOpacity, View } from "react-native";
import React, { memo, useRef, useState } from "react";
import Modal from "react-native-modal";
import { Colors } from "../../constants/Colors";
import Button from "../../components/Button";
import RenderHTML from "react-native-render-html";

const { width, height } = Dimensions.get("screen");
const ITEM_WIDTH = width * 0.92;
const ITEM_HEIGHT = 198;
const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };

const CarouselScreen = memo(() => {
  const [modalData, setModalData] = useState<any>(null);
  const flatListRef = useRef<any>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const onViewRef = useRef(({ changed }: { changed: any }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });
  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ index: index });
  };
  const scrollX = useRef(new Animated.Value(0)).current;

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setModalData(null);
  };

  const imageData = [
    { id: "1", image: "https://images.pexels.com/photos/11987710/pexels-photo-11987710.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: "2", image: "https://images.pexels.com/photos/13945391/pexels-photo-13945391.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
    { id: "3", image: "https://images.pexels.com/photos/14792098/pexels-photo-14792098.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" },
  ];
  const source = {
    html: `
    "<p>Подкастын салбар сүүлийн хэдэн жилийн турш хурдтай өсөж, энэ хэрээр уг салбарын хөрөнгө оруулалт ч нэмэгдсэн.  PodcastHosting.org мэдээлснээр 2021 оны 12-р сарын байдлаар дэлхий даяар 2 гаруй подкастын 48 сая дугаар цацагджээ. </p>\n<p>Хувийн санхүүгээ төлөвлөх, хөрөнгө оруулалт хийх, тэтгэврийн хуримтлалтай болох, чухал худалдан авалт хийх гэж буй хүмүүст зөвлөгөө өгч, санхүүгийн мэдлэг олгох топ 10 хувь хүний санхүүгийн подкастыг танилцуулж байна.</p>\n<h4>1.THE DEV RAMSEY SHOW</h4>\n<p>Давтамж: 7 хоног бүр</p>\n<p>Подкастын дундаж хугацаа: 40 минут </p>\n<p>Ерөнхий агуулга: Дев Рамси мөнгөний талаар төрөл бүрийн зөвлөгөө өгч хэрхэн хувийн санхүүгээ хөтлөх, мөнгөө ухаалгаар удирдах, баялаг бүтээх талаар хуваалцдаг.</p>\n"`,
  };
  return (
    <View style={styles.contentContainer}>
      <Animated.FlatList
        data={imageData}
        horizontal
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
        onViewableItemsChanged={onViewRef.current}
        pagingEnabled
        ref={flatListRef}
        renderItem={({ item, index }) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });

          return (
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() => {
                  setIsModalVisible(true);
                  setModalData(item);
                }}
                style={styles.imageContainer}>
                <Animated.Image source={{ uri: item.image }} style={[styles.image, { transform: [{ translateX }] }]} />
              </TouchableOpacity>
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
        viewabilityConfig={viewConfigRef}
      />
      <View style={styles.dotContainer}>
        {imageData.map((image: any, index: number) => {
          return (
            <TouchableOpacity
              key={image.id}
              onPress={() => scrollToIndex(index)}
              style={[styles.dot, currentIndex === index ? styles.activeDotColor : styles.unActiveDotColor]}
            />
          );
        })}
      </View>
      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} onSwipeComplete={toggleModal} swipeDirection={["down", "up"]}>
        <View style={styles.modalContainer}>
          <ScrollView>
            <Image source={{ uri: modalData?.image }} style={styles.modalImage} />
            <RenderHTML contentWidth={width} source={source} />
            <RenderHTML contentWidth={width} source={source} />
            <RenderHTML contentWidth={width} source={source} />
            <Button onPress={toggleModal} title="Hide modal" />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
});

CarouselScreen.displayName = "CarouselScreen";

export default CarouselScreen;

const styles = StyleSheet.create({
  container: {
    width,
    justifyContent: "center",
    alignItems    : "center",
  },
  contentContainer: {
    marginTop   : 16,
    marginBottom: 40,
  },
  imageContainer: {
    width       : ITEM_WIDTH,
    height      : ITEM_HEIGHT,
    overflow    : "hidden",
    alignItems  : "center",
    borderRadius: 18,
    borderColor : Colors.white,
  },
  image: {
    width     : ITEM_WIDTH,
    height    : ITEM_HEIGHT,
    resizeMode: "cover",
  },
  dotContainer: {
    flexDirection: "row",
    position     : "absolute",
    bottom       : 8,
    alignSelf    : "center",
  },
  dot: {
    width           : 32,
    height          : 6,
    borderRadius    : 10,
    marginHorizontal: 4,
  },
  activeDotColor: {
    backgroundColor: Colors.white,
  },
  unActiveDotColor: {
    backgroundColor: Colors.transparent,
  },
  modalContainer: {
    flex           : 1,
    backgroundColor: Colors.white,
    height,
  },
  modalImage: {
    width : "100%",
    height: "30%",
  },

});
