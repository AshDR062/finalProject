import * as React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const TransferUPIPage = () => {
    return (
        <View>
            <Text>
                Request will timeout in 3:45 minutes
            </Text>
            <Text>
                Open your UPI app now to complete the payment
            </Text>
            <Text>
                Do not close or refresh this page
            </Text>
            <View>
            <View style={{flexDirection:'row' ,  marginTop: 20}}>
                <View style={{ width:50, height:50 ,margin:8}}>
                    <Image resizeMode='cover' style={{ width:52, height:14 , }} source={require('/assets/svg/logo.svg')} />
                </View>
                
                    <View style={{ width:50, height:50 ,margin:8 }}>
                        <Image resizeMode='cover' style={{ width: 40, height: 40 }} source={require('/assets/svg/payment/processing.png')} />
                    </View>
                    <View style={{ width:50, height:50,margin:8  }}>
                        <Image resizeMethod='resize' style={{ width: 32, height: 8, }} source={require('/assets/svg/payment/upi.svg')} />
                    </View>
                </View>
            </View>
            <Text></Text>
        </View>

    )
}

export default TransferUPIPage
