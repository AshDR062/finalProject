import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, CheckBox, Button, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
// import { styles } from './FrontPage/FrontPageStyles';
import Svg, { Use, Image } from 'react-native-svg';
const NewCard = () => {
    const [isSelected, setSelection] = useState(true);
    const [isCardRegistered, setIsCardRegistered] = useState(false);
    const [isAccepting, setIsAccepting] = useState(true);
    const [isUPIClicked, setIsUPIClicked] = useState(false);

    const [cardNumber, setCardNumber] = useState("");

    // const _handlingCardNumber = (number) => {
    //     setCardNumber({
    //         cardNumber: number.replace(/\s?g , )
    //     })
    // }





    return (

        // <View><Text style={{fontSize:2100}}>Hi</Text></View>
        <SafeAreaView>

            <View style={{ margin: 16, justifyContent: 'space-between' }}>
                    <View style={{justifyContent:'space-between'}}>
                        <Text style={[styles.allInnerItems,]}>Card Number</Text>
                        <TextInput placeholder='Please enter the card number' style={[styles.inputText, styles.allInnerItems,]} />
                        <Text style={styles.allInnerItems}>Card Name on Card</Text>
                        <TextInput placeholder='Please enter name on the card' style={[styles.inputText, styles.allInnerItems]} />
                        <View style={{ flexDirection: 'row', alignContent: 'space-between', justifyContent: 'space-between' }}>
                            <View style={{ flex: 1, marginRight: 10 }}>
                                <Text style={styles.allInnerItems}>Card Number</Text>
                                <TextInput placeholder='MM/YY' style={[styles.inputText, styles.allInnerItems]} />
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>

                                <View style={{ flexDirection: 'row', paddingRight: 30, marginBottom: 10 }}>
                                    <Text>CVV</Text><Text>Image</Text>
                                </View>
                                <TextInput placeholder='Enter CVV' secureTextEntry='numeric' maxLength={3} style={[styles.inputText, styles.allInnerItems]} />

                            </View>
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
                    <View style={{ padding: 16, borderColor: '#000', shadowOpacity: 0.5, shadowRadius: 5, elevation: 2}}>
                        <TouchableOpacity style={styles.proceedBtn}>
                            <Text style={{ textAlignVertical: 'center', color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>Proceed to pay</Text>
                        </TouchableOpacity>
                    </View>


            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    // container: {
    //     borderColor: 'gray',
    //     borderWidth: 1,
    //     marginBottom:5
    // },
    allInnerItems: {
        marginBottom: 10
    },
    inputText: {
        borderRadius: 8,
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 16,
        paddingLeft: 16,
        borderColor: '#D0D5DD',
        borderWidth: 1,

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
        backgroundColor: '#0259DB',
        alignItems: 'center',
    }
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