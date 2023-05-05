import { StatusBar } from "expo-status-bar";
import { SafeAreaView, TextInput } from "react-native";
import { CheckBox, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-web";

import Svg, { Use, Image } from "react-native-svg";
import FrontPage from "./components/FrontPage";

import React from "react";
import { useState } from "react";
import TransferUPIPage from "./components/TransferUPIPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import NetBankingOptions from "./components/NetBankingOptions";
import NewCard from "./components/NewCard";

// import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack"; //Insert screens into a stack
import QRCodePage from "./components/QRCodePage";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FrontPage" screenOptions={{}}>
        <Stack.Screen name='FrontPage' component={FrontPage} options={{title: 'Payment'}}/>
        <Stack.Screen name='NewCard' component={NewCard} options={{title: 'Payment'}}/> 
        <Stack.Screen
          name="TranferUPIPage"
          component={TransferUPIPage}
          options={{ title: "Payment" }}
        />
        <Stack.Screen name='NetBankingOptions' component={NetBankingOptions} options={{title: 'Payment'}}/>
        <Stack.Screen name='QRCodePage' component={QRCodePage} options={{title: ''}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

