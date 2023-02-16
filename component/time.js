import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View,Text} from 'react-native';


const TimeField = props => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return(
    <View style={styles.full}>
        <View style={styles.header}>
          <Text style={{fontSize:20}}>
            {props.name}:
          </Text>
        </View>
        <View style={styles.field}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder={props.placeholder1}
                keyboardType="numeric"
                />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder={props.placeholder2}
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
    borderRadius: 5
  },
  full: {
    flexDirection: 'row',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1
  },
  field: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1
  }
});

export default TimeField;
