/* eslint-disable react/react-in-jsx-scope */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import BottomTabNavigator from "./BottomTabNavigator";
import CarouselScreen from "../screens/categories/CarouselScreen";


const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen component={BottomTabNavigator} name="Root" options={{ headerShown: false }} />
        <Stack.Screen component={CarouselScreen} name="CarouselScreen" options={{  }} />
      </Stack.Group>  
    </Stack.Navigator>
  );
}



export default RootNavigator;