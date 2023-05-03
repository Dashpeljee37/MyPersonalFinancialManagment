import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const statement = props => {

    return(
        <View style={{flexDirection: 'column', borderBottomWidth: 1,borderBottomColor: 'white', borderRadius: 5, minHeight: 80, width: '100%'}}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 10}}>
                    <Text style={{fontSize:15,color: 'black'}}>
                        {props.name}
                    </Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <View style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 10}}>
                    <Text style={{fontSize:15,color: 'grey'}}>
                        {props.account}
                    </Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center', marginRight: 10}}>
                    <Text style={{fontSize:15,color: '#398564', fontWeight: 'bold'}}>
                        {props.amount} {props.currency}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default statement;
