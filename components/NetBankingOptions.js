const netBankingOptions = ['Indusind Bank', 'City Union Bank', 'Sate Bank of Hydrabad', 'Syndicate Bank', 'Corporation Bank', 'Canera Bank', 'Saraswat Co-operative Bank', 'SBI', 'ICICI', 'HDFC', 'Saraswat Bank','Indusind Bank', 'City Union Bank', 'Sate Bank of Hydrabad', 'Syndicate Bank', 'Corporation Bank', 'Canera Bank', 'Saraswat Co-operative Bank', 'SBI', 'ICICI', 'HDFC', 'Saraswat Bank',]

import React from 'react'
import { StyleSheet } from 'react-native'
import { FlatList, View, Text, ScrollView } from 'react-native-web'
import { TouchableOpacity } from 'react-native'
const NetBankingOptions = () => {
    return (
        <View>
            <FlatList
                data={netBankingOptions}
                renderItem={({ item }) => {
                    return (
                        <ScrollView>
                            <View style={{ marginBottom: 10 }}>
                                <Text style={{ fontSize: 10 }}>{item}</Text>
                            </View>
                        </ScrollView>
                    );
                }}
            />
            <View>
        <TouchableOpacity style={styles.proceedBtn}>
          <Text style={{ textAlignVertical: 'center', color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>Proceed to pay</Text>
        </TouchableOpacity>
      </View>
        </View>
    )
}
const styles = StyleSheet.create({
    proceedBtn : {
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

export default NetBankingOptions
