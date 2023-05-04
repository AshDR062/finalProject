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



getDefaultProps =  function () {
    return {
        delimiter: "/"
    };
},

getInitialState =  function () {
    return {
        maxLength: this.props.delimiter.length + 4,
        value: ''
    };
},

correctInput= function (event) {
    var target = event.target,
        value = target.value,
        key = event.key,
        typeKey,
        monthMin = "01",
        monthMax = "12",
        delimiter = this.props.delimiter,
        yearMin = (new Date).getFullYear() - 2000,
        yearMax = (new Date).getFullYear() - 2000 + 25;
    debugger;
    if (/(\d|ArrowLeft|ArrowRight|Backspace|Delete|Tab)/.test(key)) {
        if (/(\d)/.test(key)) {
            typeKey = 'number';
        } else {
            typeKey = 'specSymbol';
        }

        if (value.length == 0 && key > 1) { // 2 -> 02/
            target.value = ("0" + key + delimiter);
            event.preventDefault();
        }

        if (value.length == 1 && value[0] != "0" && key > 2) { // 16 -> 12/
            target.value = monthMax + delimiter;
            event.preventDefault();
            return;
        }

        if (value.length == 1 && typeKey != 'specSymbol') { //12 backspace -> 1
            target.value = target.value + key + delimiter;
            event.preventDefault();
        }

        if (value.length == 2 && typeKey != 'specSymbol') { // 2 -> 02/
            target.value = (target.value + delimiter + key);
            event.preventDefault();
            return;
        }

        if (value == '0' && key == '0') {  // 00 -> 01
            target.value = monthMin + delimiter;
            event.preventDefault();
            return;
        }

        if (target.value.length + 1 == this.state.maxLength) { // 12/11 -> 12/16
            var arr = target.value.split(this.props.delimiter);

            if (arr[0].length == 2 && arr[1] + key < yearMin) {
                target.value = arr[0] + delimiter + yearMin;
                event.preventDefault();
                return;
            }

            if (arr[0].length == 2 && arr[1] + key > yearMax) {  // 12/55 -> 12/41
                target.value = arr[0] + delimiter + yearMax;
                event.preventDefault();
                return;
            }
        }

    } else {
        event.preventDefault();
        return;
    }
}
