import React from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Header = () => {
  return(
    <View >
        <StatusBar
        backgroundColor="blue"
        barStyle="light-content"
        />
        <View  style={style.header}>
            {/* <View style={style.iconHeaderBox}>
                <AntDesign name='menuunfold' style={style.headerIcon} />
            </View> */}
            <View style={{alignItems: 'center'}}>
                <Text style={style.headerText}>
                    Хувийн санхүүч
                </Text>
            </View>
            {/* <View style={{alignItems: 'flex-end',marginRight: 10}}>
                <AntDesign name='menuunfold' style={style.headerIcon} />
            </View> */}
        </View>
    </View>
  )
};

const style = StyleSheet.create({
    header: {
      height: 50,
      // flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'dodgerblue',
      display: 'flex'
    },
    headerText: {
      flex: 3,
      marginLeft:3,
      marginTop: 8,
      fontSize: 20, 
      color: 'white',
      fontWeight: 'bold',
    },
    headerIcon: {
      color:'black',
      fontSize: 20,
    },
    iconHeaderBox: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginLeft: 10
    }
  })

export default Header;
