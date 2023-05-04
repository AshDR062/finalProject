import { useState } from 'react';

const expDate = () => {}


const [isReady, setIsReady] = useState(false);
const [cardExpiry, setCardExpiry] = useState("");
const [myNumber, setMyNumber] = useState("");

const  onChange = (text) => {
    let text = text.toString();
      let newText = '';
      let numbers = '0123456789';
  
      for (var i = 0; i < text.length; i++) {
          if ( numbers.indexOf(text[i]) > -1 ) {
              newText = newText + text[i];
          }
      }
      setMyNumber(newText);
  }
const  formatFunction = (cardExpiry) => {
     //expiryDate will be in the format MMYY, so don't make it smart just format according to these requirements, if the input has less than 2 character return it otherwise append `/` character between 2nd and 3rd letter of the input.
     if(cardExpiry.length < 2){
      return cardExpiry;
     }
     else{
      return cardExpiry.substr(0, 2) + "/" + (cardExpiry.substr(2) || "")
     }
  }
  
const  inputToValue = (inputText) => {
      //if the input has more than 5 characters don't set the state
      if(inputText.length < 6){
           const tokens = inputText.split("/");
           // don't set the state if there is more than one "/" character in the given input
           if(tokens.length < 3){
              const month = Number(tokens[1]);
              const year = Number(tokens[2]);
              //don't set the state if the first two letter is not a valid month
              if(month >= 1 && month <= 12){
                 let cardExpiry = month + "";
                 //I used lodash for padding the month and year with  zero
                 if(month > 1 || tokens.length === 2){
                      // user entered 2 for the month so pad it automatically or entered "1/" convert it to 01 automatically
                      setCardExpiry(_.padStart(month, 2, "0"))
                 }
                 //disregard changes for invalid years
                 if(year > 1 && year <= 99){
                     setCardExpiry(cardExpiry + year);
                 }
              }
           }
      }
  }
  
(123456).length;