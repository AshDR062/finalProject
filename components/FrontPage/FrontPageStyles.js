import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
      flexDirection:'row',
      backgroundColor: '#FFFFFF',
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