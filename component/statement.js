import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View,Text} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';


const ValuesField = props => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return(
    <View style={styles.full}>
      <View style={styles.header}>
        <Text style={{fontSize:20}}>
          {props.name}:
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder={props.placeholder}
            keyboardType="numeric"
          />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 70,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5
  },
  full: {
    flexDirection: 'row',
  },
  header: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  }
});

export default ValuesField;
