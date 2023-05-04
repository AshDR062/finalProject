
// Code for  card number Validation
// var txtCardNumber = document.querySelector("#txtCardNumber");
// txtCardNumber.addEventListener("input", onChangeTxtCardNumber);


const onChangeTxtCardNumber = (txtCardNumber) => {
    var cardNumber = txtCardNumber.toString();

      // Do not allow users to write invalid characters
    var formattedCardNumber = cardNumber.replace(/[^\d]/g, "");
    formattedCardNumber = formattedCardNumber.substring(0, 16);

    // Split the card number is groups of 4
    var cardNumberSections = formattedCardNumber.match(/\d{1,4}/g);
    if (cardNumberSections !== null) {
        formattedCardNumber = cardNumberSections.join('-');
    }

    console.log(`'${cardNumber}' to '${formattedCardNumber}`);

    // If the formmattedCardNumber is different to what is shown, change the value
    if (cardNumber !== formattedCardNumber) {
        txtCardNumber = formattedCardNumber;
    }
}
onChangeTxtCardNumber(5156987423654789458);
