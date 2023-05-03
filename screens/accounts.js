import React, { useEffect,useState } from "react";
import { 
    View, 
    Text, 
    ActivityIndicator, 
    StyleSheet,
    ScrollView
} from "react-native";
import Header from "../component/header";
import global from "../src/global"
import AccountInfo from "../component/accountInfo"
import Statement from "../component/statement";
import SmallStatement from "../component/smallStatement";
import { Dimensions } from "react-native";

const Accounts = ({ navigation, route }) => {

    let [isLoading, setIsLoading] = useState(true);
    let [isStatementLoading, setIsStatementLoading] = useState(true);
    let [accountDetails, setAccountDetails] = useState();
    let [accountStatement, setAccountStatement] = useState();
    let [error, setError] = useState();
    let [accountStatementFetched, setAccountStatementFetched] = useState(true);

    useEffect(() => {
        fetch(
          "https://api.khanbank.com:9003/v1/omni/user/custom/operativeaccounts/" + route.params.account,
          {
            method: "GET",
            headers: {
              "App-Version": "1.3.29-rc.480",
              "Accept-Language": "mn-MN",
              Authorization:
                "Bearer " + global.access_token,
              "Content-Type": "application/json",
              "Device-Id": "0C49AB76-F86E-4955-92D4-1DE7D4881A3F",
            }
          }
        )
          .then((response) => response.json())
          .then((res) => {
                setAccountDetails(JSON.stringify(res))
          })
          .then((res) => {
            setIsLoading(false);
          })
          .catch((error) => console.log("error", error));
      }, []);

    const getStatementAccount = async () => {
        setAccountStatementFetched(false)
        await fetch(
            "https://api.khanbank.com:9003/v1/omni/user/custom/operativeaccounts/" + route.params.account + "/transactions?transactionValue=0&transactionDate=%7B%22lt%22:%222023-04-01T00:00:00%22,%22gt%22:%222023-05-01T00:00:00%22%7D&amount=%7B%22lt%22:%220%22,%22gt%22:%220%22%7D&amountType=&transactionCategoryId=&transactionRemarks=&customerName=%D0%91%D0%90%D0%A2%D0%A2%D3%A8%D0%A0+%D0%94%D0%90%D0%A8%D0%9F%D0%AD%D0%9B%D0%96%D0%AD%D0%AD&transactionCurrency=MNT&branchCode=5041",
            {
              method: "GET",
              headers: {
                "App-Version": "1.3.29-rc.480",
                "Accept-Language": "mn-MN",
                Authorization:
                  "Bearer " + global.access_token,
                "Content-Type": "application/json",
                "Device-Id": "0C49AB76-F86E-4955-92D4-1DE7D4881A3F",
              }
            }
          )
            .then((response) => response.json())
            .then((res) => {
                  setAccountStatement(res)
            })
            .then((res) => {
              setIsStatementLoading(false);
            })
            .catch((error) => console.log("error", error));
    }
 
    const getContent = () => {
        if (isLoading) {
          return <ActivityIndicator size="large" />;
        }
        if (error) {
          return <Text> {error} </Text>;
        }
        var parsed_res = JSON.parse(accountDetails)
        var isPrimaryAccount = 'Үгүй'
        if (parsed_res.isPrimaryAccount == 'Y'){
            isPrimaryAccount = 'Тийм'
        }
        
        return (
                <AccountInfo 
                    accountId={parsed_res.accountId} 
                    accountName={parsed_res.accountName} 
                    isPrimaryAccount={isPrimaryAccount} 
                    availableBal={parsed_res.availableBal.amount} 
                    accountOpenDate={parsed_res.accountOpenDate.slice(0,10)}
                    accountStatus={parsed_res.accountStatus.codeDescription}
                    interestRate={parsed_res.interestRate}
                    dailyInterestAmount={parsed_res.dailyInterestAmount.amount}
                    interestAccrued={parsed_res.interestAccrued.amount}
                    interestAmount={parsed_res.interestAmount.amount}
                    interestFromDate={parsed_res.interestFromDate.slice(0,10)}
                    interestToDate={parsed_res.interestToDate.slice(0,10)} />
        )
    };

    const getStatements = () => {
        if (accountStatementFetched){
            getStatementAccount()
        }
        if (isStatementLoading) {
            return <ActivityIndicator size="large" />;
        }
        const windowWidth = Dimensions.get('window').width;
        return(
            <View>
                {accountStatement.map((item, index) => ( 
                  windowWidth > 600 ? 
                    <Statement 
                        transactionDate={item.transactionDate.slice(0,10)}
                        accountId={item.accountId}
                        txnTime={item.txnTime}
                        beginBalance={item.beginBalance.amount.toFixed(2)}
                        remark={item.transactionRemarks}
                        endbalance={item.endBalance.amount.toFixed(2)}
                        amount={item.amountType.cmCode=="05"?"-"+item.amount.amount:"+"+item.amount.amount}
                        oldTxnDate={index > 0?accountStatement[index-1].transactionDate.slice(0,10):""}
                        key={index}
                    /> :
                    <SmallStatement 
                      transactionDate={item.transactionDate.slice(0,10)}
                      accountId={item.accountId}
                      txnTime={item.txnTime}
                      beginBalance={item.beginBalance.amount}
                      remark={item.transactionRemarks}
                      endbalance={item.endBalance.amount}
                      amount={item.amountType.cmCode=='05'?"-"+item.amount.amount:"+"+item.amount.amount}
                      amountColor={item.amountType.cmCode=='05'?"red":"green"}
                      oldTxnDate={index > 0?accountStatement[index-1].transactionDate.slice(0,10):""}
                      key={index}
                    />
                ))}
            </View>
        )
    }

    return(
        
        <View>
            <Header />
            <ScrollView>
              <View style={{flexDirection: 'column', marginBottom: 10}}>
                  <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
                      {getContent()}
                  </View>
                  <View style={{borderWidth: 1, borderColor: 'white', width: '100%'}}>
                      {getStatements()}
                      {/* <Statement 
                          transactionDate="dsafwef"
                      /> */}
                  </View>
              </View>
            </ScrollView>
        </View>
    )
}

export default Accounts;