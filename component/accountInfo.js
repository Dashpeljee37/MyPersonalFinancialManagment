import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const accountInfo = props => {
    return(
        <ScrollView style={{backgroundColor: '#f4f4f4',flexDirection: 'column', width: '100%'}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1,flexDirection: 'column'}}>
                        <View>
                            <Text style={style.fieldTitle}>
                                Дансны дугаар:
                            </Text>
                        </View>
                        <View>
                            <Text style={style.field}>
                                {props.accountId}
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 1,flexDirection: 'column'}}>
                        <View>
                            <Text style={style.fieldTitle}>
                                Дансны нэр:
                            </Text>
                        </View>
                        <View>
                            <Text style={style.field}>
                                {props.accountName}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1,flexDirection: 'column'}}>
                        <View>
                            <Text style={style.fieldTitle}>
                                Үндсэн данс:
                            </Text>
                        </View>
                        <View>
                            <Text style={style.field}>
                                {props.isPrimaryAccount}
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 1,flexDirection: 'column'}}>
                        <View>
                            <Text style={style.fieldTitle}>
                                Үлдэгдэл:
                            </Text>
                        </View>
                        <View>
                            <Text style={style.field}>
                                {props.availableBal.toFixed(2)}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1,flexDirection: 'column'}}>
                        <View>
                            <Text style={style.fieldTitle}>
                                Дансны нээгдсэн огноо:
                            </Text>
                        </View>
                        <View>
                            <Text style={style.field}>
                                {props.accountOpenDate}
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 1,flexDirection: 'column'}}>
                        <View>
                            <Text style={style.fieldTitle}>
                                Статус:
                            </Text>
                        </View>
                        <View>
                            <Text style={style.field}>
                                {props.accountStatus}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1,flexDirection: 'column'}}>
                        <View>
                            <Text style={style.fieldTitle}>
                                Хүү:
                            </Text>
                        </View>
                        <View>
                            <Text style={style.field}>
                                {props.interestRate}
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 1,flexDirection: 'column'}}>
                        <View>
                            <Text style={style.fieldTitle}>
                                Өдрийн хүү:
                            </Text>
                        </View>
                        <View>
                            <Text style={style.field}>
                                {props.dailyInterestAmount.toFixed(2)}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1,flexDirection: 'column'}}>
                        <View>
                            <Text style={style.fieldTitle}>
                                Хуримтлагдсан хүү:
                            </Text>
                        </View>
                        <View>
                            <Text style={style.field}>
                                {props.interestAccrued.toFixed(2)}
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 1,flexDirection: 'column'}}>
                        <View>
                            <Text style={style.fieldTitle}>
                                Хугацааны эцэст олгогдох хүү:
                            </Text>
                        </View>
                        <View>
                            <Text style={style.field}>
                                {props.interestAmount.toFixed(2)}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1,flexDirection: 'column'}}>
                        <View>
                            <Text style={style.fieldTitle}>
                                Хүү олгосон огноо:
                            </Text>
                        </View>
                        <View>
                            <Text style={style.field}>
                                {props.interestFromDate}
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 1,flexDirection: 'column'}}>
                        <View>
                            <Text style={style.fieldTitle}>
                                Дараагийн хүү олгогдох огноо:
                            </Text>
                        </View>
                        <View>
                            <Text style={style.field}>
                                {props.interestToDate}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
    );
}

const style = StyleSheet.create({
    fieldTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 13,
    },
    field: {
        color: 'black',
        borderWidth: 1, 
        borderRadius: 5, 
        fontSize: 15,
        borderColor: 'white'
    }
})

export default accountInfo;