import React from 'react';
import {ScrollView} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {format} from 'date-fns';

import {useAccount} from '../hooks';
import {Screen, BodyText, H1Text, BalanceLineChart} from '../components';
import {RootStackParamList, Screens} from '../navigation';

export const AccountScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, Screens.Account>) => {
  const {data, transactionsByDay} = useAccount(route.params.accountId);

  const chartLabels = transactionsByDay?.map(tempTransaction =>
    format(tempTransaction.day, 'do'),
  );
  const chartData = transactionsByDay?.map(
    tempTransaction => tempTransaction.balance,
  );

  return (
    <Screen>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <BalanceLineChart labels={chartLabels} data={chartData} />
        <BodyText>Balance</BodyText>
        <H1Text>{data?.balance}</H1Text>
      </ScrollView>
    </Screen>
  );
};
