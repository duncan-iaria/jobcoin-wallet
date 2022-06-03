import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screens, RootStackParamList} from '../navigation';
import {
  Screen,
  PrimaryButton,
  ButtonText,
  H2Text,
  JobCoinTextInput,
} from '../components';

export const SignInScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, Screens.SignIn>) => {
  const [accountString, setAccountString] = useState('');

  const onLogin = () => {
    if (accountString.length === 0) {
      return;
    }

    navigation.navigate(Screens.Account, {accountId: accountString});
  };

  return (
    <Screen>
      <View style={styles.container}>
        <H2Text style={styles.titleText}>Job Coin™</H2Text>
        <JobCoinTextInput
          onChangeText={setAccountString}
          value={accountString}
        />
        <PrimaryButton
          onPress={() => {
            console.log('hey');
            onLogin();
          }}>
          <ButtonText>LOGIN</ButtonText>
        </PrimaryButton>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    marginBottom: 8,
  },
});
