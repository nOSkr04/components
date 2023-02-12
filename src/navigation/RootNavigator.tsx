/* eslint-disable react/react-in-jsx-scope */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import BottomTabNavigator from "./BottomTabNavigator";
import CarouselScreen from "../screens/categories/CarouselScreen";
import SecondCarouselScreen from "../screens/categories/SecondCarouselScreen";
import AnimatedLayoutForTime from "../screens/categories/AnimatedLayoutForTime";
import AnimatedSpringify from "../screens/categories/AnimatedSpringify";
import WebViewScreen from "../screens/categories/WebView";
import MapScreen from "../screens/categories/Map";


const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  return (
    <Stack.Navigator>
      <Stack.Group   >
        <Stack.Screen component={BottomTabNavigator} name="Root" options={{ headerShown: false }} />
        <Stack.Screen component={CarouselScreen} name="CarouselScreen" options={{  }} />
        <Stack.Screen component={SecondCarouselScreen} name="SecondCarouselScreen" options={{  }} />
        <Stack.Screen component={AnimatedLayoutForTime} name="AnimatedLayoutForTime" options={{  }} />
        <Stack.Screen component={AnimatedSpringify} name="AnimatedSpringify" options={{  }} />
        <Stack.Screen component={WebViewScreen} name="WebViewScreen" options={{ headerShown: false  }} />
        <Stack.Screen component={MapScreen} name="MapScreen" options={{ headerShown: false  }} />
      </Stack.Group>  
    </Stack.Navigator>
  );
}



export default RootNavigator;
