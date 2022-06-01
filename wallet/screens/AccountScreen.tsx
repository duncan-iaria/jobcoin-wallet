import React from 'react';
import {ScrollView, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {format} from 'date-fns';

import {useAccount} from '../hooks';
import {
  Screen,
  BodyText,
  H1Text,
  BalanceLineChart3,
  CoinTransfer,
} from '../components';
import {RootStackParamList, Screens} from '../navigation';

export const AccountScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, Screens.Account>) => {
  const {data, isLoading, transactionsByDay} = useAccount(
    route.params.accountId,
  );

  const chartLabels = transactionsByDay?.map(tempTransaction =>
    format(tempTransaction.day, 'do'),
  );

  const chartData = transactionsByDay?.map(tempTransaction => {
    return {x: tempTransaction.day, y: tempTransaction.balance};
  });

  console.log('chartData', chartData);

  return (
    <Screen>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {/* TODO Clean up nested ternary */}
        {isLoading ? (
          <H1Text>Loading...</H1Text>
        ) : chartData ? (
          <>
            {/* <BalanceLineChart labels={chartLabels} data={chartData} /> */}
            <BalanceLineChart3 data={chartData} markerLabels={chartLabels} />
            <BodyText>Balance</BodyText>
            <H1Text>{data?.balance}</H1Text>
            <CoinTransfer />
          </>
        ) : (
          <BodyText>Fund ME</BodyText>
        )}
      </ScrollView>
    </Screen>
  );
};
