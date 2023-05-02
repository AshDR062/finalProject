import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, TextInput } from 'react-native';
import { CheckBox, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

import Svg, { Use, Image } from 'react-native-svg';
import FrontPage from './components/FrontPage/FrontPage';
import NewCard from './components/NewCard';
import { useState } from 'react';


import React from 'react'
import TransferUPIPage from './components/TransferUPIPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const Stack = createNativeStackNavigator(); 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='FrontPage' component={FrontPage} />
        <Stack.Screen name='NewCard' component={NewCard} />
        <Stack.Screen name='TranferUPIPage' component={TransferUPIPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

  