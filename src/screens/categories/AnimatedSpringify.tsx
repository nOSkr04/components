import React, { useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { Layout ,LightSpeedInLeft, LightSpeedInRight } from "react-native-reanimated";
import Button from "../../components/Button";
import { Colors } from "../../constants/Colors";


const { width } = Dimensions.get("window");

type EventParticipant = {
  name: string,
  id:string
}

function Participant({
  name,
  onRemove,
}: {
  name: string;
  onRemove: () => void;
}): React.ReactElement {
  return (
    <Animated.View entering={LightSpeedInLeft}
    exiting={LightSpeedInRight}
    layout={Layout.springify()}
      style={styles.participantView}>
      <Text>{name}</Text>
      <Button onPress={onRemove} title="Remove"  />
    </Animated.View>
  );
}

export default function AnimatedSpringify(): React.ReactElement {
  const [inputValue, setInputValue] = useState("112");
  const [participantList, setParticipantList] = useState<EventParticipant[]>(
    []
  );

  const addParticipant = () => {
    setParticipantList(
      [{ name: inputValue, id: Date.now().toString() }].concat(participantList)
    );
    setInputValue("");
  };

  const removeParticipant = (id: string) => {
    setParticipantList(
      participantList.filter((participant) => participant.id !== id)
    );
  };

  return (
    <SafeAreaView
      style={styles.listView}>
      <ScrollView style={{ width }}>
        {participantList.map((participant) => (
          <Participant
            key={participant.id}
            name={participant.name}
            onRemove={() => removeParticipant(participant.id)}
          />
        ))}
      </ScrollView>

      <View
        style={styles.bottomRow}>
        <View
          style={styles.textInput}>
          <Text>Add participant: </Text>
          <TextInput
            onChangeText={setInputValue}
            placeholder="Name"
            value={inputValue}
          />
        </View>

        <Button
          disabled={inputValue === ""}
          onPress={addParticipant}
          title="Add"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  participantView: {
    backgroundColor : Colors.PrimarySoft,
    flexDirection   : "row",
    justifyContent  : "space-between",
    marginHorizontal: 16,
    marginTop       : 10
  },
  listView: {
    backgroundColor: Colors.primary,
    flex           : 1
  },
  bottomRow: {
    position      : "absolute",
    bottom        : 40,
    flexDirection : "row",
    justifyContent: "space-between",
    left          : 16,
    right         : 16
  },
  textInput: {
    borderWidth: 1,
    width      : "80%"
  }
});