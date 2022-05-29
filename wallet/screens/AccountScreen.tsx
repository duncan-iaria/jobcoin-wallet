import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {useAccount} from '../hooks';
import {Screen, BodyText, H1Text} from '../components';
import {RootStackParamList, Screens} from '../navigation';

export const AccountScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, Screens.Account>) => {
  const {data} = useAccount(route.params.accountId);

  return (
    <Screen>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <BodyText>Balance</BodyText>
        <H1Text>{data?.balance}</H1Text>
      </ScrollView>
    </Screen>
  );
};
