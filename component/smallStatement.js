import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Collapsible from 'react-native-collapsible';

const smallStatement = props => {
    var dateTime = <View style={{display: 'none'}}><Text></Text></View>
    if (props.oldTxnDate != props.transactionDate){
        dateTime = (
            <View style={{alignItems: 'flex-start'}}> 
                <Text style={{color:'orange'}}>
                    {props.transactionDate}
                </Text>
            </View>
        )
    }

    return (
        <View style={{flexDirection: 'column'}}>
            <View>
                {dateTime}
            </View>
            <View style={{flexDirection: 'row', borderWidth: 1, borderColor: 'white'}}>
                <View style={{flex: 1.5}}>
                    <Text style={style.textField}>
                        {props.txnTime}
                    </Text>
                </View>
                <View style={{flex: 6, borderWidth: 1, borderColor: 'white',flexWrap: 'nowrap'}}>
                    <Text style={[style.textField,{fontSize: 11}]}>
                        {props.remark}
                    </Text>
                </View>                
                <View style={style.rowField}>
                    <Text style={style.textField}>
                        {props.accountId}
                    </Text>
                </View>
                <View style={style.rowField}>
                    <Text style={[style.textField,{color: props.amountColor}]}>
                        {props.amount}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    rowField: {
        flex: 2,
        borderWidth: 1,
        borderColor: 'white',
    },
    textField: {
        fontSize: 13
    }
})

export default smallStatement;