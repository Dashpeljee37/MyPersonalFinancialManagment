import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Statement = props => {
    if (props.oldTxnDate != props.transactionDate){
        return (
            <View key={index} style={{alignItems: 'flex-start'}}> 
                <Text style={{color:'orange'}}>
                {item.transactionDate.slice(0,10)}
                </Text>
            </View>
        )
    }
    return(
        <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row', borderWidth: 1, borderColor: 'white'}}>
                <View style={{flex: 2}}>
                    <Text style={style.textField}>
                        {props.txnTime}
                    </Text>
                </View>
                <View style={style.rowField}>
                    <Text style={style.textField}>
                        {props.beginBalance}
                    </Text>
                </View>
                <View style={{flex: 6, borderWidth: 1, borderColor: 'white'}}>
                    <Text style={style.textField}>
                        {props.remark}
                    </Text>
                </View>
                <View style={style.rowField}>
                    <Text style={style.textField}>
                        {props.endbalance}
                    </Text>
                </View>
                <View style={style.rowField}>
                    <Text style={style.textField}>
                        {props.accountId}
                    </Text>
                </View>
                <View style={style.rowField}>
                    <Text style={style.textField}>
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

export default Statement;