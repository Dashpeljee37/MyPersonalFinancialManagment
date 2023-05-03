import React from "react";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  ScrollView,
} from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/home";
import Accounts from "./screens/accounts";


const Stack = createNativeStackNavigator();

const YourApp = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerShown: false  
          }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen 
          name="Accounts" 
          component={Accounts} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
};

export default YourApp;
