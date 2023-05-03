const netBankingOptions = [{ id: 1, bankName: 'Indusind Bank' }, { id: 2, bankName: 'City Union Bank' }, { id: 3, bankName: 'Sate Bank of Hydrabad' }, { id: 4, bankName: 'Corporation Bank' }, { id: 5, bankName: 'Canera Bank' }, { id: 6, bankName: 'Saraswat Co-operative Bank' }, { id: 7, bankName: 'SBI' }, { id: 8, bankName: 'ICICI' }, { id: 9, bankName: 'HDFC' }, { id: 10, bankName: 'Saraswat Bank' }, { id: 11, bankName: 'Indusind Bank' }, { id: 12, bankName: 'City Union Bank' }, { id: 13, bankName: 'Sate Bank of Hydrabad' }, { id: 14, bankName: 'Syndicate Bank' }, { id: 15, bankName: 'Corporation Bank' }, { id: 16, bankName: 'Canera Bank' }, { id: 17, bankName: 'Saraswat Co-operative Bank' }, { id: 18, bankName: 'SBI' }, { id: 19, bankName: 'ICICI' }, { id: 20, bankName: 'HDFC' }, { id: 21, bankName: 'Saraswat Bank2' }, { id: 31, bankName: 'Indusind Bank' }, { id: 32, bankName: 'City Union Bank' }, { id: 33, bankName: 'Sate Bank of Hydrabad' }, { id: 34, bankName: 'Corporation Bank' }, { id: 35, bankName: 'Canera Bank' }, { id: 36, bankName: 'Saraswat Co-operative Bank' }, { id: 37, bankName: 'SBI' }, { id: 38, bankName: 'ICICI' }, { id: 39, bankName: 'HDFC' }, { id: 40, bankName: 'Saraswat Bank' },]

import React from 'react'
import { StyleSheet } from 'react-native'
import { FlatList, View, Text, ScrollView } from 'react-native-web'
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';

const NetBankingOptions = (navigation) => {

    const [isSelected, setIsSelected] = useState(1);

    return (
        <View>
            <View>
                <ScrollView style={styles.main}>
                    {
                        netBankingOptions.map((item, index) => <TouchableOpacity key={index} onPress={() => setIsSelected(item.id)}>
                            <View style={styles.radioWrapper}>
                                <View style={styles.radio}>
                                    {
                                        isSelected === item.id ? <View style={styles.radioBG}></View> : null
                                    }
                                </View>
                                <Text style={styles.radioText}>{item.bankName}</Text>

                            </View>
                        </TouchableOpacity>)
                    }
                </ScrollView>
                <View>
                    {/* <FlatList
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
                    key={netBankingOptions.id}
                /> */}
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#d9d9d9', shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 2, shadowOffset: { height: 1, width: 1 } }} />
                        </View>
                        <TouchableOpacity style={styles.proceedBtn}>
                            <Text style={{ textAlignVertical: 'center', color: '#FFFFFF', fontSize: 16, fontWeight: 700 }}>Proceed to pay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        // Height: '100%',
        flex: 1,
        marginLeft:12
    },
    proceedBtn: {
        // position:'absolute',
        margin: 12,
        fontSize: 16,
        height: 46,
        fontWeight: 700,
        // top: 11,
        left: 0,
        paddingTop: 11,
        // paddingLeft: 22,      
        paddingBottom: 11,
        // marginLeft: 24,
        // marginRight: 24,
        borderRadius: 8,
        backgroundColor: '#0259DB',
        alignItems: 'center',
    },
    radioText: {

    },
    radio: {
        height: 16,
        width: 16,
        borderColor: '#5F9EA0',
        borderWidth: 2,
        borderRadius: 8,
        margin: 6
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    radioBG: {
        backgroundColor: 'blue',
        height: 10,
        width: 10,
        borderRadius: 5,
        margin: 1.6
    }
})

export default NetBankingOptions;
