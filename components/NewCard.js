import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View , TextInput, CheckBox} from 'react-native';
import { TouchableOpacity } from 'react-native-web';
// import { styles } from './FrontPage/FrontPageStyles';
import Svg, { Use, Image } from 'react-native-svg';

const NewCard = () => {
    const [isSelected, setSelection] = useState(true);
    const [isCardRegistered, setIsCardRegistered] = useState(false);
    const [isAccepting,setIsAccepting] = useState(true);
    const [isUPIClicked,setIsUPIClicked ] = useState(false);

    const [cardNumber, setCardNumber] = useState("");

    const _handlingCardNumber = (number) => {
        setCardNumber({
            cardNumber: number.replace(/\s?g , )
        })
    }





    return (
        // <View><Text style={{fontSize:2100}}>Hi</Text></View>
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Card Number</Text>
                <TextInput placeholder='Please enter the card number' style={styles.inputText} />
                <Text>Card Name on Card</Text>
                <TextInput placeholder='Please enter name on the card' style={styles.inputText} />
                <View style={{ flexDirection: 'row', alignContent: 'space-between', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1 }}>
                        <Text>Card Number</Text>
                        <TextInput placeholder='MM/YY' style={styles.inputText} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', paddingRight: 30 }}>
                            <Text>CVV</Text><Text>Image</Text>
                        </View>
                        <TextInput placeholder='Enter CVV' secureTextEntry='numeric' maxLength={3} style={styles.inputText} />
                    </View>
                </View>
                <View style={styles.container}>

                </View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text style={styles.label}>Securely save this card for future use </Text>
                    <Svg width='32' height='32' style={styles.cards} >
                        <Image />
                        {/* <Image href={require('E:\FULLSTACKDEVELOPER\React Native\rempo-main\rempo-main\app\assets\svg\image_black.svg')}/> */}
                    </Svg>
                </View>


            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        borderColor: 'gray',
        borderWidth: 1

    },
    inputText: {
        // height: '100vw',
        width: '100vw',
        borderRadius: 8,
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 16,
        paddingLeft: 16,
        borderColor: '#D0D5DD',
        borderWidth: 1
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'flex-start',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
    },
})

export default NewCard;

// Code for  card number Validation
// var txtCardNumber = document.querySelector("#txtCardNumber");
// txtCardNumber.addEventListener("input", onChangeTxtCardNumber);

// function onChangeTxtCardNumber(e) {     
//     var cardNumber = txtCardNumber.value;

//       // Do not allow users to write invalid characters
//     var formattedCardNumber = cardNumber.replace(/[^\d]/g, "");
//     formattedCardNumber = formattedCardNumber.substring(0, 16);

//     // Split the card number is groups of 4
//     var cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
//     if (cardNumberSections !== null) {
//         formattedCardNumber = cardNumberSections.join('-'); 
//     }

//     console.log("'"+ cardNumber + "' to '" + formattedCardNumber + "'");

//     // If the formmattedCardNumber is different to what is shown, change the value
//     if (cardNumber !== formattedCardNumber) {
//         txtCardNumber.value = formattedCardNumber;
//     }
// }


// import React, { Component } from "react";
// class UrlComponent extends Component {
//   state = {
//     URL: "",
//     isTrueVal: false
//   };
//   urlPatternValidation = URL => {
//     const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');    
//     return regex.test(URL);
//   };
//   changeUrl = event => {
//     const { value } = event.target;
//     const isTrueVal = !value || this.urlPatternValidation(value);
//     this.setState({
//       URL: value,
//       isTrueVal
//     });
//   };
//   onSubmit = () => {
//     const { URL } = this.state;
//     console.log("Here is the site url: ", URL);
//   };
//   render() {
//     const { isTrueVal, URL } = this.state;
//     return (
//       <div>
//         <form>
//           <input
//             type="text"
//             name="URL"
//             value={URL}
//             onChange={this.changeUrl}
//           />
//           {!this.state.isTrueVal && (
//             <div style={{ color: "#F61C04" }}>URL is not valid.</div>
//           )}
//           <button onClick={this.onSubmit} disabled={!isTrueVal}>Store</button>
//         </form>
//       </div>
//     );
//   }
// }
// export default UrlComponent;