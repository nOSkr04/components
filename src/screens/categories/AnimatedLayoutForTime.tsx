import React, { useCallback, useMemo, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import DatePicker from "react-native-date-picker";
import { format } from "date-fns";
import Animated, {
  LightSpeedInRight,
} from "react-native-reanimated";
import Button from "../../components/Button";
const CreatePlaceScreen = React.memo(() => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [data, setData] = useState<string[]>([]);
  const [visible, setVisible] = useState(-1);
  // variables
  const snapPoints = useMemo(() => ["50%"], []);

  const onClose = () => {
    setVisible(-1);
  };
  const onOpen = () => {
    setVisible(0);
  };

  const renderBackdrop = React.useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior={"close"}
      />
    ),
    [],
  );
  const handleSheetChanges = useCallback((index: number) => {
    setVisible(index);
  }, []);
  const [date, setDate] = useState(new Date());

  const handleClosePress = (date: Date) => {
    const formatTime = format(date, "HH:mm:ss");
    setData(data => [...data, formatTime]);
    bottomSheetRef.current?.close();
  };
  const removeParticipant = (index: number) => {
    setData(data.filter((item, i) => i !== index));
  };

  console.log(data);
  return (
    <View style={styles.container}>
      {data &&
        data.map((time, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => removeParticipant(index)}>
              <Animated.View entering={LightSpeedInRight}>
                <Text>{time}</Text>
                <Text>X</Text>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      <Button onPress={onOpen}  title={"Add"}  />

      <BottomSheet
        backdropComponent={renderBackdrop}
        enablePanDownToClose={true}
        index={visible}
        onChange={handleSheetChanges}
        onClose={onClose}
        ref={bottomSheetRef}
        snapPoints={snapPoints}>
        <DatePicker
          date={date}
          locale="mn"
          mode="time"
          onDateChange={setDate}
        />
        <Button onPress={() => handleClosePress(date)} title={"aaa"} />
      </BottomSheet>
    </View>
  );
});

CreatePlaceScreen.displayName = "CreatePlaceScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default CreatePlaceScreen;
