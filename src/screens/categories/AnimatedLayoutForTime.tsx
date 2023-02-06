import React, { useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import Animated, { LightSpeedInRight } from "react-native-reanimated";
import Modal from "react-native-modal";
import Button from "../../components/Button";
import { Colors } from "../../constants/Colors";

const AnimatedLayoutForTime = React.memo(() => {
  const [data, setData] = useState<string[]>([]);
  const [date, setDate] = useState(new Date());
  const [capsuleInc, setCapsuleInc] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [androidTime, setAndroidTime] = useState(false);
  const addTime = (date: Date) => {
    const formatTime = format(date, "HH:mm:ss");
    setData(data => [...data, formatTime]);
    setIsModalVisible(!isModalVisible);
  };
  console.log(data);
  const removeParticipant = (index: number) => {
    setData(data.filter((item, i) => i !== index));
  };

  const changedDate = (event: any, selectedTime: any) => {
    setDate(selectedTime);
    setAndroidTime(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {data &&
        data.map((time, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => removeParticipant(index)}>
              <Animated.View entering={LightSpeedInRight}>
                <Text>{time}</Text>
                <Text>X</Text>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      <Button onPress={() => setIsModalVisible(!isModalVisible)} title={"Add"} />

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text>Цаг тохируулах</Text>
          {Platform.OS === "ios" && (
            <DateTimePicker
              display={"spinner"}
              is24Hour={true}
              locale="mn"
              maximumDate={new Date(2023, 15, 20)}
              mode={"time"}
              onChange={changedDate}
              value={date}
            />
          )}

          {Platform.OS === "android"
            ? <Button onPress={() => setAndroidTime(!androidTime)} title={`Tsag songoh ${format(date, "HH:mm:ss")}`}  />
            : null}
          { androidTime && (
            <DateTimePicker
                  display={"default"}
                  is24Hour={true}
                  locale="mn"
                  maximumDate={new Date(2023, 15, 20)}
                  mode={"time"}
                  onChange={changedDate}
                  value={date}
                />
              )}
          <View style={styles.incContainer}>
            <TouchableOpacity disabled={capsuleInc === 0 ? true : false} onPress={() => setCapsuleInc(capsuleInc - 1)}>
              <Text>1</Text>
            </TouchableOpacity>
            <Text>{capsuleInc} tsag </Text>
            <TouchableOpacity onPress={() => setCapsuleInc(capsuleInc + 1)}>
              <Text>3</Text>
            </TouchableOpacity>
          </View>
          <Button onPress={() => addTime(date)} title="Хадгалах" />
        </View>
      </Modal>
    </SafeAreaView>
  );
});

AnimatedLayoutForTime.displayName = "AnimatedLayoutForTime";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    backgroundColor: Colors.white,
  },
  incContainer: {
    flexDirection : "row",
    justifyContent: "space-between",
    borderWidth   : 1,
    padding       : 10,
  },
});

export default AnimatedLayoutForTime;
