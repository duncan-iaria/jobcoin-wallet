import React from 'react';
import {KeyboardAvoidingView, ScrollView, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {format} from 'date-fns';

import {useAccount} from '../hooks';
import {
  Screen,
  H1Text,
  BalanceLineChart,
  CoinTransfer,
  BalanceDisplay,
  LinkButton,
} from '../components';
import {RootStackParamList, Screens} from '../navigation';

export const AccountScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, Screens.Account>) => {
  const accountAddress = route.params.accountId;
  const {data, isLoading, transactionsByDay} = useAccount(accountAddress);

  const chartLabels = transactionsByDay?.map(tempTransaction =>
    format(tempTransaction.day, 'do'),
  );

  const chartData = transactionsByDay?.map(tempTransaction => {
    return {x: tempTransaction.day, y: tempTransaction.balance};
  });

  console.log('chartData', chartData);

  return (
    <Screen>
      <KeyboardAvoidingView
        style={{flex: 1}}
        enabled
        behavior="position"
        keyboardVerticalOffset={20}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {isLoading ? (
            <H1Text>Loading...</H1Text>
          ) : (
            <>
              <BalanceLineChart data={chartData} markerLabels={chartLabels} />
              {/* <View style={{backgroundColor: 'rgb(253, 237, 195)'}}> */}
              <BalanceDisplay balance={data?.balance} />
              <CoinTransfer
                accountAddress={accountAddress}
                balance={data?.balance}
              />
              <View
                style={{
                  flex: 1,
                  marginTop: 20,
                  alignItems: 'center',
                }}>
                <LinkButton onPress={navigation.goBack}>Logout</LinkButton>
              </View>
              {/* </View> */}
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};
