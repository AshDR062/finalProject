import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import Svg, { Image } from "react-native-svg";

const QRCodePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftView}>
        <View style={styles.listBox2}>
          <View
            style={{
              borderWidth: 1,
              // flex: 1,
              borderRadius: 8,
              // justifyContent: 'space-between',
              // marginLeft: 12, marginRight: 12,
              marginTop: 12,
              borderColor: "#D9D9D9",
            }}
          >
            <View style={styles.listBox2ItemsRows}>
              <Text
                style={{
                  fontWeight: 400,
                  fontFamily: "Noto Sans",
                }}
              >
                Plan Selected:
              </Text>
              <Text
                style={{
                  fontWeight: 400,
                  fontFamily: "Noto Sans",
                }}
              >
                Plan 1
              </Text>
            </View>
            {/* </View> */}

            <View />
            <View style={styles.listBox2ItemsRows}>
              <Text
                style={{
                  fontWeight: 400,
                  fontFamily: "Noto Sans",
                }}
              >
                Payment Amount:
              </Text>
              <Text
                style={{
                  fontWeight: 400,
                  fontFamily: "Noto Sans",
                }}
              >
                &#x20B9; 500
              </Text>
            </View>
            {/* </View> */}

            {/* <View style={styles.listBox2Items}> */}
            <View style={styles.listBox2ItemsRows}>
              <Text
                style={{
                  fontWeight: 400,
                  fontFamily: "Noto Sans",
                }}
              >
                GST:
              </Text>
              <Text
                style={{
                  fontWeight: 400,
                  fontFamily: "Noto Sans",
                }}
              >
                &#x20B9; 50
              </Text>
            </View>
            {/* </View> */}

            {/* <View style={styles.listBox2Items}> */}
            <View style={[styles.listBox2ItemsRows, { paddingBottom: 12 }]}>
              <Text
                style={{
                  fontWeight: 700,
                  fontFamily: "Noto Sans",
                }}
              >
                Total amount:
              </Text>
              <Text
                style={{
                  fontWeight: 700,
                  fontFamily: "Noto Sans",
                }}
              >
                &#x20B9; 550
              </Text>
            </View>
            {/* </View> */}
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "#D9D9D9",
              height: "100vw",
              marginTop: 12,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Svg width="300" height="300">
              <Image
                href={require("/assets/payment/qrcode.png")}
                style={{ height: 300, width: 300 }}
              />
            </Svg>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={[styles.thinbreakLine]} />
          </View>
          <View>
          <TouchableOpacity  onPress={()=>{navigation.navigate("FrontPage")}} style={styles.proceedBtn}>
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
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
  },
  leftView: {
    flexDirection: "column",
    marginLeft: 12,
    marginRight: 12,
    display: "flex",
  },
  innerItem: {
    flex: 1,
    // borderBottomWidth: 1,
    // borderBottomColor: '#D9D9D9',
    marginTop: 12,
    marginBottom: 12,
  },
  headerItem: {
    fontSize: 12,
    fontWeight: 700,
    fontFamily: "Noto Sans",
  },
  headerBox: {
    fontSize: 20,
    fontWeight: 700,
    fontFamily: "Noto Sans",
  },
  listBox2: {
    flexDirection: "column",
    flex: 1,
    position: "relative",
  },
  listBox2Items: {},
  listBox2ItemsRows: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "justify",
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
    backgroundColor: "#0259DB",
    alignItems: "center",
  },
  cards: {},

  cardsSection: {
    flexDirection: "row",
    flex: 1,
  },
  cardsSectionUPI: {
    width: "74%",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  cardsSectionNet: {
    marginTop: 12,
    flexDirection: "row",
    flex: 1,
    alignContent: "center",
    justifyContent: "space-between",
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
    height: "120",
    borderColor: "#D9D9D9",
    borderWidth: 1,
    alignItems: "center",
    paddingTop: 16,
    borderRadius: 8,
  },
  upiCards: {
    width: 74,
    height: 90,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    alignItems: "center",
    paddingTop: 16,
    marginRight: 12,
    borderRadius: 8,
    alignContent: "space-between",
    justifyContent: "space-between",
    marginBottom: 12,
    marginTop: 12,
  },
  netCards: {
    width: 74,
    height: 80,
    borderColor: "#D9D9D9",
    borderWidth: 1,
    alignItems: "center",
    paddingTop: 16,
    marginRight: 12,
    borderRadius: 8,
    // flex:1,
    alignItems: "center",
  },
  thinbreakLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#d9d9d9",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    marginTop: 12,
  },
  upiInputText: {
    marginTop: 3,
    position: "relative",
    flexDirection: "row",
    postion: "relative",
    width: "100vw",
  },
  upiInputTextQRCode: {
    position: "relative",
  },
  main: {
    // Height: '100%',
    flex: 1,
    marginLeft: 12,
  },
  radioText: {},
  radio: {
    height: 16,
    width: 16,
    borderColor: "#5F9EA0",
    borderWidth: 2,
    borderRadius: 8,
    margin: 6,
  },
  radioWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioBG: {
    backgroundColor: "blue",
    height: 10,
    width: 10,
    borderRadius: 5,
    margin: 1,
    backfaceVisibility: "hidden",
  },
});

export default QRCodePage;
