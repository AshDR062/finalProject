import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  CheckBox,
  Button,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import { TouchableOpacity } from "react-native-web";
// import { styles } from './FrontPage/FrontPageStyles';
import Svg, { Use, Image } from "react-native-svg";

const NewCard = ({navigation}) => {
  const [isSelected, setSelection] = useState(true);
  const [isCardRegistered, setIsCardRegistered] = useState(false);
  const [isAccepting, setIsAccepting] = useState(false);
  const [isUPIClicked, setIsUPIClicked] = useState(false);

  const [cardNum, setCardNum] = useState(0);
  const [nameOnCard, setNameOnCard] = useState("A");
  const [expiryDt, setExpiryDt] = useState("");
  const [isValidCardNum, setIsValidCardNum] = useState(true);

  const [isCardNumEditable, setIsCardNumEditable] = useState(true);

  const onChangeTxtCardNumber = (txtCardNumber) => {
    txtCardNumber = txtCardNumber.replace(/[^0-9]/g, "");
    var cardNumber = txtCardNumber.toString();

    // Do not allow users to write invalid characters
    var formattedCardNumber = cardNumber.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 16);

    // Split the card number is groups of 4
    var cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
    if (cardNumberSections !== null) {
      formattedCardNumber = cardNumberSections.join("-");
      if (formattedCardNumber.length > 19) {
        setIsCardNumEditable(false);
      } else {
        setIsCardNumEditable(true);
      }
    }

    // console.log(`'${cardNumber}' to '${formattedCardNumber}`);

    // If the formmattedCardNumber is different to what is shown, change the value
    if (cardNumber !== formattedCardNumber) {
      txtCardNumber = formattedCardNumber;
      setCardNum(txtCardNumber);
      return txtCardNumber;
    }
  };

  const cardInfo = [
    {
      cardNumber: cardNum,
      name: nameOnCard,
      expireDate: expiryDt,
    },
  ];

  // const _handlingCardNumber = (number) => {
  //     setCardNumber({
  //         cardNumber: number.replace(/\s?g , )
  //     })
  // }

  return (
    // <View><Text style={{fontSize:2100}}>Hi</Text></View>
    <SafeAreaView>
      <View
        style={{ margin: 16, justifyContent: "space-between", Height: "100vw" }}
      >
        <View style={{ justifyContent: "space-between" }}>
          <Text style={[styles.allInnerItems]}>Card Number</Text>

          <TextInput
            onChangeText={(text) => onChangeTxtCardNumber(text)}
            placeholder="xxxx-xxxx-xxxx-xxxx"
            keyboardType="numeric"
            style={[styles.inputText, styles.allInnerItems]}
          />
          {!isAccepting ? (
            <Text style={{ color: "red", marginBottom: 12 }}>
              Visa Cards are not accepting payments request at this time. Please
              select another payment method
            </Text>
          ) : !isValidCardNum ? (
            <Text style={{ color: "red" }}>Enter Valid Card Number</Text>
          ) : null}

          <Text style={styles.allInnerItems}>Name on Card</Text>

          <TextInput
            placeholder="Please enter name on the card"
            style={[styles.inputText, styles.allInnerItems]}
          />

          <View
            style={{
              flexDirection: "row",
              alignContent: "space-between",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text style={styles.allInnerItems}>Expiry Date</Text>
              <TextInput
                onChangeText={(text) => {
                  cc_expires_format;
                }}
                keyboardType="numeric"
                placeholder="MM/YY"
                style={[styles.inputText, styles.allInnerItems]}
              />
            </View>

            <View style={{ flex: 1, marginLeft: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  paddingRight: 30,
                  marginBottom: 10,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text>CVV</Text>
                  <TouchableOpacity>
                    <Svg width="20" height="20" style={{ paddingLeft: 8 }}>
                      <Image
                        href={require("/assets/payment/icons8-info.svg")}
                        style={{ height: 20, width: 20 }}
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>
              </View>

              <TextInput
                keyboardType="numeric"
                placeholder="Enter CVV"
                secureTextEntry="numeric"
                maxLength={3}
                style={[styles.inputText, styles.allInnerItems]}
              />
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.label}>
                Securely save this card for future use{" "}
              </Text>
            </View>
            <TouchableHighlight>
              <Svg width="20" height="20" style={{ paddingTop: 8 }}>
                <Image
                  href={require("/assets/payment/icons8-info.svg")}
                  style={{ height: 20, width: 20 }}
                />
              </Svg>
            </TouchableHighlight>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "#d9d9d9",
                shadowColor: "#000000",
                shadowOpacity: 0.8,
                shadowRadius: 2,
                shadowOffset: { height: 1, width: 1 },
              }}
            />
          </View>
          <TouchableHighlight onPress={() => {navigation.navigate("FrontPage")}} style={styles.proceedBtn}>
            <Text
              style={{
                textAlignVertical: "center",
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              Proceed to pay
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({

  allInnerItems: {
    marginBottom: 10,
  },
  inputText: {
    borderRadius: 8,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
    borderColor: "#D0D5DD",
    borderWidth: 1,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  container: {

  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  proceedBtn: {
    fontSize: 16,
    height: 46,
    fontWeight: 700,
    top: 11,
    // left: 24,
    paddingTop: 11,
    // paddingLeft: 22,
    paddingBottom: 11,
    // marginLeft: 24,
    // marginRight: 24,
    borderRadius: 8,
    backgroundColor: "#0259DB",
    alignItems: "center",
    right: 0,
    left: 0,
    position: "absolute",
    bottom: 0,
  },
});

export default NewCard;

