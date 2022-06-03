import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {format} from 'date-fns';

import {useAccount} from '../hooks';
import {
  Screen,
  H2Text,
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

  // Leaving this in here so you can take a quick look at
  // The resulting data — if you want to
  // console.log('chartData', chartData);

  return (
    <Screen>
      <KeyboardAvoidingView
        enabled
        behavior="position"
        keyboardVerticalOffset={20}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <H2Text>Loading...</H2Text>
            </View>
          ) : (
            <>
              <BalanceLineChart data={chartData} markerLabels={chartLabels} />
              <BalanceDisplay balance={data?.balance} />
              <CoinTransfer
                accountAddress={accountAddress}
                balance={data?.balance}
              />
              <View style={styles.linkButtonContainer}>
                <LinkButton onPress={navigation.goBack}>Logout</LinkButton>
              </View>
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    height: screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkButtonContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
});
