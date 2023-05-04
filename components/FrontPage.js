import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, TextInput } from 'react-native';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
// import { styles } from './FrontPageStyles';
import { useState } from 'react';
import Svg, { Use, Image } from 'react-native-svg';
import NewCard from './NewCard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FrontPage = ({ navigation }) => {

  const [isAccepting, setIsAccepting] = useState(false);
  const [isNewCard, setIsNewCard] = useState(false);
  const [isUPICardSelected, setIsUPICardSelected] = useState(false);

  const handleNewCreditCard = () => {
    setIsNewCard(true)
  }

  const handleUPIOption = () => {
    // console.warn("Upi option is selected")
    setIsUPICardSelected(!isUPICardSelected);
  }

  const handleNetBankOption = () => {
    console.log("Net Banking option selected")
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <View style={styles.listBox2}>
          <View style={{
            borderWidth: 1,
            // flex: 1, 
            borderRadius: 8,
            // justifyContent: 'space-between', 
            // marginLeft: 12, marginRight: 12, 
            marginTop: 12,
            borderColor: '#D9D9D9'
          }}>
            <View style={styles.listBox2ItemsRows}>
              <Text style={{
                fontWeight: 400,
                fontFamily: 'Noto Sans'
              }}>
                Plan Selected:
              </Text>
              <Text style={{
                fontWeight: 400,
                fontFamily: 'Noto Sans'
              }}>
                Plan 1
              </Text>
            </View>
            {/* </View> */}

            <View />
            <View style={styles.listBox2ItemsRows}>
              <Text style={{
                fontWeight: 400,
                fontFamily: 'Noto Sans'
              }}>
                Payment Amount:
              </Text>
              <Text style={{
                fontWeight: 400,
                fontFamily: 'Noto Sans'
              }}>
                &#x20B9; 500
              </Text>
            </View>
            {/* </View> */}

            {/* <View style={styles.listBox2Items}> */}
            <View style={styles.listBox2ItemsRows}>
              <Text style={{
                fontWeight: 400,
                fontFamily: 'Noto Sans'
              }}>
                GST:
              </Text>
              <Text style={{
                fontWeight: 400,
                fontFamily: 'Noto Sans'
              }}>
                &#x20B9; 50
              </Text>
            </View>
            {/* </View> */}

            {/* <View style={styles.listBox2Items}> */}
            <View style={[styles.listBox2ItemsRows, { paddingBottom: 12 }]}>
              <Text style={{
                fontWeight: 700,
                fontFamily: 'Noto Sans'
              }}>
                Total amount:
              </Text>
              <Text style={{
                fontWeight: 700,
                fontFamily: 'Noto Sans'
              }}>
                &#x20B9; 550
              </Text>
            </View>
            {/* </View> */}
          </View>
          <View style={{ flex: 3 }}>
            <View style={styles.innerItem}>
              <View>
                <Text
                  style={styles.headerItem}>
                  Card
                </Text>
                <TouchableOpacity onPress={({ navigation }) => navigation.navigate('NewCard')}
                  style={[styles.newCard, { marginBottom: 12, marginTop: 12, width: '20%', textAlign: 'center' }]}>
                  {
                    isNewCard ? <NewCard /> :
                      <>
                        <Svg width='32' height='32' >
                          <Image href={require('/assets/payment/creditcard.svg')} />
                        </Svg>
                        <Text style={styles.newCardTitle}>Add New Card</Text>
                      </>
                  }
                </TouchableOpacity>

              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <View style={styles.thinbreakLine} />
            </View>
            <View style={[styles.innerItem, {marginBottom:-1}]}>
              <View>
                <Text style={styles.headerItem}>UPI</Text>
                <View style={styles.cardsSectionUPI}>
                  <TouchableOpacity style={styles.upiCards} onPress={handleUPIOption}>
                    <Svg width='32' height='32' >
                      <Image href={require('/assets/payment/gpay.svg')} />
                    </Svg>
                    <Text style={styles.cardsTitle}>GPay</Text>
                  </TouchableOpacity>
                  <View>
                    <TouchableOpacity style={styles.upiCards} onPress={handleUPIOption}>
                      <Svg width='32' height='32' >
                        <Image href={require('/assets/payment/phonepe.svg')} />
                      </Svg>
                      <Text style={styles.cardsTitle}>Phone Pay</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.upiCards} onPress={handleUPIOption}>
                    <Svg width='32' height='32' >
                      <Image href={require('/assets/payment/upi.svg')} />

                    </Svg>
                    <Text style={styles.cardsTitle}>UPI</Text>
                  </TouchableOpacity>
                </View>

              </View>

            </View>
            {
              isUPICardSelected ?
                <>
                  <Text>UPI ID </Text>
                  <View style={styles.upiInputText}>
                    <TextInput placeholder='Enter your UPI ID' style={{paddingLeft:5,marginRight:12, borderWidth:1, borderColor: 'D9D9D9', height:25, width:'75%'}} />
                    <TouchableWithoutFeedback style={styles.upiInputTextQRCode} onPress={handleUPIOption}>
                      <Svg width='25' height='25'>
                        <Image href={require('/assets/payment/qrcode.png')} style={{ height: 25, width: 25 }} />
                      </Svg>
                    </TouchableWithoutFeedback>
                  </View>
                </> :
                null
            }
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <View style={styles.thinbreakLine} />
            </View>
            <View style={styles.innerItem}>
              <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', }}>
                  <Text style={styles.headerItem}>Net Banking</Text>
                  <TouchableOpacity><Text style={{ color: '#000E14' }}> View All  &#x27A4;</Text></TouchableOpacity>
                </View>
                <View style={styles.cardsSectionNet}>
                  <TouchableOpacity style={styles.netCards}>
                    <Svg width='32' height='32'>
                      <Image href={require('/assets/payment/icici.svg')} />

                    </Svg>
                    <Text style={styles.cardsTitle}>ICICI</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.netCards}>
                    <Svg width='32' height='32' >
                      <Image href={require('/assets/payment/sbi.svg')} />

                    </Svg>
                    <Text style={styles.cardsTitle}>SBI</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.netCards}>
                    <Svg width='32' height='32' >
                      <Image href={require('/assets/payment/hdfc.svg')} />

                    </Svg>
                    <Text style={styles.cardsTitle}>HDFC</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.netCards}>
                    <Svg width='32' height='32' >
                      <Image href={require('/assets/payment/axis.svg')} />

                    </Svg>
                    <Text style={styles.cardsTitle}>AXIS</Text>
                  </TouchableOpacity>

                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <View style={[styles.thinbreakLine,]} />
              </View>
            </View>
          </View>

        </View>

        <View>
          <TouchableOpacity style={styles.proceedBtn}>
            <Text style={{ textAlignVertical: 'center', color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>Proceed to pay</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',

  },
  leftView: {
    flexDirection: 'column',
    marginLeft: 12,
    marginRight: 12,
    display: 'flex',
  },
  // rightView: {
  //   // height: 246,
  //   // width: 520,
  //   borderColor: '#D9D9D9',
  //   borderWidth: 2,
  //   backgroundColor: '#FFFFFF',
  //   // flexDirection:'row',
  //   // borderRadius: 8,
  //   Padding: 24,
  //   Gap: 24,
  //   // marginLeft: 740,
  //   // marginTop: 164,
  //   // marginRight: 180,
  //   // marginBottom: 806
  // },
  innerItem: {
    flex: 1,
    // borderBottomWidth: 1,
    // borderBottomColor: '#D9D9D9',
    marginTop: 12,
    marginBottom: 12
  },
  headerItem: {
    fontSize: 12,
    fontWeight: 700,
    fontFamily: 'Noto Sans',
  },
  headerBox: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: 'Noto Sans'
  },
  listBox2: {
    flexDirection: 'column',
    flex: 1,
    position: 'relative'
  },
  listBox2Items: {
    // marginTop: 24,
    // marginLeft: 24,
    // marginRight: 24,
  },
  listBox2ItemsRows: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'justify',
    paddingLeft: 12,
    paddingTop: 12,
    paddingRight: 12,
  },
  proceedBtn: {
    fontSize: 16,
    height: 46,
    fontWeight: 700,
    paddingTop: 11,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#0259DB',
    alignItems: 'center',
  },
  cards: {
    // Left: 31,
    // paddingBottom: 5

  },

  cardsSection: {
    flexDirection: 'row',
    flex: 1,
  },
  cardsSectionUPI: {
    width: "74%",
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  cardsSectionNet: {
    marginTop: 12,
    flexDirection: 'row',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'space-between'


  },
  cardsTitle: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: 8,
    marginBottom: 6,

  },
  newCardTitle: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: 16,
    bottom: 6,

  },
  newCard: {
    width: 100,
    height: '120',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    alignItems: 'center',
    paddingTop: 16,
    borderRadius: 8
  },
  upiCards: {
    width: 74,
    height: 90,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    alignItems: 'center',
    paddingTop: 16,
    marginRight: 12,  
    borderRadius: 8,
    alignContent: 'space-between',
    justifyContent: 'space-between',
    marginBottom: 12,
    marginTop: 12
  },
  netCards: {
    width:74,
    height: 80,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    alignItems: 'center',
    paddingTop: 16,
    marginRight: 12,  
    borderRadius: 8,
    // flex:1,
    alignItems: 'center'
  },
  thinbreakLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#d9d9d9',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    marginTop: 12
  },
  upiInputText:
  {
    marginTop: 3,
    position: 'relative',
    flexDirection: 'row',
    postion: 'relative',
    width: '100vw'
  }
  ,
  upiInputTextQRCode: {
    position: 'relative',
  }
});

export default FrontPage
