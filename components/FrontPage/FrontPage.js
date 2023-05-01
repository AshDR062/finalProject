import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { styles } from './FrontPageStyles';

import Svg, { Use, Image} from 'react-native-svg';

const FrontPage = () => {
  return (
    <View style={styles.container}>
        
        <View style={styles.leftView}>
          {/* <Text style={styles.headerBox}>Payment</Text> */}
          <View style={styles.innerItem}>
              <Text style={styles.headerItem}>Card</Text>
              <TouchableOpacity 
              style={styles.newCard}>
                <Svg width='32' height= '32' style={styles.cards} >
                  <Image href={require('/assets/payment/creditcard.svg')}/>

                </Svg>
                <Text style={styles.newCardTitle}>Add New Card</Text>
                
              </TouchableOpacity>
          </View>
          <View style={styles.innerItem}>
            <View>
              <Text style={styles.headerItem}>UPI</Text>
              <View style={styles.cardsSection}>
                <TouchableOpacity style={styles.upiCards}>
                  <Svg width='32' height= '32' style={styles.cards} >
                    <Image href={require('/assets/payment/gpay.svg')}/>

                  </Svg>
                  <Text style={styles.cardeTitle}>Google Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.upiCards}>
                  <Svg width='32' height= '32' style={styles.cards} >
                    <Image href={require('/assets/payment/phonepe.svg')}/>

                  </Svg>
                  <Text style={styles.cardeTitle}>Phone Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.upiCards}>
                  <Svg width='32' height= '32' style={styles.cards} >
                    <Image href={require('/assets/payment/upi.svg')}/>

                  </Svg>
                  <Text style={styles.cardeTitle}>UPI</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.innerItem}>
            <View>
              <Text style={styles.headerItem}>Net Banking</Text>
              <View style={styles.cardsSection}>
                <TouchableOpacity style={styles.netCards}>
                  <Svg width='32' height= '32' style={styles.cards} >
                    <Image href={require('/assets/payment/icici.svg')}/>

                  </Svg>
                  <Text style={styles.cardeTitle}>ICICI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.netCards}>
                  <Svg width='32' height= '32' style={styles.cards} >
                    <Image href={require('/assets/payment/sbi.svg')}/>

                  </Svg>
                  <Text style={styles.cardeTitle}>SBI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.netCards}>
                  <Svg width='32' height= '32' style={styles.cards} >
                    <Image href={require('/assets/payment/hdfc.svg')}/>

                  </Svg>
                  <Text style={styles.cardeTitle}>HDFC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.netCards}>
                  <Svg width='32' height= '32' style={styles.cards} >
                    <Image href={require('/assets/payment/axis.svg')}/>

                  </Svg>
                  <Text style={styles.cardeTitle}>AXIS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rightView}>
          <View style={styles.listBox2}>
            <View style={styles.listBox2Items}>
              <View  style={styles.listBox2ItemsRows}>
                <Text style={{fontWeight: 400,fontFamily:'Noto Sans'}}>Plan Selected:</Text>
                <Text style={{fontWeight: 400,fontFamily:'Noto Sans'}}>Plan 1</Text>
              </View>

            </View>
            <View style={styles.listBox2Items}>
              <View style={styles.listBox2ItemsRows}>            
                <Text style={{fontWeight: 400,fontFamily:'Noto Sans'}}>Payment Amount:</Text>
                <Text style={{fontWeight: 400,fontFamily:'Noto Sans'}}>&#x20B9; 500</Text>
              </View>
            </View>
            <View style={styles.listBox2Items}>
              <View style={styles.listBox2ItemsRows}>          
                <Text style={{fontWeight: 400,fontFamily:'Noto Sans'}}>GST: </Text>
                <Text style={{fontWeight: 400,fontFamily:'Noto Sans'}}>&#x20B9; 50</Text>
              </View>
            </View>
            <View style={styles.listBox2Items}>
              <View style={styles.listBox2ItemsRows}>
                <Text style={{fontWeight: 700,fontFamily:'Noto Sans'}}>Total amount:</Text>
                <Text style={{fontWeight: 700,fontFamily:'Noto Sans', }}>&#x20B9; 550</Text>
              </View>
            </View>

          </View>
          <TouchableOpacity style={styles.proceedBtn}>
            <Text style={{textAlignVertical: 'center', color: '#FFFFFF',fontSize:16,fontWeight:700}}>Proceed to pay</Text>
          </TouchableOpacity>
          
        </View>
      </View>
  )
}

export default FrontPage
