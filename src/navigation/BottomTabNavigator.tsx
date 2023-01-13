import React from "react";
import {  createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";

const BottomTabNavigator = () => {
 
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
   
      <Tab.Screen
            component={HomeScreen}
            name={"HomeScreen"}
            options={{
              tabBarShowLabel: false,
            }}
          />
       
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
