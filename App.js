import React from 'react';
import {Text, View, StyleSheet, ScrollView, Platform,StatusBar, Navigator, TextInput} from 'react-native';
import ValuesField from './component/statement';
import TimeField from './component/time';
import AntDesign from 'react-native-vector-icons/AntDesign';

const YourApp = () => {
  return (
    <View style={{height: 900}}>
      <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
      />
      <View  style={style.header}>
        <View style={style.iconHeaderBox}>
          <AntDesign name='menuunfold' style={style.headerIcon} />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
          <Text style={style.headerText}>
            3D хэвлэлийн үнэ бодогч
          </Text>
        </View>
        <View style={{alignItems: 'flex-end', borderWidth: 1}}>
          <AntDesign name='menuunfold' style={style.headerIcon} />
        </View>
      </View>
      <View style={style.scroll}>
        <TimeField name='Хэвлэх цаг, минут' placeholder1='Цаг' placeholder2='Минут'/>
        <ValuesField name='Материал' placeholder='кг'/>

      </View>
    </View>
  );
};

const style = StyleSheet.create({
  scroll: {
    marginTop: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  amount: {
    flex: 1,
    width: 300,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  account: {
    justifyContent: 'flex-start'
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'dodgerblue',
  },
  headerText: {
    flex: 3,
    marginLeft:3,
    fontSize: 18, 
    color: 'white',
    fontWeight: 'bold',
    borderWidth: 1
  },
  headerIcon: {
    color:'black',
    fontSize: 20,
  },
  iconHeaderBox: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderWidth: 1
  }
})

export default YourApp;