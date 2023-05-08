import React from "react";
import { View, ScrollView, StyleSheet,Text, Button, TouchableHighlight } from "react-native";
import Header from "./../component/header";
import { TextInput } from "react-native-gesture-handler";
import base64 from 'react-native-base64'

const Login = ({ navigation }) => {

    const [username, onChangeUsername] = React.useState(null);
    const [password, onChangePassword] = React.useState("null");

    return(
        <View>
            <Header />
            <ScrollView style={{marginTop: 30}}>
                <View style={{flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{alignItems: 'center',flex: 1, height: '10%', width: '50%'}}>
                        <TextInput placeholder="Username" style={style.textInputStyle} onChangeText={text => onChangeUsername(text)} />
                    </View>
                    <View style={{alignItems: 'center',flex: 1, height: '10%', width: '50%', marginTop: 10}}>
                        <TextInput placeholder="Password" secureTextEntry={true} style={style.textInputStyle} onChangeText={text => onChangePassword(text)} />
                    </View>
                    <TouchableHighlight
                        style={style.submit}
                        onPress={()=>{
                            navigation.navigate('Home',{username: username, password: base64.encode(password)})
                        }}
                        underlayColor='#fff'>
                            <Text style={style.submitText}>Submit</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#009688',
        width: '100%',
        height: '100%',
        textAlign: 'center'
    },
    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#009688',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
        width: 150,
    }
})

export default Login;