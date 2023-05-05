import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const TransferUPIPage = ({navigation}) => {
  let amount = 1756;
  let receipantUPIid = "Ramkrushna@okicici";
  let senderUPIid = "upi.rzp@hdfcbank";

// Automatic trasfering from "TransferUPIPage" to "QRCodePage"
  setTimeout(() => {
    navigation.navigate("QRCodePage")
  }, 2000);


  return (
    <View
      style={{ marginTop: 30, justifyContent: "center", textAlign: "center" }}
    >
      <Text style={{ color: "#635E61", fontWeight: 400, fontSize: 14 }}>
        Request will timeout in 3:45 minutes
      </Text>
      <Text
        style={{
          marginTop: 20,
          color: "#211A1E",
          fontWeight: 500,
          fontSize: 14,
        }}
      >
        Open your UPI app now to complete the payment
      </Text>
      <Text
        style={{
          marginTop: 20,
          color: "#211A1E",
          fontWeight: 500,
          fontSize: 14,
        }}
      >
        Do not close or refresh this page
      </Text>
      <View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "center",
          }}
        >
          <View style={{ width: 50, height: 50, marginTop: 24 }}>
            <Image
              resizeMode="cover"
              style={{ width: 52, height: 14 }}
              source={require("/assets/svg/logo.svg")}
            />
          </View>

          <View style={{ width: 50, height: 50, margin: 8 }}>
            <Image
              resizeMode="cover"
              style={{ width: 40, height: 40 }}
              source={require("/assets/svg/payment/processing.png")}
            />
          </View>
          <View style={{ width: 50, height: 50, marginTop: 24 }}>
            <Image
              resizeMethod="resize"
              style={{ width: 32, height: 8 }}
              source={require("/assets/svg/payment/upi.svg")}
            />
          </View>
        </View>
      </View>
      <Text
        style={{
          textAlignVertical: "center",
          color: "#367DE7",
          textAlign: "center",
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        Payment Request of &#x20B9; {amount} has been sent to{" "}
      </Text>
      <Text
        style={{
          textAlignVertical: "center",
          color: "#367DE7",
          textAlign: "center",
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        {receipantUPIid}{" "}
      </Text>
      <Text
        style={{
          textAlignVertical: "center",
          color: "#367DE7",
          textAlign: "center",
          fontWeight: 600,
          fontSize: 14,
        }}
      ></Text>
      <Text
        style={{
          textAlignVertical: "center",
          color: "#367DE7",
          textAlign: "center",
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        from {senderUPIid}
      </Text>
    </View>
  );
};

export default TransferUPIPage;
