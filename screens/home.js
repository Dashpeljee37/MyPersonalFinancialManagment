import React from "react";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "./../component/header";
import Account from "../component/account";
import { CommaFormatted, ProcessResponse } from "./../src/globalFunction"
import global from "./../src/global"

const Home = ({ navigation, route }) => {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [accessToken, setAccessToken] = useState();
  let [accounts, setAccounts] = useState();
  let [isAccountSuccess, setAccountSuccess] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.khanbank.com:9003/v1/cfrm/auth/token?grant_type=password",
      {
        method: "POST",
        headers: {
          "App-Version": "1.3.29-rc.480",
          "Accept-Language": "mn-MN",
          Authorization:
            "Basic Vm00eHFtV1BaQks3Vm5UYjNRRXJZbjlJZkxoWmF6enI6dElJQkFsU09pVXIwclV5cA==",
          "Content-Type": "application/x-www-form-urlencoded",
          "Device-Id": "0C49AB76-F86E-4955-92D4-1DE7D4881A3F",
        },
        body: '{\r\n    "grant_type": "password",\r\n    "username": "' + route.params.username + '",\r\n    "password": "cXdlcnF3ZXI0JA==",\r\n    "channelId": "I",\r\n    "languageId": "003"\r\n}',
      }
    )
      .then(ProcessResponse)
      .then(
        async (res) => {
          const { statusCode, data} = res
          console.log("statusCode: " + statusCode)
          console.log("response: " + data)
          setIsLoading(false);
          if (statusCode == 200){
            console.log("worked here login: " + data.access_token);
            // const account = getAllAccounts(res.access_token).then(res => console.log(res))
            setAccessToken(data.access_token)
            global.access_token = data.access_token
            global.refresh_token = data.refresh_token
            await fetch("https://api.khanbank.com:9003/v1/omni/accounts/", {
              method: "GET",
              headers: {
                "App-Version": "1.3.29-rc.480",
                "Accept-Language": "mn-MN",
                "Authorization": "Bearer " + data.access_token,
                "Content-Type": "application/x-www-form-urlencoded",
                "Device-Id": "0C49AB76-F86E-4955-92D4-1DE7D4881A3F",
              },
            }).then((response) => response.json())
              .then(
                (res) => {
                  // console.log(res);
                  setAccounts(res.allAccounts)
                  setAccountSuccess(true)
                },
                (error) => {
                  setError(error);
                }
              )
              .catch((error) => console.log("error", error)
          )
        }
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
      .catch((error) => console.log("error", error));
  }, []);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }
    if (error) {
      console.log('error' + error)
      return <Text> aldaa </Text>;
    }
    
    if (isAccountSuccess){
      return <View>
        {accounts.map(
          (item, index) => (
            <TouchableOpacity key={index} onPress={() => {
                navigation.navigate('Accounts',{account: item.accountId, access_token: accessToken})
            }}>
                <Account account={item.accountId} amount={item.balances[0].amountDetails.amount} currency={item.balances[0].amountDetails.currency} name={item.accountName}/>
            </TouchableOpacity>
        ))}
      </View>
    }
  };

  const getTotalAmount = () => {
    var total_amount = 0;
    var i = 0
    if (isAccountSuccess){
      for (i in accounts){
        total_amount = total_amount + accounts[i].balances[0].amountDetails.amount
      }
      return <Text style={{fontSize: 20, fontWeight: 'bold', color: '#398564'}}>{CommaFormatted(total_amount.toFixed(2))}</Text>
    }
  }

  const [minute, changedMinute] = React.useState("");
  const [hour, changedHour] = React.useState("");
  const [kg, changedKg] = React.useState("");

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={{ flexDirection: "column", flex: 1 }}>
        <Header />
        <ScrollView style={{backgroundColor: '#f4f4f4', marginTop: 10}}>
          {getContent()}
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1,alignItems:'flex-start', justifyContent: 'center'}}>
              <Text style={{fontSize:18, fontWeight: 'bold', color: 'grey'}}>Total amount:</Text>
            </View>
            <View style={{flex: 1,alignItems:'flex-end', justifyContent: 'center', marginRight: 10}}>
              {getTotalAmount()}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    height: 40,
    width: 70,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  scroll: {
    flex: 5,
    justifyContent: "center",
    alignItems: "stretch",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  amount: {
    flex: 1,
    width: 300,
    height: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  account: {
    justifyContent: "flex-start",
  },
  header: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "dodgerblue",
  },
  headerText: {
    flex: 3,
    marginLeft: 3,
    marginTop: 15,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  headerIcon: {
    color: "black",
    fontSize: 20,
  },
  iconHeaderBox: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  label: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  field: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
  },
});

export default Home;
