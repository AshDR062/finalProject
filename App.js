import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

import Svg, { Use, Image} from 'react-native-svg';

const CardComponent = () => {

}
export default function App() {
  return (
    // <View><Text style={{fontSize:2100}}>Hi</Text></View>
    <SafeAreaView>
      <View style={styles.container}>
        
        <View style={styles.leftView}>
          {/* <Text style={styles.headerBox}>Payment</Text> */}
          <View style={styles.innerItem}>
              <Text style={styles.headerItem}>Card</Text>
              <TouchableOpacity 
              style={styles.newCard}>
                <Svg width='32' height= '32' style={styles.cards} >
                  <Image href={require('./assets/payment/creditcard.svg')}/>

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
                    <Image href={require('./assets/payment/gpay.svg')}/>

                  </Svg>
                  <Text style={styles.cardeTitle}>Google Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.upiCards}>
                  <Svg width='32' height= '32' style={styles.cards} >
                    <Image href={require('./assets/payment/phonepe.svg')}/>

                  </Svg>
                  <Text style={styles.cardeTitle}>Phone Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.upiCards}>
                  <Svg width='32' height= '32' style={styles.cards} >
                    <Image href={require('./assets/payment/upi.svg')}/>

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
                    <Image href={require('./assets/payment/icici.svg')}/>

                  </Svg>
                  <Text style={styles.cardeTitle}>ICICI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.netCards}>
                  <Svg width='32' height= '32' style={styles.cards} >
                    <Image href={require('./assets/payment/sbi.svg')}/>

                  </Svg>
                  <Text style={styles.cardeTitle}>SBI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.netCards}>
                  <Svg width='32' height= '32' style={styles.cards} >
                    <Image href={require('./assets/payment/hdfc.svg')}/>

                  </Svg>
                  <Text style={styles.cardeTitle}>HDFC</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.netCards}>
                  <Svg width='32' height= '32' style={styles.cards} >
                    <Image href={require('./assets/payment/axis.svg')}/>

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection:'row',
    backgroundColor: 'aqua',
    // justifyContent: 'space-between',
    display:'flex',
    gap: 24,
    
  },
  leftView : {
    height: 752,
    width: 520,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    backgroundColor:'#FFFFFF',
    flexDirection:'column',
    borderRadius: 8,
    // alignItems: 'flex-start'
    marginLeft: 180,
    marginTop: 164,
    // marginRight: 740,
    marginBottom: 512,
    display:'flex',
  },
  rightView : {
    height: 246,
    width: 520,
    borderColor: '#D9D9D9',
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    // flexDirection:'row',
    borderRadius: 8,
    Padding: 24,
    Gap: 24,
    // marginLeft: 740,
    marginTop: 164,
    // marginRight: 180,
    marginBottom: 806
  },
  innerItem: {
    flex:1,
    borderBottomWidth:1,
    borderBottomColor: '#D9D9D9' ,
    margin: 24,
    paddingLeft: 24,
    paddingRight: 24,
    

  },
  headerItem: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily:'Noto Sans',
    marginBottom: 16
  },
  headerBox: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily:'Noto Sans'
  },
  listBox2: {
    flexDirection: 'column'
  },
  listBox2Items: {
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
  },
  listBox2ItemsRows: {
    flexWrap: 'wrap',  
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'justify'    
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
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 8,
    backgroundColor: '#0259DB',
    alignItems: 'center',
  },
  cards: {
    Left: 31,
    paddingBottom:5
    
  },
  
  cardsSection: {
    flexDirection: 'row',
    flex: 1,
    alignContent: 'space-between',
    
  },
  cardeTitle: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: 8,
    // marginBottom: 6,
    bottom: 6,
    // height: 22,
    // width: 22,
    // padding:22

  },
  newCardTitle: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: 16,
    // marginBottom: 6,
    bottom: 6,
    // height: 22,
    // width: 22,
    // padding:22

  },
  newCard: {
    width:144, 
    height:110,
    borderColor:'#D9D9D9',
    borderWidth:1, 
    alignItems:'center',
    paddingTop: 16, 
    // paddingBottom: 22, 
    borderRadius: 8
},
  upiCards: {
    width:84, 
    height:90,
    borderColor:'#D9D9D9',
    borderWidth:1, 
    alignItems:'center',
    paddingTop: 16, 
    // paddingBottom: 22,  
    borderRadius: 8,
    margin: 10,
    marginLeft: 'inerit'
  },
  netCards: {
    // width:90,
    height:90, 
    borderColor:'#D9D9D9',
    borderWidth:1, 
    alignItems:'center',
    paddingTop: 16, 
    // paddingBottom: 22,  
    borderRadius: 8,
    flex:1,
    margin: 10
  },
});
