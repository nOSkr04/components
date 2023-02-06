import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import Modal from "react-native-modal";
import { format } from "date-fns";
import Button from "../../components/Button";
import { Colors } from "../../constants/Colors";

const CreatePlaceSheet = React.memo(() => {
  const [date, setDate] = useState(new Date());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const addTime = (date: Date) => {
    setDate(date);
    setIsModalVisible(!isModalVisible);
  };
  const changedDate = (event: any, selectedTime: any) => {
    setDate(selectedTime);
  };

  return (
    <SafeAreaView style={styles.container}>
     
      <Button
        onPress={() => setIsModalVisible(!isModalVisible)}
        title={`Add ${format(date, "yyyy-MM-dd")}`}
      />

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text>өдөр</Text>
          <DateTimePicker
          display={Platform.OS === "ios" ? "inline" : "calendar"}
          mode={"date"}
          onChange={changedDate}
          testID="dateTimePicker"
          value={date}
        />
        
          <Button onPress={() => addTime(date)} title="Хадгалах" />
        </View>
      </Modal>
    </SafeAreaView>
  );
});

CreatePlaceSheet.displayName = "CreatePlaceSheet";

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
    padding       : 10
  }
});

export default CreatePlaceSheet;
