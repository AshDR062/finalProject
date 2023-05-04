import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, TextInput } from 'react-native';
import { CheckBox, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

import Svg, { Use, Image } from 'react-native-svg';
import FrontPage from './components/FrontPage';


import React from 'react'
import { useState } from 'react';
import TransferUPIPage from './components/TransferUPIPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NetBankingOptions from './components/NetBankingOptions';
import NewCard from './components/NewCard';

// import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack'; //Insert screens into a stack


const App = () => {
  const Stack = createNativeStackNavigator();

 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='FrontPage'>
       {/* <Stack.Screen name='FrontPage' component={FrontPage} options={{title: 'Payment'}}/> */}
       {/* <Stack.Screen name='NewCard' component={NewCard} options={{title: 'Payment'}}/>  */}
        <Stack.Screen name='TranferUPIPage' component={TransferUPIPage} options={{title: 'Payment'}}/>  
        {/* <Stack.Screen name='NetBankingOptions' component={NetBankingOptions} options={{title: 'Net Banking Payment Options'}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App


// import React, { Component } from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// import RadioGroup from 'react-native-radio-buttons-group';

// export default class Vertical extends Component {
//   state = {
//     data: [
//       {
//         label: 'Default value is same as label',
//       },
//       {
//         label: 'Value is different',
//         value: "I'm not same as label",
//       },
//       {
//         label: 'Color',
//         color: 'green',
//       },
//       {
//         disabled: true,
//         label: 'Disabled',
//       },
//       {
//         label: 'Size',
//         size: 32,
//       },
//     ],
//   };

//   // update state
//   onPress = data => this.setState({ data });

//   render() {
//     let selectedButton = this.state.data.find(e => e.selected == true);
//     selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
//     return (
//       <View style={styles.container}>
//         <Text style={{ fontSize: 18, marginBottom: 50 }}>
//           Value = {selectedButton}
//         </Text>
//         <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

  